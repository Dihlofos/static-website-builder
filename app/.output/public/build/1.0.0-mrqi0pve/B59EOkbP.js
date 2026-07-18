import { _ as _export_sfc } from "./1tPrXgE0.js";
import { B as openBlock, C as createElementBlock, I as renderSlot, J as normalizeClass, N as Fragment, D as createBaseVNode, L as createCommentVNode } from "./Dne40Ac7.js";
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
        renderSlot(_ctx.$slots, "default", {}, void 0)
      ], 2);
    };
  }
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a24d2274"]]);
const _hoisted_1 = ["width", "height", "viewBox"];
const _hoisted_2 = {
  key: 0,
  points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
};
const _hoisted_3 = {
  key: 1,
  d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
};
const _hoisted_4 = {
  key: 5,
  d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
};
const _hoisted_5 = {
  key: 6,
  points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2"
};
const _hoisted_6 = {
  key: 8,
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
};
const _hoisted_7 = {
  key: 11,
  points: "6 9 12 15 18 9"
};
const _hoisted_8 = {
  key: 14,
  points: "9 18 15 12 9 6"
};
const _sfc_main = {
  __name: "Icon",
  props: {
    name: { type: String, required: true },
    size: { type: [String, Number], default: 24 }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        class: "icon",
        width: __props.size,
        height: __props.size,
        viewBox: _ctx.iconViewBox,
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "aria-hidden": "true"
      }, [
        __props.name === "star" ? (openBlock(), createElementBlock("polygon", _hoisted_2)) : __props.name === "shield" ? (openBlock(), createElementBlock("path", _hoisted_3)) : __props.name === "code" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
          _cache[0] || (_cache[0] = createBaseVNode("polyline", { points: "16 18 22 12 16 6" }, null, -1)),
          _cache[1] || (_cache[1] = createBaseVNode("polyline", { points: "8 6 2 12 8 18" }, null, -1))
        ], 64)) : __props.name === "smartphone" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
          _cache[2] || (_cache[2] = createBaseVNode("rect", {
            x: "5",
            y: "2",
            width: "14",
            height: "20",
            rx: "2",
            ry: "2"
          }, null, -1)),
          _cache[3] || (_cache[3] = createBaseVNode("line", {
            x1: "12",
            y1: "18",
            x2: "12.01",
            y2: "18"
          }, null, -1))
        ], 64)) : __props.name === "search" ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
          _cache[4] || (_cache[4] = createBaseVNode("circle", {
            cx: "11",
            cy: "11",
            r: "8"
          }, null, -1)),
          _cache[5] || (_cache[5] = createBaseVNode("line", {
            x1: "21",
            y1: "21",
            x2: "16.65",
            y2: "16.65"
          }, null, -1))
        ], 64)) : __props.name === "tool" ? (openBlock(), createElementBlock("path", _hoisted_4)) : __props.name === "zap" ? (openBlock(), createElementBlock("polygon", _hoisted_5)) : __props.name === "mail" ? (openBlock(), createElementBlock(Fragment, { key: 7 }, [
          _cache[6] || (_cache[6] = createBaseVNode("path", { d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" }, null, -1)),
          _cache[7] || (_cache[7] = createBaseVNode("polyline", { points: "22,6 12,13 2,6" }, null, -1))
        ], 64)) : __props.name === "phone" ? (openBlock(), createElementBlock("path", _hoisted_6)) : __props.name === "map-pin" ? (openBlock(), createElementBlock(Fragment, { key: 9 }, [
          _cache[8] || (_cache[8] = createBaseVNode("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }, null, -1)),
          _cache[9] || (_cache[9] = createBaseVNode("circle", {
            cx: "12",
            cy: "10",
            r: "3"
          }, null, -1))
        ], 64)) : __props.name === "arrow-right" ? (openBlock(), createElementBlock(Fragment, { key: 10 }, [
          _cache[10] || (_cache[10] = createBaseVNode("line", {
            x1: "5",
            y1: "12",
            x2: "19",
            y2: "12"
          }, null, -1)),
          _cache[11] || (_cache[11] = createBaseVNode("polyline", { points: "12 5 19 12 12 19" }, null, -1))
        ], 64)) : __props.name === "chevron-down" ? (openBlock(), createElementBlock("polyline", _hoisted_7)) : __props.name === "menu" ? (openBlock(), createElementBlock(Fragment, { key: 12 }, [
          _cache[12] || (_cache[12] = createBaseVNode("line", {
            x1: "3",
            y1: "12",
            x2: "21",
            y2: "12"
          }, null, -1)),
          _cache[13] || (_cache[13] = createBaseVNode("line", {
            x1: "3",
            y1: "6",
            x2: "21",
            y2: "6"
          }, null, -1)),
          _cache[14] || (_cache[14] = createBaseVNode("line", {
            x1: "3",
            y1: "18",
            x2: "21",
            y2: "18"
          }, null, -1))
        ], 64)) : __props.name === "x" ? (openBlock(), createElementBlock(Fragment, { key: 13 }, [
          _cache[15] || (_cache[15] = createBaseVNode("line", {
            x1: "18",
            y1: "6",
            x2: "6",
            y2: "18"
          }, null, -1)),
          _cache[16] || (_cache[16] = createBaseVNode("line", {
            x1: "6",
            y1: "6",
            x2: "18",
            y2: "18"
          }, null, -1))
        ], 64)) : __props.name === "chevron-right" ? (openBlock(), createElementBlock("polyline", _hoisted_8)) : createCommentVNode("", true)
      ], 8, _hoisted_1);
    };
  }
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c468c0d5"]]);
export {
  __nuxt_component_1 as _,
  __nuxt_component_0 as a
};
