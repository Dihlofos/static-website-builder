import { _ as _export_sfc } from "./1tPrXgE0.js";
import { f as resolveComponent, B as openBlock, C as createElementBlock, F as createVNode, P as renderSlot } from "./B3dI0J7g.js";
const _sfc_main = {};
const _hoisted_1 = { class: "page" };
function _sfc_render(_ctx, _cache) {
  const _component_Header = resolveComponent("Header");
  const _component_Footer = resolveComponent("Footer");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_Header),
    renderSlot(_ctx.$slots, "default", {}, void 0),
    createVNode(_component_Footer)
  ]);
}
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9931e2df"]]);
export {
  _default as default
};
