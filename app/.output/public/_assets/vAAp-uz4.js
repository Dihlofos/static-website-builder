import { _ as _export_sfc } from "./1tPrXgE0.js";
import { B as openBlock, C as createElementBlock, I as renderSlot, J as normalizeClass, F as createVNode, G as withCtx, K as normalizeStyle, l as unref, m as computed, D as createBaseVNode, E as toDisplayString, L as createCommentVNode, M as createBlock, H as createTextVNode, N as Fragment, O as renderList, i as ref, A as useHead, P as normalizeProps, Q as guardReactiveProps } from "./B5S87wZV.js";
import { _ as __nuxt_component_0$2 } from "./BjFUbwAl.js";
const _hoisted_1$2 = ["href"];
const _hoisted_2$2 = ["disabled", "type"];
const _sfc_main$3 = {
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
      ], 10, _hoisted_1$2)) : (openBlock(), createElementBlock("button", {
        key: 1,
        class: normalizeClass(["button", `button--${__props.variant}`, `button--${__props.size}`]),
        disabled: __props.disabled,
        type: __props.type
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0)
      ], 10, _hoisted_2$2));
    };
  }
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-03c3ba3b"]]);
const _hoisted_1$1 = { class: "hero__content" };
const _hoisted_2$1 = { class: "hero__title" };
const _hoisted_3$1 = {
  key: 0,
  class: "hero__subtitle"
};
const _hoisted_4$1 = {
  key: 1,
  class: "hero__actions"
};
const _sfc_main$2 = {
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
            createBaseVNode("div", _hoisted_1$1, [
              createBaseVNode("h1", _hoisted_2$1, toDisplayString(__props.title), 1),
              __props.subtitle ? (openBlock(), createElementBlock("p", _hoisted_3$1, toDisplayString(__props.subtitle), 1)) : createCommentVNode("", true),
              __props.button || __props.secondaryButton ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
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
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-812708f9"]]);
const _hoisted_1 = {
  id: "faq",
  class: "faq"
};
const _hoisted_2 = { class: "faq__wrapper" };
const _hoisted_3 = { class: "faq__title" };
const _hoisted_4 = { class: "faq__accordion" };
const _hoisted_5 = ["aria-expanded", "aria-controls", "onClick"];
const _hoisted_6 = ["id"];
const _sfc_main$1 = {
  __name: "Faq",
  props: {
    title: { type: String, required: true },
    items: { type: Array, required: true }
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
      const _component_Container = __nuxt_component_0$2;
      return openBlock(), createElementBlock("section", _hoisted_1, [
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("h2", _hoisted_3, toDisplayString(__props.title), 1),
              createBaseVNode("div", _hoisted_4, [
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
                      _cache[0] || (_cache[0] = createBaseVNode("span", {
                        class: "faq__icon",
                        "aria-hidden": "true"
                      }, [
                        createBaseVNode("svg", {
                          width: "36",
                          height: "36",
                          viewBox: "0 0 36 36",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg"
                        }, [
                          createBaseVNode("rect", {
                            x: "4",
                            y: "16",
                            width: "28",
                            height: "4",
                            rx: "2",
                            fill: "currentColor"
                          }),
                          createBaseVNode("rect", {
                            x: "16",
                            y: "4",
                            width: "4",
                            height: "28",
                            rx: "2",
                            fill: "currentColor",
                            class: "faq__icon-vert"
                          })
                        ])
                      ], -1))
                    ], 10, _hoisted_5),
                    createBaseVNode("div", {
                      id: `faq-content-${index}`,
                      class: normalizeClass(["faq__content", { active: isOpen(index) }]),
                      role: "region"
                    }, [
                      createBaseVNode("p", null, toDisplayString(item.answer), 1)
                    ], 10, _hoisted_6)
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
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1d1be621"]]);
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
const items = [{ "question": "Сколько активностей можно посетить?", "answer": "Вы можете выбрать и посетить любое количество активностей фестиваля. На некоторые понадобится регистрация — в расписании вы увидите кнопку «Регистрация»." }, { "question": "Нужно ли брать с собой спортивный инвентарь?", "answer": "Мы предоставим коврики, а другой специальный инвентарь не потребуется. Просто приходите в удобной одежде и обуви. И не забудьте взять с собой воду." }, { "question": "Можно ли переодеться на площадке?", "answer": "На площадке нет раздевалок и камер хранения, поэтому приходите в спортивной одежде и обуви сразу." }, { "question": "Что делать, если я опаздываю на зарегистрированное событие?", "answer": "В случае опоздания забронированный слот аннулируется. Рекомендуем приходить на площадку за 15 минут до начала, чтобы успеть отметиться и занять место." }, { "question": "Можно ли прийти с ребенком?", "answer": "Да, для детей от 3 лет подготовлены специальные активности в детской зоне." }, { "question": "Могут ли в активностях принять участие мужчины?", "answer": "Тренировки организованы только для женщин. Но для мужчин будет работать специальная зона с кибербаром и играми." }];
const faqData = {
  type,
  title,
  items
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
      const _component_Faq = __nuxt_component_1;
      return openBlock(), createElementBlock("main", null, [
        createVNode(_component_HeroSection, normalizeProps(guardReactiveProps(unref(heroData))), null, 16),
        createVNode(_component_Faq, {
          title: unref(faqData).title,
          items: unref(faqData).items
        }, null, 8, ["title", "items"])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
