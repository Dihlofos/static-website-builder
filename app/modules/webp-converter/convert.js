import { readdir, stat, unlink } from 'node:fs/promises'
import { join, extname, dirname, relative, basename } from 'node:path'
import sharp from 'sharp'

const RASTER_EXTS = new Set(['.png', '.jpg', '.jpeg'])
const CONCURRENCY = 5

/**
 * Рекурсивно обходит директорию и возвращает пути всех файлов.
 */
async function walkDir(dir) {
  const files = []
  const entries = await readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...await walkDir(fullPath))
    } else if (entry.isFile()) {
      files.push(fullPath)
    }
  }
  return files
}

/**
 * Удаляет .webp-файлы, для которых не осталось исходного PNG/JPG.
 */
async function removeOrphanWebp(files) {
  const originals = new Set()

  for (const f of files) {
    const ext = extname(f).toLowerCase()
    if (RASTER_EXTS.has(ext)) {
      originals.add(join(dirname(f), basename(f, ext)))
    }
  }

  let removed = 0
  for (const f of files) {
    if (extname(f).toLowerCase() !== '.webp') continue
    const base = join(dirname(f), basename(f, '.webp'))
    if (!originals.has(base)) {
      await unlink(f)
      removed++
    }
  }

  return removed
}

/**
 * Конвертирует одно изображение в WebP, если это необходимо.
 * Возвращает 'converted', 'skipped' или 'error'.
 */
async function convertToWebp(inputPath, quality) {
  const ext = extname(inputPath).toLowerCase()
  if (!RASTER_EXTS.has(ext)) return 'error'

  const outputPath = join(dirname(inputPath), `${basename(inputPath, ext)}.webp`)

  try {
    const [inputStat, outputStat] = await Promise.all([
      stat(inputPath),
      stat(outputPath).catch(() => null),
    ])

    // Если webp уже есть и свежее оригинала — пропускаем
    if (outputStat && outputStat.mtime >= inputStat.mtime) {
      return 'skipped'
    }

    await sharp(inputPath)
      .webp({ quality })
      .toFile(outputPath)

    return 'converted'
  } catch (err) {
    console.error(`[webp-converter] Ошибка конвертации: ${inputPath} — ${err.message}`)
    return 'error'
  }
}

/**
 * Конвертирует массив изображений с ограничением конкурентности.
 */
async function convertBatch(files, quality, srcDir) {
  let converted = 0
  let skipped = 0
  let errors = 0
  let idx = 0

  async function worker() {
    while (idx < files.length) {
      const file = files[idx++]
      const result = await convertToWebp(file, quality)
      const rel = relative(srcDir, file)

      if (result === 'converted') {
        console.log(`  ✓ ${rel} → .webp`)
        converted++
      } else if (result === 'skipped') {
        skipped++
      } else {
        errors++
      }
    }
  }

  const workers = Array.from({ length: Math.min(CONCURRENCY, files.length) }, () => worker())
  await Promise.all(workers)

  return { converted, skipped, errors }
}

/**
 * Основная функция — обходит public/images и конвертирует все png/jpg.
 * @param {string} srcDir — абсолютный путь к srcDir (app/)
 * @param {object} [options]
 * @param {number} [options.quality=85]
 * @param {boolean} [options.cleanOrphans=true]
 */
export async function convertImages(srcDir, options = {}) {
  const quality = options.quality ?? 85
  const cleanOrphans = options.cleanOrphans ?? true

  const imagesDir = join(srcDir, 'public/images')

  let files
  try {
    files = await walkDir(imagesDir)
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('[webp-converter] Директория public/images не найдена — пропускаем')
      return
    }
    console.error(`[webp-converter] Не удалось прочитать директорию ${imagesDir}:`, err.message)
    return
  }

  if (files.length === 0) {
    console.log('[webp-converter] public/images пуста — пропускаем')
    return
  }

  // 1. Удаляем orphaned .webp
  if (cleanOrphans) {
    const orphans = await removeOrphanWebp(files)
    if (orphans > 0) {
      console.log(`[webp-converter] Удалено осиротевших .webp: ${orphans}`)
    }
  }

  // 2. Конвертируем
  const imageFiles = files.filter((f) => RASTER_EXTS.has(extname(f).toLowerCase()))
  if (imageFiles.length === 0) {
    console.log('[webp-converter] Нет растровых изображений для конвертации')
    return
  }

  const { converted, skipped, errors } = await convertBatch(imageFiles, quality, srcDir)
  console.log(`[webp-converter] Готово: ${converted} конвертировано, ${skipped} пропущено${errors ? `, ${errors} ошибок` : ''}`)
}
