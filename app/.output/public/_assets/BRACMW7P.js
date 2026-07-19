import { _ as _export_sfc } from "./1tPrXgE0.js";
import { B as openBlock, C as createElementBlock, I as renderSlot, J as normalizeClass } from "./CxVyMzyC.js";
const _sfc_main = {
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
        renderSlot(_ctx.$slots, "default", {}, void 0)
      ], 2);
    };
  }
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ad66a7bc"]]);
export {
  __nuxt_component_0 as _
};
