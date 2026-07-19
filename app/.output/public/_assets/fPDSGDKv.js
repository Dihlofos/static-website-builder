import { _ as _export_sfc } from "./1tPrXgE0.js";
import { B as openBlock, C as createElementBlock, I as renderSlot, J as normalizeClass, F as createVNode, G as withCtx, D as createBaseVNode, E as toDisplayString, K as createCommentVNode, L as createBlock, H as createTextVNode, M as normalizeProps, N as guardReactiveProps, O as mergeProps, m as computed, _ as __vitePreload, P as Fragment, Q as renderList, l as unref, i as ref, A as useHead } from "./v6goQ4JH.js";
import { _ as __nuxt_component_0$3 } from "./BEkA0R25.js";
const _hoisted_1$3 = ["href"];
const _hoisted_2$3 = ["disabled", "type"];
const _sfc_main$4 = {
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
      ], 10, _hoisted_1$3)) : (openBlock(), createElementBlock("button", {
        key: 1,
        class: normalizeClass(["button", `button--${__props.variant}`, `button--${__props.size}`]),
        disabled: __props.disabled,
        type: __props.type
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0)
      ], 10, _hoisted_2$3));
    };
  }
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-03c3ba3b"]]);
const _hoisted_1$2 = {
  id: "hero",
  class: "hero"
};
const _hoisted_2$2 = { class: "hero__content" };
const _hoisted_3$1 = { class: "hero__title" };
const _hoisted_4$1 = {
  key: 0,
  class: "hero__subtitle"
};
const _hoisted_5$1 = {
  key: 1,
  class: "hero__actions"
};
const _sfc_main$3 = {
  __name: "HeroSection",
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, default: "" },
    button: { type: Object, default: () => ({}) },
    secondaryButton: { type: Object, default: () => ({}) },
    backgroundImage: { type: String, default: "" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Button = __nuxt_component_0$2;
      const _component_Container = __nuxt_component_0$3;
      return openBlock(), createElementBlock("section", _hoisted_1$2, [
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$2, [
              createBaseVNode("h1", _hoisted_3$1, toDisplayString(__props.title), 1),
              __props.subtitle ? (openBlock(), createElementBlock("p", _hoisted_4$1, toDisplayString(__props.subtitle), 1)) : createCommentVNode("", true),
              __props.button || __props.secondaryButton ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
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
      ]);
    };
  }
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-190bb458"]]);
const _hoisted_1$1 = { key: 0 };
const _hoisted_2$1 = ["srcset"];
const _sfc_main$2 = {
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
    imgAttrs: { type: Object, default: () => ({}) }
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
      return isRaster.value && webpSrc.value ? (openBlock(), createElementBlock("picture", _hoisted_1$1, [
        createBaseVNode("source", {
          srcset: webpSrc.value,
          type: "image/webp"
        }, null, 8, _hoisted_2$1),
        createBaseVNode("img", normalizeProps(guardReactiveProps(imgBindings.value)), null, 16)
      ])) : (openBlock(), createElementBlock("img", normalizeProps(mergeProps({ key: 1 }, imgBindings.value)), null, 16));
    };
  }
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-186a3613"]]);
let purify = null;
{
  __vitePreload(() => import("./C3FtZLC6.js"), true ? [] : void 0, import.meta.url).then((m) => {
    purify = m.default;
  }).catch(() => {
  });
}
function sanitizeText(text) {
  if (!text || typeof text !== "string") return "";
  if (purify) {
    return purify.sanitize(text, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
  }
  return text.replace(/<[^>]+>/g, "");
}
const _hoisted_1 = {
  id: "faq",
  class: "faq"
};
const _hoisted_2 = ["src"];
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "faq__wrapper" };
const _hoisted_5 = { class: "faq__title" };
const _hoisted_6 = { class: "faq__accordion" };
const _hoisted_7 = ["aria-expanded", "aria-controls", "onClick"];
const _hoisted_8 = {
  class: "faq__icon",
  "aria-hidden": "true"
};
const _hoisted_9 = ["src"];
const _hoisted_10 = ["src"];
const _hoisted_11 = ["id"];
const _hoisted_12 = ["innerHTML"];
const _sfc_main$1 = {
  __name: "Faq",
  props: {
    title: { type: String, required: true },
    items: { type: Array, required: true },
    images: {
      type: Object,
      default: () => ({
        decorLeft: "/images/faq/decor-left.svg",
        decorRight: "/images/faq/decor-right.svg",
        arrowDown: "/images/faq/arrow-down.svg",
        arrowUp: "/images/faq/arrow-up.svg"
      })
    }
  },
  setup(__props) {
    const openState = ref({});
    function toggle(index) {
      openState.value = { ...openState.value, [index]: !openState.value[index] };
    }
    function isOpen(index) {
      return !!openState.value[index];
    }
    return (_ctx, _cache) => {
      const _component_Image = __nuxt_component_0;
      const _component_Container = __nuxt_component_0$3;
      return openBlock(), createElementBlock("section", _hoisted_1, [
        createBaseVNode("img", {
          src: __props.images.decorLeft,
          alt: "",
          class: "faq__decor faq__decor--left",
          width: "1075",
          height: "1090"
        }, null, 8, _hoisted_2),
        createBaseVNode("img", {
          src: __props.images.decorRight,
          alt: "",
          class: "faq__decor faq__decor--right",
          width: "945",
          height: "958"
        }, null, 8, _hoisted_3),
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("h2", _hoisted_5, toDisplayString(__props.title), 1),
              createVNode(_component_Image, {
                src: "/images/faq/girl.png",
                alt: "Иконка"
              }),
              createBaseVNode("div", _hoisted_6, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: normalizeClass(["faq__item", { active: isOpen(index) }])
                  }, [
                    createBaseVNode("button", {
                      class: normalizeClass(["faq__toggler", { active: isOpen(index) }]),
                      "aria-expanded": isOpen(index),
                      "aria-controls": `faq-content-${index}`,
                      onClick: ($event) => toggle(index)
                    }, [
                      createTextVNode(toDisplayString(item.question) + " ", 1),
                      createBaseVNode("span", _hoisted_8, [
                        createBaseVNode("img", {
                          src: __props.images.arrowDown,
                          alt: "",
                          class: "faq__down",
                          width: "36",
                          height: "36"
                        }, null, 8, _hoisted_9),
                        createBaseVNode("img", {
                          src: __props.images.arrowUp,
                          alt: "",
                          class: "faq__up",
                          width: "36",
                          height: "36"
                        }, null, 8, _hoisted_10)
                      ])
                    ], 10, _hoisted_7),
                    createBaseVNode("div", {
                      id: `faq-content-${index}`,
                      class: normalizeClass(["faq__content", { active: isOpen(index) }]),
                      role: "region"
                    }, [
                      createBaseVNode("p", {
                        innerHTML: unref(sanitizeText)(item.answer)
                      }, null, 8, _hoisted_12)
                    ], 10, _hoisted_11)
                  ], 2);
                }), 128))
              ])
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7fce3016"]]);
const type$1 = "hero";
const title$1 = "Создаём современные веб-сайты";
const subtitle = "Быстро, надёжно, красиво. Используем Nuxt 3 и SCSS.";
const button = { "text": "Узнать больше", "link": "#features" };
const secondaryButton = { "text": "Связаться", "link": "#contact" };
const backgroundImage = "components/HeroSection/bg-hero.jpg";
const heroData = {
  type: type$1,
  title: title$1,
  subtitle,
  button,
  secondaryButton,
  backgroundImage
};
const type = "faq";
const title = "Вопросы и ответы";
const images = { "decorLeft": "/images/faq/decor-left.svg", "decorRight": "/images/faq/decor-right.svg", "arrowDown": "/images/faq/arrow-down.svg", "arrowUp": "/images/faq/arrow-up.svg" };
const items = [{ "question": "Сколько активностей можно посетить?", "answer": "Вы&nbsp;можете выбрать и&nbsp;посетить любое количество активностей фестиваля. На&nbsp;некоторые понадобится регистрация&nbsp;&mdash; в&nbsp;расписании вы&nbsp;увидите кнопку &laquo;Регистрация&raquo;." }, { "question": "Нужно ли брать с собой спортивный инвентарь?", "answer": "Мы предоставим коврики, а другой специальный инвентарь не потребуется. Просто приходите в удобной одежде и обуви. И не забудьте взять с собой воду." }, { "question": "Можно ли переодеться на площадке?", "answer": "На площадке нет раздевалок и камер хранения, поэтому приходите в спортивной одежде и обуви сразу." }, { "question": "Что делать, если я опаздываю на зарегистрированное событие?", "answer": "В случае опоздания забронированный слот аннулируется. Рекомендуем приходить на площадку за 15 минут до начала, чтобы успеть отметиться и занять место." }, { "question": "Можно ли прийти с ребенком?", "answer": "Да, для детей от 3 лет подготовлены специальные активности в детской зоне." }, { "question": "Могут ли в активностях принять участие мужчины?", "answer": "Тренировки организованы только для женщин. Но для мужчин будет работать специальная зона с кибербаром и играми." }];
const faqData = {
  type,
  title,
  images,
  items
};
const _sfc_main = {
  __name: "index",
  setup(__props) {
    useHead({
      title: ""
    });
    return (_ctx, _cache) => {
      const _component_HeroSection = __nuxt_component_0$1;
      const _component_Faq = __nuxt_component_1;
      return openBlock(), createElementBlock("main", null, [
        createVNode(_component_HeroSection, normalizeProps(guardReactiveProps(unref(heroData))), null, 16),
        createVNode(_component_Faq, {
          title: unref(faqData).title,
          items: unref(faqData).items,
          images: unref(faqData).images
        }, null, 8, ["title", "items", "images"])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
