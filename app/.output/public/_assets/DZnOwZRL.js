import { B as openBlock, C as createElementBlock, I as renderSlot, J as normalizeClass, F as createVNode, G as withCtx, D as createBaseVNode, E as toDisplayString, K as createCommentVNode, L as createBlock, H as createTextVNode, _ as __vitePreload, M as Fragment, N as renderList, l as unref, i as ref, O as useLocale, A as useHead, P as normalizeProps, Q as guardReactiveProps, m as computed, R as toRef } from "./K7dWFRaF.js";
import { _ as _sfc_main$4, a as _sfc_main$5 } from "./BXhAQt0p.js";
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
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1$2)) : (openBlock(), createElementBlock("button", {
        key: 1,
        class: normalizeClass(["button", `button--${__props.variant}`, `button--${__props.size}`]),
        disabled: __props.disabled,
        type: __props.type
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_2$2));
    };
  }
};
const _hoisted_1$1 = {
  id: "hero",
  class: "hero"
};
const _hoisted_2$1 = { class: "hero__content" };
const _hoisted_3$1 = { class: "hero__title" };
const _hoisted_4$1 = {
  key: 0,
  class: "hero__subtitle"
};
const _hoisted_5$1 = {
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
    return (_ctx, _cache) => {
      const _component_Button = _sfc_main$3;
      const _component_Container = _sfc_main$4;
      return openBlock(), createElementBlock("section", _hoisted_1$1, [
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$1, [
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
const _hoisted_2 = { class: "faq__wrapper" };
const _hoisted_3 = { class: "faq__title" };
const _hoisted_4 = { class: "faq__accordion" };
const _hoisted_5 = ["aria-expanded", "aria-controls", "onClick"];
const _hoisted_6 = {
  class: "faq__icon",
  "aria-hidden": "true"
};
const _hoisted_7 = ["src"];
const _hoisted_8 = ["src"];
const _hoisted_9 = ["id"];
const _hoisted_10 = ["innerHTML"];
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
      const _component_Image = _sfc_main$5;
      const _component_Container = _sfc_main$4;
      return openBlock(), createElementBlock("section", _hoisted_1, [
        createVNode(_component_Image, {
          src: __props.images.decorLeft,
          alt: "",
          class: "faq__decor faq__decor--left",
          width: "1075",
          height: "1090"
        }, null, 8, ["src"]),
        createVNode(_component_Image, {
          src: __props.images.decorRight,
          alt: "",
          class: "faq__decor faq__decor--right",
          width: "945",
          height: "958"
        }, null, 8, ["src"]),
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
                      createBaseVNode("span", _hoisted_6, [
                        createBaseVNode("img", {
                          src: __props.images.arrowDown,
                          alt: "",
                          class: "faq__down",
                          width: "36",
                          height: "36"
                        }, null, 8, _hoisted_7),
                        createBaseVNode("img", {
                          src: __props.images.arrowUp,
                          alt: "",
                          class: "faq__up",
                          width: "36",
                          height: "36"
                        }, null, 8, _hoisted_8)
                      ])
                    ], 10, _hoisted_5),
                    createBaseVNode("div", {
                      id: `faq-content-${index}`,
                      class: normalizeClass(["faq__content", { active: isOpen(index) }]),
                      role: "region"
                    }, [
                      createBaseVNode("p", {
                        innerHTML: unref(sanitizeText)(item.answer)
                      }, null, 8, _hoisted_10)
                    ], 10, _hoisted_9)
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
const heroRu = {
  type: "hero",
  title: "Создаём современные веб-сайты",
  subtitle: "Быстро, надёжно, красиво. Используем Nuxt 3 и SCSS.",
  button: { text: "Узнать больше", link: "#features" },
  secondaryButton: { text: "Связаться", link: "#contact" },
  backgroundImage: "components/HeroSection/bg-hero.jpg"
};
const heroEn = {
  type: "hero",
  title: "We create modern websites",
  subtitle: "Fast, reliable, beautiful. Built with Nuxt 3 and SCSS.",
  button: { text: "Learn more", link: "#features" },
  secondaryButton: { text: "Contact us", link: "#contact" },
  backgroundImage: "components/HeroSection/bg-hero.jpg"
};
const faqRu = {
  type: "faq",
  title: "Вопросы и ответы",
  images: {
    decorLeft: "/images/faq/decor-left.svg",
    decorRight: "/images/faq/decor-right.svg",
    arrowDown: "/images/faq/arrow-down.svg",
    arrowUp: "/images/faq/arrow-up.svg"
  },
  items: [
    {
      question: "Сколько активностей можно посетить?",
      answer: "Вы&nbsp;можете выбрать и&nbsp;посетить любое количество активностей фестиваля. На&nbsp;некоторые понадобится регистрация&nbsp;&mdash; в&nbsp;расписании вы&nbsp;увидите кнопку &laquo;Регистрация&raquo;."
    },
    {
      question: "Нужно ли брать с собой спортивный инвентарь?",
      answer: "Мы предоставим коврики, а другой специальный инвентарь не потребуется. Просто приходите в удобной одежде и обуви. И не забудьте взять с собой воду."
    },
    {
      question: "Можно ли переодеться на площадке?",
      answer: "На площадке нет раздевалок и камер хранения, поэтому приходите в спортивной одежде и обуви сразу."
    },
    {
      question: "Что делать, если я опаздываю на зарегистрированное событие?",
      answer: "В случае опоздания забронированный слот аннулируется. Рекомендуем приходить на площадку за 15 минут до начала, чтобы успеть отметиться и занять место."
    },
    {
      question: "Можно ли прийти с ребенком?",
      answer: "Да, для детей от 3 лет подготовлены специальные активности в детской зоне."
    },
    {
      question: "Могут ли в активностях принять участие мужчины?",
      answer: "Тренировки организованы только для женщин. Но для мужчин будет работать специальная зона с кибербаром и играми."
    }
  ]
};
const faqEn = {
  type: "faq",
  title: "Frequently Asked Questions",
  images: {
    decorLeft: "/images/faq/decor-left.svg",
    decorRight: "/images/faq/decor-right.svg",
    arrowDown: "/images/faq/arrow-down.svg",
    arrowUp: "/images/faq/arrow-up.svg"
  },
  items: [
    {
      question: "How many activities can I attend?",
      answer: "You can choose and attend any number of festival activities. Some require registration — look for the “Register” button in the schedule."
    },
    {
      question: "Do I need to bring sports equipment?",
      answer: "We will provide exercise mats, and no other special equipment is needed. Just come in comfortable clothes and shoes, and remember to bring water."
    },
    {
      question: "Can I change clothes at the venue?",
      answer: "There are no changing rooms or lockers at the venue, so please arrive already dressed in your sportswear and shoes."
    },
    {
      question: "What should I do if I am late for a registered event?",
      answer: "If you arrive late, your reserved slot will be cancelled. We recommend arriving 15 minutes before the event starts so you have time to check in and find a place."
    },
    {
      question: "Can I bring a child?",
      answer: "Yes. Special activities are available in the children’s area for children aged 3 and above."
    },
    {
      question: "Can men take part in the activities?",
      answer: "The workouts are for women only. Men can enjoy a special area with a cyber bar and games."
    }
  ]
};
const _sfc_main = {
  __name: "index",
  props: {
    locale: { type: String, default: null }
  },
  setup(__props) {
    const props = __props;
    const { locale } = useLocale(toRef(props, "locale"));
    const heroByLocale = { ru: heroRu, en: heroEn };
    const faqByLocale = { ru: faqRu, en: faqEn };
    const heroData = computed(() => heroByLocale[locale.value]);
    const faqData = computed(() => faqByLocale[locale.value]);
    useHead({
      title: ""
    });
    return (_ctx, _cache) => {
      const _component_HeroSection = _sfc_main$2;
      const _component_Faq = _sfc_main$1;
      return openBlock(), createElementBlock("main", null, [
        createVNode(_component_HeroSection, normalizeProps(guardReactiveProps(heroData.value)), null, 16),
        createVNode(_component_Faq, {
          title: faqData.value.title,
          items: faqData.value.items,
          images: faqData.value.images
        }, null, 8, ["title", "items", "images"])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
