import { _ as _export_sfc } from "./1tPrXgE0.js";
import { f as resolveComponent, B as openBlock, C as createElementBlock, F as createVNode, G as withCtx, D as createBaseVNode, E as toDisplayString, I as createCommentVNode, J as createBlock, H as createTextVNode, K as normalizeStyle, l as unref, m as computed, L as Fragment, M as renderList, A as useHead, N as mergeProps, O as resolveDynamicComponent } from "./B3dI0J7g.js";
const _hoisted_1$4 = { class: "hero__content" };
const _hoisted_2$4 = { class: "hero__title" };
const _hoisted_3$4 = {
  key: 0,
  class: "hero__subtitle"
};
const _hoisted_4$4 = {
  key: 1,
  class: "hero__actions"
};
const _sfc_main$5 = {
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
      const _component_Button = resolveComponent("Button");
      const _component_Container = resolveComponent("Container");
      return openBlock(), createElementBlock("section", {
        id: "hero",
        class: "hero",
        style: normalizeStyle(unref(bgStyle))
      }, [
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1$4, [
              createBaseVNode("h1", _hoisted_2$4, toDisplayString(__props.title), 1),
              __props.subtitle ? (openBlock(), createElementBlock("p", _hoisted_3$4, toDisplayString(__props.subtitle), 1)) : createCommentVNode("", true),
              __props.button || __props.secondaryButton ? (openBlock(), createElementBlock("div", _hoisted_4$4, [
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
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-76de8107"]]);
const _hoisted_1$3 = {
  id: "features",
  class: "section features"
};
const _hoisted_2$3 = { class: "features__header" };
const _hoisted_3$3 = { class: "features__heading" };
const _hoisted_4$3 = {
  key: 0,
  class: "features__subtitle"
};
const _hoisted_5$2 = {
  key: 0,
  class: "features__grid"
};
const _sfc_main$4 = {
  __name: "FeaturesSection",
  props: {
    heading: { type: String, required: true },
    subtitle: { type: String, default: "" },
    items: { type: Array, default: () => [] }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Card = resolveComponent("Card");
      const _component_Container = resolveComponent("Container");
      return openBlock(), createElementBlock("section", _hoisted_1$3, [
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$3, [
              createBaseVNode("h2", _hoisted_3$3, toDisplayString(__props.heading), 1),
              __props.subtitle ? (openBlock(), createElementBlock("p", _hoisted_4$3, toDisplayString(__props.subtitle), 1)) : createCommentVNode("", true)
            ]),
            __props.items.length ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item, index) => {
                return openBlock(), createBlock(_component_Card, {
                  key: index,
                  title: item.title,
                  text: item.text,
                  icon: item.icon,
                  variant: "elevated"
                }, null, 8, ["title", "text", "icon"]);
              }), 128))
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]);
    };
  }
};
const FeaturesSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-e070a5f5"]]);
const _hoisted_1$2 = {
  id: "about",
  class: "section about"
};
const _hoisted_2$2 = { class: "about__content" };
const _hoisted_3$2 = { class: "about__heading" };
const _hoisted_4$2 = {
  key: 0,
  class: "about__text"
};
const _hoisted_5$1 = {
  key: 0,
  class: "about__stats"
};
const _hoisted_6$1 = { class: "about__stat-value" };
const _hoisted_7$1 = { class: "about__stat-label" };
const _sfc_main$3 = {
  __name: "AboutSection",
  props: {
    heading: { type: String, required: true },
    text: { type: String, default: "" },
    stats: { type: Array, default: () => [] }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Container = resolveComponent("Container");
      return openBlock(), createElementBlock("section", _hoisted_1$2, [
        createVNode(_component_Container, { narrow: "" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$2, [
              createBaseVNode("h2", _hoisted_3$2, toDisplayString(__props.heading), 1),
              __props.text ? (openBlock(), createElementBlock("div", _hoisted_4$2, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.text.split("\n"), (paragraph, index) => {
                  return openBlock(), createElementBlock("p", { key: index }, toDisplayString(paragraph), 1);
                }), 128))
              ])) : createCommentVNode("", true)
            ]),
            __props.stats.length ? (openBlock(), createElementBlock("div", _hoisted_5$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.stats, (stat, index) => {
                return openBlock(), createElementBlock("div", {
                  key: index,
                  class: "about__stat"
                }, [
                  createBaseVNode("span", _hoisted_6$1, toDisplayString(stat.value), 1),
                  createBaseVNode("span", _hoisted_7$1, toDisplayString(stat.label), 1)
                ]);
              }), 128))
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]);
    };
  }
};
const AboutSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-d08c020e"]]);
const _hoisted_1$1 = {
  id: "contact",
  class: "section contact"
};
const _hoisted_2$1 = { class: "contact__header" };
const _hoisted_3$1 = { class: "contact__heading" };
const _hoisted_4$1 = {
  key: 0,
  class: "contact__subtitle"
};
const _hoisted_5 = { class: "contact__info" };
const _hoisted_6 = ["href"];
const _hoisted_7 = ["href"];
const _hoisted_8 = {
  key: 2,
  class: "contact__item"
};
const _sfc_main$2 = {
  __name: "ContactSection",
  props: {
    heading: { type: String, required: true },
    subtitle: { type: String, default: "" },
    email: { type: String, default: "" },
    phone: { type: String, default: "" },
    address: { type: String, default: "" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Icon = resolveComponent("Icon");
      const _component_Container = resolveComponent("Container");
      return openBlock(), createElementBlock("section", _hoisted_1$1, [
        createVNode(_component_Container, { narrow: "" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$1, [
              createBaseVNode("h2", _hoisted_3$1, toDisplayString(__props.heading), 1),
              __props.subtitle ? (openBlock(), createElementBlock("p", _hoisted_4$1, toDisplayString(__props.subtitle), 1)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_5, [
              __props.email ? (openBlock(), createElementBlock("a", {
                key: 0,
                href: `mailto:${__props.email}`,
                class: "contact__item"
              }, [
                createVNode(_component_Icon, {
                  name: "mail",
                  size: 24
                }),
                createBaseVNode("span", null, toDisplayString(__props.email), 1)
              ], 8, _hoisted_6)) : createCommentVNode("", true),
              __props.phone ? (openBlock(), createElementBlock("a", {
                key: 1,
                href: `tel:${__props.phone.replace(/[\s()-]/g, "")}`,
                class: "contact__item"
              }, [
                createVNode(_component_Icon, {
                  name: "phone",
                  size: 24
                }),
                createBaseVNode("span", null, toDisplayString(__props.phone), 1)
              ], 8, _hoisted_7)) : createCommentVNode("", true),
              __props.address ? (openBlock(), createElementBlock("div", _hoisted_8, [
                createVNode(_component_Icon, {
                  name: "map-pin",
                  size: 24
                }),
                createBaseVNode("span", null, toDisplayString(__props.address), 1)
              ])) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
};
const ContactSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9da33ed9"]]);
const _hoisted_1 = { class: "section cta" };
const _hoisted_2 = { class: "cta__content" };
const _hoisted_3 = { class: "cta__heading" };
const _hoisted_4 = {
  key: 0,
  class: "cta__text"
};
const _sfc_main$1 = {
  __name: "CtaSection",
  props: {
    heading: { type: String, required: true },
    text: { type: String, default: "" },
    button: { type: Object, default: () => ({}) }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Button = resolveComponent("Button");
      const _component_Container = resolveComponent("Container");
      return openBlock(), createElementBlock("section", _hoisted_1, [
        createVNode(_component_Container, { narrow: "" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("h2", _hoisted_3, toDisplayString(__props.heading), 1),
              __props.text ? (openBlock(), createElementBlock("p", _hoisted_4, toDisplayString(__props.text), 1)) : createCommentVNode("", true),
              __props.button?.text ? (openBlock(), createBlock(_component_Button, {
                key: 1,
                to: __props.button.link,
                variant: "primary",
                size: "lg"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.button.text), 1)
                ]),
                _: 1
              }, 8, ["to"])) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
};
const CtaSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2bbc97d4"]]);
const type$4 = "hero";
const title = "Создаём современные веб-сайты";
const subtitle$2 = "Быстро, надёжно, красиво. Используем Nuxt 3 и SCSS.";
const button$1 = { "text": "Узнать больше", "link": "#features" };
const secondaryButton = { "text": "Связаться", "link": "#contact" };
const backgroundImage = "components/HeroSection/bg-hero.jpg";
const heroData = {
  type: type$4,
  title,
  subtitle: subtitle$2,
  button: button$1,
  secondaryButton,
  backgroundImage
};
const type$3 = "features";
const heading$3 = "Наши преимущества";
const subtitle$1 = "Почему стоит выбрать нас";
const items = [{ "icon": "zap", "title": "Молниеносная скорость", "text": "Статическая генерация страниц для максимальной производительности." }, { "icon": "shield", "title": "Надёжность", "text": "Отказоустойчивая архитектура с гарантированной доступностью." }, { "icon": "code", "title": "Чистый код", "text": "Vue 3 компоненты с SCSS — поддерживаемость на высоте." }, { "icon": "smartphone", "title": "Адаптивность", "text": "Идеально выглядит на всех устройствах — от телефона до 4K." }, { "icon": "search", "title": "SEO-оптимизация", "text": "Встроенные мета-теги и семантическая вёрстка." }, { "icon": "tool", "title": "Простая кастомизация", "text": "Меняйте данные в JSON — сайт обновляется автоматически." }];
const featuresData = {
  type: type$3,
  heading: heading$3,
  subtitle: subtitle$1,
  items
};
const type$2 = "about";
const heading$2 = "О нас";
const text$1 = "Мы — команда энтузиастов, создающих современные веб-решения. Наш подход сочетает передовые технологии с проверенными практиками для достижения最佳 результатов.\n\nКаждый проект для нас — это возможность сделать интернет лучше. Мы верим в чистый код, производительность и доступность.";
const stats = [{ "value": "50+", "label": "Проектов" }, { "value": "30+", "label": "Клиентов" }, { "value": "5+", "label": "Лет опыта" }, { "value": "100%", "label": "Удовлетворение" }];
const aboutData = {
  type: type$2,
  heading: heading$2,
  text: text$1,
  stats
};
const type$1 = "contact";
const heading$1 = "Свяжитесь с нами";
const subtitle = "Готовы обсудить ваш проект? Напишите нам!";
const email = "hello@example.com";
const phone = "+7 (999) 123-45-67";
const address = "г. Москва, ул. Примерная, д. 42";
const contactData = {
  type: type$1,
  heading: heading$1,
  subtitle,
  email,
  phone,
  address
};
const type = "cta";
const heading = "Готовы начать?";
const text = "Давайте воплотим вашу идею в жизнь. Свяжитесь с нами сегодня.";
const button = { "text": "Написать нам", "link": "#contact" };
const ctaData = {
  type,
  heading,
  text,
  button
};
const sectionsList = [
  "hero",
  "features",
  "about",
  "cta",
  "contact"
];
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const sectionMap = {
      hero: { component: HeroSection, data: heroData },
      features: { component: FeaturesSection, data: featuresData },
      about: { component: AboutSection, data: aboutData },
      contact: { component: ContactSection, data: contactData },
      cta: { component: CtaSection, data: ctaData }
    };
    const sections = sectionsList.map((name) => sectionMap[name]).filter(Boolean);
    useHead({
      title: "Главная",
      meta: [
        { name: "description", content: "Современный статический сайт на Nuxt 3" }
      ]
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(sections), (section, index) => {
          return openBlock(), createBlock(resolveDynamicComponent(section.component), mergeProps({
            key: index,
            ref_for: true
          }, section.data), null, 16);
        }), 128))
      ]);
    };
  }
};
export {
  _sfc_main as default
};
