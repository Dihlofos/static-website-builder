<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

const props = defineProps({
  items: { type: Array, required: true },
  arrowLeft: { type: String, required: true },
  arrowRight: { type: String, required: true },
  /** @type {number} Ширина экрана в px, выше которой включается Swiper-слайдер */
  desktopBreakpoint: { type: Number, default: 1025 },
})

// ═══════════════════════════════════════════
// Переключение Desktop ↔ Mobile
// ═══════════════════════════════════════════
const isDesktop = ref(false)
let mql = null

function checkBreakpoint() {
  isDesktop.value = window.innerWidth >= props.desktopBreakpoint
}

onMounted(() => {
  checkBreakpoint()
  mql = window.matchMedia(`(min-width: ${props.desktopBreakpoint}px)`)
  mql.addEventListener('change', checkBreakpoint)
})

onBeforeUnmount(() => {
  if (mql) mql.removeEventListener('change', checkBreakpoint)
})

// ═══════════════════════════════════════════
// Навигационные стрелки (только desktop)
// ═══════════════════════════════════════════
const prevRef = ref(null)
const nextRef = ref(null)
</script>

<template>
  <div class="slider">
    <!-- ═══ Desktop: Swiper ═══ -->
    <div v-if="isDesktop" class="slider__desktop">
      <button
        ref="prevRef"
        class="slider__arrow slider__arrow--left"
        type="button"
        aria-label="Назад"
      >
        <Image :src="arrowLeft" alt="" width="57" height="57" />
      </button>

      <div class="slider__viewport">
        <Swiper
          :modules="[Navigation]"
          :slides-per-view="3"
          :space-between="24"
          :slides-per-group="1"
          :allow-touch-move="true"
          :navigation="{ prevEl: prevRef, nextEl: nextRef }"
          :watch-overflow="true"
          :resistance-ratio="0"
        >
          <SwiperSlide
            v-for="(item, index) in items"
            :key="index"
            class="slider__slide"
          >
            <slot name="slide" :item="item" :index="index" />
          </SwiperSlide>
        </Swiper>
      </div>

      <button
        ref="nextRef"
        class="slider__arrow slider__arrow--right"
        type="button"
        aria-label="Вперёд"
      >
        <Image :src="arrowRight" alt="" width="57" height="57" />
      </button>
    </div>

    <!-- ═══ Tablet / Mobile: нативный CSS-скролл ═══ -->
    <div v-else class="slider__native">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="slider__native-slide"
      >
        <slot name="slide" :item="item" :index="index" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
// ═══════════════════════════════════════════
// Общие стили
// ═══════════════════════════════════════════
.slider {
  --slider-slide-width: 37rem;

  // ═══ Desktop: Swiper ═══
  &__desktop {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6.3rem;
  }

  &__viewport {
    overflow: hidden;

    .swiper {
      overflow: visible;
    }

    .swiper-wrapper {
      display: flex;
    }
  }

  &__slide {
    // Ширина управляется через slidesPerView, не переопределяем
  }

  // ═══ Стрелки ═══
  &__arrow {
    flex-shrink: 0;
    width: 5.7rem;
    height: 5.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    transition: opacity 0.2s;
    z-index: 5;

    &:hover {
      opacity: 0.8;
    }

    &--disabled,
    &.swiper-button-disabled {
      opacity: 0.3;
      pointer-events: none;
    }
  }

  // ═══ Tablet / Mobile: нативный скролл ═══
  &__native {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    gap: 1.2rem;
    padding: 0 var(--container-padding, 2rem);
    margin: 0 calc(-1 * var(--container-padding, 2rem));
    -webkit-overflow-scrolling: touch;

    // Скрываем скроллбар
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__native-slide {
    flex-shrink: 0;
    scroll-snap-align: start;
    width: var(--slider-slide-width);
  }
}

// ═══════════════════════════════════════════
// Адаптив через CSS (без JS)
// ═══════════════════════════════════════════
@media (max-width: $tablet) {
  .slider {
    --slider-slide-width: 30rem;
  }
}

@media (max-width: $mobile) {
  .slider {
    --slider-slide-width: 28rem;
  }
}
</style>
