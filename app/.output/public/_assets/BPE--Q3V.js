import { B as openBlock, C as createElementBlock, I as renderSlot, J as normalizeClass } from "./ZIQbdsly.js";
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
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
};
export {
  _sfc_main as _
};
