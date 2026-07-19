import { _ as _export_sfc } from "./1tPrXgE0.js";
import { B as openBlock, C as createElementBlock, D as createBaseVNode, E as toDisplayString, l as unref, N as Fragment, O as renderList, J as normalizeClass, i as ref, o as onMounted, R as onUnmounted, F as createVNode, G as withCtx, I as renderSlot } from "./OkrzeBgZ.js";
import { _ as __nuxt_component_0$2 } from "./BxqsffKz.js";
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
const _hoisted_2$1 = { class: "nav__list" };
const _hoisted_3$1 = ["href"];
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
        createBaseVNode("ul", _hoisted_2$1, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(navItems), (item) => {
            return openBlock(), createElementBlock("li", {
              key: item.link,
              class: "nav__item"
            }, [
              createBaseVNode("a", {
                href: item.link,
                class: "nav__link",
                onClick: closeMobile
              }, toDisplayString(item.label), 9, _hoisted_3$1)
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
const type = "footer";
const title = "Контакты";
const contacts = [{ "label": "По вопросам регистрации", "email": "name@mail.ru" }, { "label": "Для СМИ", "email": "pressame@mail.ru" }];
const info = { "text": "Для аккредитации на событие отправьте письмо на электронный адрес со следующей информацией:", "items": ["название СМИ и программы, планируемая дата выхода материала;", "ФИО корреспондента / всех участников съемочной группы с контактными телефонами."] };
const docs = [{ "href": "/docs/policy.pdf", "label": "Политика конфиденциальности" }, { "href": "/docs/reject.pdf", "label": "Отказ от претензий от участника" }, { "href": "/docs/reject_child.pdf", "label": "Отказ от претензий от опекуна ребенка" }];
const footerData = {
  type,
  title,
  contacts,
  info,
  docs
};
const _hoisted_1$1 = {
  class: "footer",
  id: "footer"
};
const _hoisted_2 = { class: "footer__wrapper" };
const _hoisted_3 = { class: "footer__content" };
const _hoisted_4 = { class: "footer__title" };
const _hoisted_5 = { class: "footer__contacts" };
const _hoisted_6 = { class: "footer__contacts-label" };
const _hoisted_7 = ["href"];
const _hoisted_8 = { class: "footer__info" };
const _hoisted_9 = { class: "footer__info-text" };
const _hoisted_10 = { class: "footer__docs" };
const _hoisted_11 = ["href"];
const _sfc_main$1 = {
  __name: "Footer",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Container = __nuxt_component_0$2;
      return openBlock(), createElementBlock("footer", _hoisted_1$1, [
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", _hoisted_4, toDisplayString(unref(footerData).title), 1),
                createBaseVNode("div", _hoisted_5, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(footerData).contacts, (contact) => {
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
                  createBaseVNode("p", _hoisted_9, toDisplayString(unref(footerData).info.text), 1),
                  createBaseVNode("ul", null, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(footerData).info.items, (item, i) => {
                      return openBlock(), createElementBlock("li", { key: i }, toDisplayString(item), 1);
                    }), 128))
                  ])
                ]),
                createBaseVNode("div", _hoisted_10, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(footerData).docs, (doc) => {
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
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8d2b4cce"]]);
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
