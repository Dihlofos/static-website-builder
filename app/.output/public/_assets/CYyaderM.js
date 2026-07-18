import { _ as _export_sfc } from "./1tPrXgE0.js";
import { B as openBlock, C as createElementBlock, D as createBaseVNode, E as toDisplayString, l as unref, N as Fragment, O as renderList, J as normalizeClass, i as ref, o as onMounted, R as onUnmounted, F as createVNode, G as withCtx, I as renderSlot } from "./B5S87wZV.js";
import { _ as __nuxt_component_0$2 } from "./BjFUbwAl.js";
const navItems = [
  {
    label: "Главная",
    link: "#hero"
  },
  {
    label: "Возможности",
    link: "#features"
  },
  {
    label: "О нас",
    link: "#about"
  },
  {
    label: "Контакты",
    link: "#contact"
  }
];
const _hoisted_1$3 = { class: "nav__toggle-icon" };
const _hoisted_2 = { class: "nav__list" };
const _hoisted_3 = ["href"];
const _sfc_main$3 = {
  __name: "Navigation",
  setup(__props) {
    const mobileOpen = ref(false);
    function toggleMobile() {
      mobileOpen.value = !mobileOpen.value;
    }
    function closeMobile() {
      mobileOpen.value = false;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("nav", {
        class: normalizeClass(["nav", { "nav--open": unref(mobileOpen) }])
      }, [
        createBaseVNode("button", {
          class: "nav__toggle",
          onClick: toggleMobile,
          "aria-label": "Меню"
        }, [
          createBaseVNode("span", _hoisted_1$3, toDisplayString(unref(mobileOpen) ? "✕" : "☰"), 1)
        ]),
        createBaseVNode("ul", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(navItems), (item) => {
            return openBlock(), createElementBlock("li", {
              key: item.link,
              class: "nav__item"
            }, [
              createBaseVNode("a", {
                href: item.link,
                class: "nav__link",
                onClick: closeMobile
              }, toDisplayString(item.label), 9, _hoisted_3)
            ]);
          }), 128))
        ])
      ], 2);
    };
  }
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-e25e4602"]]);
const _hoisted_1$2 = { class: "header__inner" };
const _sfc_main$2 = {
  __name: "Header",
  setup(__props) {
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
      const _component_Navigation = __nuxt_component_0$1;
      const _component_Container = __nuxt_component_0$2;
      return openBlock(), createElementBlock("header", {
        class: normalizeClass(["header", { "header--scrolled": unref(scrolled) }])
      }, [
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1$2, [
              _cache[0] || (_cache[0] = createBaseVNode("a", {
                href: "/",
                class: "header__logo"
              }, "Template", -1)),
              createVNode(_component_Navigation)
            ])
          ]),
          _: 1
        })
      ], 2);
    };
  }
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-0b6565a3"]]);
const _sfc_main$1 = {};
const _hoisted_1$1 = {
  class: "footer",
  id: "footer"
};
function _sfc_render$1(_ctx, _cache) {
  const _component_Container = __nuxt_component_0$2;
  return openBlock(), createElementBlock("footer", _hoisted_1$1, [
    createVNode(_component_Container, null, {
      default: withCtx(() => [..._cache[0] || (_cache[0] = [
        createBaseVNode("div", { class: "footer__wrapper" }, [
          createBaseVNode("div", { class: "footer__content" }, [
            createBaseVNode("div", { class: "footer__title" }, "Контакты"),
            createBaseVNode("div", { class: "footer__contacts" }, [
              createBaseVNode("div", { class: "footer__contacts-item" }, [
                createBaseVNode("div", { class: "footer__contacts-label" }, "По вопросам регистрации"),
                createBaseVNode("a", {
                  href: "mailto:ano@mossport.ru",
                  target: "_blank",
                  class: "footer__contacts-link"
                }, "ano@mossport.ru")
              ]),
              createBaseVNode("div", { class: "footer__contacts-item" }, [
                createBaseVNode("div", { class: "footer__contacts-label" }, "Для СМИ"),
                createBaseVNode("a", {
                  href: "mailto:press@moscow.sport",
                  target: "_blank",
                  class: "footer__contacts-link"
                }, "press@moscow.sport")
              ])
            ]),
            createBaseVNode("div", { class: "footer__info" }, [
              createBaseVNode("p", { class: "footer__info-text" }, " Для аккредитации на событие отправьте письмо на электронный адрес со следующей информацией: "),
              createBaseVNode("ul", null, [
                createBaseVNode("li", null, "название СМИ и программы, планируемая дата выхода материала;"),
                createBaseVNode("li", null, "ФИО корреспондента / всех участников съемочной группы с контактными телефонами.")
              ])
            ]),
            createBaseVNode("div", { class: "footer__docs" }, [
              createBaseVNode("a", {
                href: "/docs/policy.pdf",
                target: "_blank"
              }, "Политика конфиденциальности"),
              createBaseVNode("a", {
                href: "/docs/reject.pdf",
                target: "_blank"
              }, "Отказ от претензий от участника"),
              createBaseVNode("a", {
                href: "/docs/reject_child.pdf",
                target: "_blank"
              }, "Отказ от претензий от опекуна ребенка")
            ])
          ])
        ], -1)
      ])]),
      _: 1
    })
  ]);
}
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-52c22c75"]]);
const _sfc_main = {};
const _hoisted_1 = { class: "page" };
function _sfc_render(_ctx, _cache) {
  const _component_Header = __nuxt_component_0;
  const _component_Footer = __nuxt_component_1;
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
