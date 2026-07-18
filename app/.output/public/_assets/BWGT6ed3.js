import { _ as _export_sfc } from "./1tPrXgE0.js";
import { B as openBlock, C as createElementBlock, D as createBaseVNode, E as toDisplayString, l as unref, P as Fragment, Q as renderList, J as normalizeClass, i as ref, o as onMounted, R as onUnmounted, F as createVNode, G as withCtx, S as site, I as renderSlot } from "./DFADeni2.js";
import { _ as __nuxt_component_0$2 } from "./WNLM8uNV.js";
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
const _hoisted_1$1 = { class: "footer" };
const _hoisted_2 = { class: "footer__grid" };
const _hoisted_3 = { class: "footer__brand" };
const _hoisted_4 = { class: "footer__desc" };
const _hoisted_5 = { class: "footer__links" };
const _hoisted_6 = { class: "footer__list" };
const _hoisted_7 = ["href"];
const _hoisted_8 = { class: "footer__bottom" };
const _hoisted_9 = { class: "footer__copyright" };
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
                _cache[0] || (_cache[0] = createBaseVNode("a", {
                  href: "/",
                  class: "footer__logo"
                }, "Template", -1)),
                createBaseVNode("p", _hoisted_4, toDisplayString(unref(site).description), 1)
              ]),
              createBaseVNode("div", _hoisted_5, [
                _cache[1] || (_cache[1] = createBaseVNode("h4", { class: "footer__heading" }, "Навигация", -1)),
                createBaseVNode("ul", _hoisted_6, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(navItems), (item) => {
                    return openBlock(), createElementBlock("li", {
                      key: item.link
                    }, [
                      createBaseVNode("a", {
                        href: item.link,
                        class: "footer__link"
                      }, toDisplayString(item.label), 9, _hoisted_7)
                    ]);
                  }), 128))
                ])
              ]),
              _cache[2] || (_cache[2] = createBaseVNode("div", { class: "footer__links" }, [
                createBaseVNode("h4", { class: "footer__heading" }, "Контакты"),
                createBaseVNode("ul", { class: "footer__list" }, [
                  createBaseVNode("li", null, [
                    createBaseVNode("a", {
                      href: "mailto:hello@example.com",
                      class: "footer__link"
                    }, "hello@example.com")
                  ]),
                  createBaseVNode("li", null, [
                    createBaseVNode("a", {
                      href: "tel:+79991234567",
                      class: "footer__link"
                    }, "+7 (999) 123-45-67")
                  ])
                ])
              ], -1))
            ]),
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("p", _hoisted_9, toDisplayString(unref(site).copyright), 1)
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-38ffcfc0"]]);
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
