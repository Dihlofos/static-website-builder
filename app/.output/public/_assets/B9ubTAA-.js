import { _ as _export_sfc } from "./1tPrXgE0.js";
import { B as openBlock, C as createElementBlock, I as renderSlot, J as normalizeClass, F as createVNode, G as withCtx, K as normalizeStyle, l as unref, m as computed, D as createBaseVNode, E as toDisplayString, L as createCommentVNode, M as createBlock, H as createTextVNode, A as useHead, N as normalizeProps, O as guardReactiveProps } from "./DFADeni2.js";
import { _ as __nuxt_component_0$2 } from "./WNLM8uNV.js";
const _hoisted_1$1 = ["href"];
const _hoisted_2$1 = ["disabled", "type"];
const _sfc_main$2 = {
  __name: "Button",
  props: {
    variant: { type: String, default: "primary" },
    size: { type: String, default: "md" },
    disabled: { type: Boolean, default: false },
    to: { type: String, default: "" },
    type: { type: String, default: "button" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return __props.to ? (openBlock(), createElementBlock("a", {
        key: 0,
        href: __props.to,
        class: normalizeClass(["button", `button--${__props.variant}`, `button--${__props.size}`])
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0)
      ], 10, _hoisted_1$1)) : (openBlock(), createElementBlock("button", {
        key: 1,
        class: normalizeClass(["button", `button--${__props.variant}`, `button--${__props.size}`]),
        disabled: __props.disabled,
        type: __props.type
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0)
      ], 10, _hoisted_2$1));
    };
  }
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-03c3ba3b"]]);
const _hoisted_1 = { class: "hero__content" };
const _hoisted_2 = { class: "hero__title" };
const _hoisted_3 = {
  key: 0,
  class: "hero__subtitle"
};
const _hoisted_4 = {
  key: 1,
  class: "hero__actions"
};
const _sfc_main$1 = {
  __name: "HeroSection",
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, default: "" },
    button: { type: Object, default: () => ({}) },
    secondaryButton: { type: Object, default: () => ({}) },
    backgroundImage: { type: String, default: "" }
  },
  setup(__props) {
    const props = __props;
    const bgStyle = computed(() => {
      if (!props.backgroundImage) return {};
      const fileName = props.backgroundImage.replace("components/HeroSection/", "");
      return {
        backgroundImage: `url(/components/HeroSection/${fileName})`
      };
    });
    return (_ctx, _cache) => {
      const _component_Button = __nuxt_component_0$1;
      const _component_Container = __nuxt_component_0$2;
      return openBlock(), createElementBlock("section", {
        id: "hero",
        class: "hero",
        style: normalizeStyle(unref(bgStyle))
      }, [
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              createBaseVNode("h1", _hoisted_2, toDisplayString(__props.title), 1),
              __props.subtitle ? (openBlock(), createElementBlock("p", _hoisted_3, toDisplayString(__props.subtitle), 1)) : createCommentVNode("", true),
              __props.button || __props.secondaryButton ? (openBlock(), createElementBlock("div", _hoisted_4, [
                __props.button?.text ? (openBlock(), createBlock(_component_Button, {
                  key: 0,
                  to: __props.button.link,
                  variant: "primary",
                  size: "lg"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.button.text), 1)
                  ]),
                  _: 1
                }, 8, ["to"])) : createCommentVNode("", true),
                __props.secondaryButton?.text ? (openBlock(), createBlock(_component_Button, {
                  key: 1,
                  to: __props.secondaryButton.link,
                  variant: "secondary",
                  size: "lg"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(__props.secondaryButton.text), 1)
                  ]),
                  _: 1
                }, 8, ["to"])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        })
      ], 4);
    };
  }
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5bf4c181"]]);
const type = "hero";
const title = "Создаём современные веб-сайты";
const subtitle = "Быстро, надёжно, красиво. Используем Nuxt 3 и SCSS.";
const button = { "text": "Узнать больше", "link": "#features" };
const secondaryButton = { "text": "Связаться", "link": "#contact" };
const backgroundImage = "components/HeroSection/bg-hero.jpg";
const heroData = {
  type,
  title,
  subtitle,
  button,
  secondaryButton,
  backgroundImage
};
const _sfc_main = {
  __name: "index",
  setup(__props) {
    useHead({
      title: "Главная",
      meta: [
        { name: "description", content: "Современный статический сайт на Nuxt 3" }
      ]
    });
    return (_ctx, _cache) => {
      const _component_HeroSection = __nuxt_component_0;
      return openBlock(), createElementBlock("main", null, [
        createVNode(_component_HeroSection, normalizeProps(guardReactiveProps(unref(heroData))), null, 16)
      ]);
    };
  }
};
export {
  _sfc_main as default
};
