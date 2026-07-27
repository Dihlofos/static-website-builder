import { B as openBlock, C as createElementBlock, I as renderSlot, J as normalizeClass, M as Fragment, N as renderList, K as createCommentVNode, D as createBaseVNode, O as normalizeProps, P as guardReactiveProps, U as mergeProps, m as computed } from "./CtvTRxII.js";
const _sfc_main$1 = {
  __name: "Container",
  props: {
    narrow: { type: Boolean, default: false },
    wide: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["container", {
          "container--narrow": __props.narrow,
          "container--wide": __props.wide
        }])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
};
const _hoisted_1 = { key: 0 };
const _hoisted_2 = ["media", "srcset", "type"];
const _hoisted_3 = ["srcset"];
const _sfc_main = {
  __name: "Image",
  props: {
    src: { type: String, required: true },
    alt: { type: String, default: "" },
    width: { type: [Number, String], default: null },
    height: { type: [Number, String], default: null },
    loading: { type: String, default: "lazy" },
    decoding: { type: String, default: "async" },
    fetchpriority: { type: String, default: null },
    class: { type: [String, Array, Object], default: null },
    imgAttrs: { type: Object, default: () => ({}) },
    /**
     * Массив источников для тега <source> внутри <picture>.
     * Позволяет показывать разные изображения на разных разрешениях.
     *
     * @example
     * :sources="[
     *   { media: '(max-width: 768px)', srcset: '/images/hero-mobile.jpg' },
     * ]"
     *
     * Для растровых форматов WebP-вариант генерируется автоматически.
     * Если нужно переопределить type — укажите его явно, тогда
     * WebP-конвертация не применяется.
     */
    sources: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const RASTER_EXTS = /* @__PURE__ */ new Set([".png", ".jpg", ".jpeg"]);
    function cleanPath(src) {
      return src.split("?")[0].split("#")[0];
    }
    function getExtension(src) {
      const path = cleanPath(src);
      const match = path.match(/\.(\w+)$/);
      return match ? match[1].toLowerCase() : null;
    }
    function isExternalUrl(src) {
      return /^https?:\/\//.test(src) || /^\/\//.test(src) || /^data:/.test(src);
    }
    function getWebpSrc(src) {
      const [path, rest] = src.split("?");
      const [pathOnly] = path.split("#");
      const webpPath = pathOnly.replace(/\.\w+$/, ".webp");
      return rest ? `${webpPath}?${rest}` : webpPath;
    }
    const ext = computed(() => {
      if (isExternalUrl(props.src)) return null;
      return getExtension(props.src);
    });
    const isRaster = computed(() => ext.value && RASTER_EXTS.has(`.${ext.value}`));
    const webpSrc = computed(() => isRaster.value ? getWebpSrc(props.src) : null);
    const processedSources = computed(() => {
      return props.sources.flatMap((source) => {
        if (source.type) return [source];
        const srcExt = getExtension(source.srcset);
        const isRasterExt = srcExt && RASTER_EXTS.has(`.${srcExt}`);
        if (!isExternalUrl(source.srcset) && isRasterExt) {
          const webpSrcset = getWebpSrc(source.srcset);
          return [
            { media: source.media, srcset: webpSrcset, type: "image/webp" },
            { media: source.media, srcset: source.srcset }
          ];
        }
        return [source];
      });
    });
    const usePicture = computed(
      () => isRaster.value && webpSrc.value || props.sources.length > 0
    );
    const imgBindings = computed(() => {
      const bindings = {
        src: props.src,
        alt: props.alt,
        loading: props.loading,
        decoding: props.decoding
      };
      if (props.width != null) bindings.width = props.width;
      if (props.height != null) bindings.height = props.height;
      if (props.fetchpriority) bindings.fetchpriority = props.fetchpriority;
      if (props.class) bindings.class = props.class;
      return { ...bindings, ...props.imgAttrs };
    });
    return (_ctx, _cache) => {
      return usePicture.value ? (openBlock(), createElementBlock("picture", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(processedSources.value, (source, index) => {
          return openBlock(), createElementBlock("source", {
            key: index,
            media: source.media,
            srcset: source.srcset,
            type: source.type
          }, null, 8, _hoisted_2);
        }), 128)),
        webpSrc.value ? (openBlock(), createElementBlock("source", {
          key: 0,
          srcset: webpSrc.value,
          type: "image/webp"
        }, null, 8, _hoisted_3)) : createCommentVNode("", true),
        createBaseVNode("img", normalizeProps(guardReactiveProps(imgBindings.value)), null, 16)
      ])) : (openBlock(), createElementBlock("img", normalizeProps(mergeProps({ key: 1 }, imgBindings.value)), null, 16));
    };
  }
};
export {
  _sfc_main$1 as _,
  _sfc_main as a
};
