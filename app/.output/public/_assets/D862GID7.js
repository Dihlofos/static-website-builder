import { a as _sfc_main$5, _ as _sfc_main$6 } from "./BXhAQt0p.js";
import { O as useLocale, S as resolveDirective, B as openBlock, C as createElementBlock, D as createBaseVNode, l as unref, L as createBlock, M as Fragment, N as renderList, J as normalizeClass, i as ref, m as computed, R as toRef, T as withDirectives, H as createTextVNode, E as toDisplayString, o as onMounted, U as onUnmounted, F as createVNode, G as withCtx, d as defineComponent, V as vShow, I as renderSlot } from "./K7dWFRaF.js";
import { _ as _export_sfc } from "./1tPrXgE0.js";
const navigationRu = {
  navItems: [
    { label: "Главная", link: "#hero" },
    { label: "Возможности", link: "#features" },
    { label: "О нас", link: "#about" },
    { label: "Контакты", link: "#contact" }
  ],
  images: {
    burger: "/images/burger.svg",
    close: "/images/close.svg"
  }
};
const navigationEn = {
  navItems: [
    { label: "Home", link: "#hero" },
    { label: "Features", link: "#features" },
    { label: "About us", link: "#about" },
    { label: "Contact", link: "#contact" }
  ],
  images: {
    burger: "/images/burger.svg",
    close: "/images/close.svg"
  }
};
const uiRu = {
  languageSwitcher: "Выбор языка",
  menu: "Меню",
  openMenu: "Открыть меню",
  closeMenu: "Закрыть меню",
  cookieMessage: "Продолжая пользоваться сайтом, вы соглашаетесь с условиями обработки cookie-файлов. Это необходимо для качественной работы сайта. Если вы не согласны, установите специальные настройки в браузере.",
  cookieAccept: "Ок",
  sliderPrevious: "Назад",
  sliderNext: "Вперёд"
};
const uiEn = {
  languageSwitcher: "Choose language",
  menu: "Menu",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  cookieMessage: "By continuing to use this site, you agree to the use of cookies. Cookies help us keep the site working properly. If you do not agree, change your browser settings.",
  cookieAccept: "OK",
  sliderPrevious: "Previous",
  sliderNext: "Next"
};
const _hoisted_1$4 = ["aria-label"];
const _hoisted_2$3 = { class: "nav__overlay" };
const _hoisted_3$2 = { class: "nav__list" };
const _hoisted_4$2 = ["href"];
const _sfc_main$4 = {
  __name: "Navigation",
  props: {
    locale: { type: String, default: null }
  },
  setup(__props) {
    const props = __props;
    const { locale } = useLocale(toRef(props, "locale"));
    const navigationByLocale = { ru: navigationRu, en: navigationEn };
    const uiByLocale = { ru: uiRu, en: uiEn };
    const navigation = computed(() => navigationByLocale[locale.value]);
    const ui = computed(() => uiByLocale[locale.value]);
    const mobileOpen = ref(false);
    function toggleMobile() {
      mobileOpen.value = !mobileOpen.value;
    }
    function closeMobile() {
      mobileOpen.value = false;
    }
    return (_ctx, _cache) => {
      const _component_Image = _sfc_main$5;
      const _directive_anchor = resolveDirective("anchor");
      return openBlock(), createElementBlock("nav", {
        class: normalizeClass(["nav", { "nav--open": unref(mobileOpen) }])
      }, [
        createBaseVNode("button", {
          class: "nav__toggle",
          onClick: toggleMobile,
          "aria-label": ui.value.menu
        }, [
          !unref(mobileOpen) ? (openBlock(), createBlock(_component_Image, {
            key: 0,
            src: navigation.value.images.burger,
            alt: ui.value.openMenu,
            width: "44",
            height: "44"
          }, null, 8, ["src", "alt"])) : (openBlock(), createBlock(_component_Image, {
            key: 1,
            src: navigation.value.images.close,
            alt: ui.value.closeMenu,
            width: "35",
            height: "35"
          }, null, 8, ["src", "alt"]))
        ], 8, _hoisted_1$4),
        createBaseVNode("div", _hoisted_2$3, [
          createBaseVNode("ul", _hoisted_3$2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(navigation.value.navItems, (item) => {
              return openBlock(), createElementBlock("li", {
                key: item.link,
                class: "nav__item"
              }, [
                withDirectives((openBlock(), createElementBlock("a", {
                  href: item.link,
                  class: "nav__link",
                  onClick: closeMobile
                }, [
                  createTextVNode(toDisplayString(item.label), 1)
                ], 8, _hoisted_4$2)), [
                  [_directive_anchor]
                ])
              ]);
            }), 128))
          ])
        ])
      ], 2);
    };
  }
};
const _hoisted_1$3 = { class: "header__inner" };
const _hoisted_2$2 = ["aria-label"];
const _hoisted_3$1 = ["aria-pressed"];
const _hoisted_4$1 = ["aria-pressed"];
const _sfc_main$3 = {
  __name: "Header",
  setup(__props) {
    const { locale, setLocale } = useLocale();
    const uiByLocale = { ru: uiRu, en: uiEn };
    const ui = computed(() => uiByLocale[locale.value]);
    const scrolled = ref(false);
    function onScroll() {
      scrolled.value = window.scrollY > 50;
    }
    onMounted(() => {
      window.addEventListener("scroll", onScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", onScroll);
    });
    return (_ctx, _cache) => {
      const _component_Navigation = _sfc_main$4;
      const _component_Container = _sfc_main$6;
      return openBlock(), createElementBlock("header", {
        class: normalizeClass(["header", { "header--scrolled": unref(scrolled) }])
      }, [
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1$3, [
              createVNode(_component_Navigation),
              createBaseVNode("div", {
                class: "header__locale",
                role: "group",
                "aria-label": ui.value.languageSwitcher
              }, [
                createBaseVNode("button", {
                  type: "button",
                  "aria-pressed": unref(locale) === "ru",
                  onClick: _cache[0] || (_cache[0] = ($event) => unref(setLocale)("ru"))
                }, "Русский", 8, _hoisted_3$1),
                createBaseVNode("button", {
                  type: "button",
                  "aria-pressed": unref(locale) === "en",
                  onClick: _cache[1] || (_cache[1] = ($event) => unref(setLocale)("en"))
                }, "English", 8, _hoisted_4$1)
              ], 8, _hoisted_2$2)
            ])
          ]),
          _: 1
        })
      ], 2);
    };
  }
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-3ab1a5b2"]]);
const footerRu = {
  type: "footer",
  title: "Контакты",
  contacts: [
    {
      label: "По вопросам регистрации",
      email: "name@mail.ru"
    },
    {
      label: "Для СМИ",
      email: "pressame@mail.ru"
    }
  ],
  info: {
    text: "Для аккредитации на событие отправьте письмо на электронный адрес со следующей информацией:",
    items: [
      "название СМИ и программы, планируемая дата выхода материала;",
      "ФИО корреспондента / всех участников съемочной группы с контактными телефонами."
    ]
  },
  docs: [
    { href: "/docs/policy.pdf", label: "Политика конфиденциальности" },
    { href: "/docs/reject.pdf", label: "Отказ от претензий от участника" },
    { href: "/docs/reject_child.pdf", label: "Отказ от претензий от опекуна ребенка" }
  ]
};
const footerEn = {
  type: "footer",
  title: "Contact us",
  contacts: [
    {
      label: "Registration enquiries",
      email: "name@mail.ru"
    },
    {
      label: "Press enquiries",
      email: "pressame@mail.ru"
    }
  ],
  info: {
    text: "To request media accreditation for the event, email us with the following information:",
    items: [
      "Name of the media outlet and programme, and the planned publication date;",
      "Full names and contact phone numbers of the correspondent and all members of the filming crew."
    ]
  },
  docs: [
    { href: "/docs/policy.pdf", label: "Privacy Policy" },
    { href: "/docs/reject.pdf", label: "Participant Waiver" },
    { href: "/docs/reject_child.pdf", label: "Parent/Guardian Waiver for a Child" }
  ]
};
const _hoisted_1$2 = {
  class: "footer",
  id: "contact"
};
const _hoisted_2$1 = { class: "footer__wrapper" };
const _hoisted_3 = { class: "footer__content" };
const _hoisted_4 = { class: "footer__title" };
const _hoisted_5 = { class: "footer__contacts" };
const _hoisted_6 = { class: "footer__contacts-label" };
const _hoisted_7 = ["href"];
const _hoisted_8 = { class: "footer__info" };
const _hoisted_9 = { class: "footer__info-text" };
const _hoisted_10 = { class: "footer__docs" };
const _hoisted_11 = ["href"];
const _sfc_main$2 = {
  __name: "Footer",
  props: {
    locale: { type: String, default: null }
  },
  setup(__props) {
    const props = __props;
    const { locale } = useLocale(toRef(props, "locale"));
    const footerByLocale = { ru: footerRu, en: footerEn };
    const footerData = computed(() => footerByLocale[locale.value]);
    return (_ctx, _cache) => {
      const _component_Container = _sfc_main$6;
      return openBlock(), createElementBlock("footer", _hoisted_1$2, [
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$1, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, toDisplayString(footerData.value.title), 1),
                createBaseVNode("div", _hoisted_5, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(footerData.value.contacts, (contact) => {
                    return openBlock(), createElementBlock("div", {
                      key: contact.email,
                      class: "footer__contacts-item"
                    }, [
                      createBaseVNode("div", _hoisted_6, toDisplayString(contact.label), 1),
                      createBaseVNode("a", {
                        href: "mailto:" + contact.email,
                        target: "_blank",
                        class: "footer__contacts-link"
                      }, toDisplayString(contact.email), 9, _hoisted_7)
                    ]);
                  }), 128))
                ]),
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("p", _hoisted_9, toDisplayString(footerData.value.info.text), 1),
                  createBaseVNode("ul", null, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(footerData.value.info.items, (item, i) => {
                      return openBlock(), createElementBlock("li", { key: i }, toDisplayString(item), 1);
                    }), 128))
                  ])
                ]),
                createBaseVNode("div", _hoisted_10, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(footerData.value.docs, (doc) => {
                    return openBlock(), createElementBlock("a", {
                      key: doc.href,
                      href: doc.href,
                      target: "_blank"
                    }, toDisplayString(doc.label), 9, _hoisted_11);
                  }), 128))
                ])
              ])
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
};
const _hoisted_1$1 = { class: "cookie-modal" };
const _hoisted_2 = { class: "cookie-modal__text" };
const STORAGE_KEY = "cookie-modal-shown";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CookieModal",
  props: {
    locale: { type: String, default: null }
  },
  setup(__props) {
    const props = __props;
    const { locale } = useLocale(toRef(props, "locale"));
    const uiByLocale = { ru: uiRu, en: uiEn };
    const ui = computed(() => uiByLocale[locale.value]);
    const isVisible = ref(false);
    onMounted(() => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        isVisible.value = true;
      }
    });
    function accept() {
      isVisible.value = false;
      localStorage.setItem(STORAGE_KEY, "true");
    }
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("p", null, toDisplayString(ui.value.cookieMessage), 1)
        ]),
        createBaseVNode("button", {
          class: "cookie-modal__close",
          onClick: accept
        }, toDisplayString(ui.value.cookieAccept), 1)
      ], 512)), [
        [vShow, isVisible.value]
      ]);
    };
  }
});
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e7bb39d1"]]);
const _sfc_main = {};
const _hoisted_1 = { class: "page" };
function _sfc_render(_ctx, _cache) {
  const _component_Header = __nuxt_component_0;
  const _component_Footer = _sfc_main$2;
  const _component_CookieModal = __nuxt_component_2;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_Header),
    renderSlot(_ctx.$slots, "default"),
    createVNode(_component_Footer),
    createVNode(_component_CookieModal)
  ]);
}
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  _default as default
};
