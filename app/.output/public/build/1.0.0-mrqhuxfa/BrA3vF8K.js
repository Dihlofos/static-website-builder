import { B as openBlock, C as createElementBlock, I as renderSlot, J as normalizeClass, F as createVNode, G as withCtx, K as normalizeStyle, l as unref, m as computed, D as createBaseVNode, E as toDisplayString, L as createCommentVNode, M as createBlock, H as createTextVNode, N as Fragment, O as renderList, a as useNuxtApp, P as asyncDataDefaults, Q as watch, R as onScopeDispose, S as getCurrentScope, i as ref, s as shallowRef, T as nextTick, U as createError, V as toRef, W as onBeforeMount, X as onUnmounted, Y as inject, Z as getCurrentInstance, _ as toValue, $ as queuePostFlushCb, a0 as withAsyncContext, A as useHead, a1 as normalizeProps, a2 as mergeProps, a3 as __vitePreload } from "./DFYZNThw.js";
import { _ as _export_sfc } from "./1tPrXgE0.js";
import { _ as __nuxt_component_1$1, a as __nuxt_component_0$3 } from "./C9LYYVfA.js";
const _hoisted_1$6 = ["href"];
const _hoisted_2$6 = ["disabled", "type"];
const _sfc_main$7 = {
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
      ], 10, _hoisted_1$6)) : (openBlock(), createElementBlock("button", {
        key: 1,
        class: normalizeClass(["button", `button--${__props.variant}`, `button--${__props.size}`]),
        disabled: __props.disabled,
        type: __props.type
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0)
      ], 10, _hoisted_2$6));
    };
  }
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-5634266c"]]);
const _hoisted_1$5 = { class: "hero__content" };
const _hoisted_2$5 = { class: "hero__title" };
const _hoisted_3$5 = {
  key: 0,
  class: "hero__subtitle"
};
const _hoisted_4$4 = {
  key: 1,
  class: "hero__actions"
};
const _sfc_main$6 = {
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
      const _component_Button = __nuxt_component_0$2;
      const _component_Container = __nuxt_component_1$1;
      return openBlock(), createElementBlock("section", {
        id: "hero",
        class: "hero",
        style: normalizeStyle(unref(bgStyle))
      }, [
        createVNode(_component_Container, null, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1$5, [
              createBaseVNode("h1", _hoisted_2$5, toDisplayString(__props.title), 1),
              __props.subtitle ? (openBlock(), createElementBlock("p", _hoisted_3$5, toDisplayString(__props.subtitle), 1)) : createCommentVNode("", true),
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
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-76de8107"]]);
const _hoisted_1$4 = {
  key: 0,
  class: "card__icon"
};
const _hoisted_2$4 = {
  key: 1,
  class: "card__title"
};
const _hoisted_3$4 = {
  key: 2,
  class: "card__text"
};
const _sfc_main$5 = {
  __name: "Card",
  props: {
    title: { type: String, default: "" },
    text: { type: String, default: "" },
    icon: { type: String, default: "" },
    variant: { type: String, default: "default" }
    // default, outlined, elevated
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Icon = __nuxt_component_0$3;
      return openBlock(), createElementBlock("article", {
        class: normalizeClass(["card", `card--${__props.variant}`])
      }, [
        __props.icon ? (openBlock(), createElementBlock("div", _hoisted_1$4, [
          createVNode(_component_Icon, {
            name: __props.icon,
            size: 32
          }, null, 8, ["name"])
        ])) : createCommentVNode("", true),
        __props.title ? (openBlock(), createElementBlock("h3", _hoisted_2$4, toDisplayString(__props.title), 1)) : createCommentVNode("", true),
        __props.text ? (openBlock(), createElementBlock("p", _hoisted_3$4, toDisplayString(__props.text), 1)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default", {}, void 0)
      ], 2);
    };
  }
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-b223ae79"]]);
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
      const _component_Card = __nuxt_component_0;
      const _component_Container = __nuxt_component_1$1;
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
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-e070a5f5"]]);
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
      const _component_Container = __nuxt_component_1$1;
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
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-d08c020e"]]);
const _hoisted_1$1 = { class: "section cta" };
const _hoisted_2$1 = { class: "cta__content" };
const _hoisted_3$1 = { class: "cta__heading" };
const _hoisted_4$1 = {
  key: 0,
  class: "cta__text"
};
const _sfc_main$2 = {
  __name: "CtaSection",
  props: {
    heading: { type: String, required: true },
    text: { type: String, default: "" },
    button: { type: Object, default: () => ({}) }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_Button = __nuxt_component_0$2;
      const _component_Container = __nuxt_component_1$1;
      return openBlock(), createElementBlock("section", _hoisted_1$1, [
        createVNode(_component_Container, { narrow: "" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$1, [
              createBaseVNode("h2", _hoisted_3$1, toDisplayString(__props.heading), 1),
              __props.text ? (openBlock(), createElementBlock("p", _hoisted_4$1, toDisplayString(__props.text), 1)) : createCommentVNode("", true),
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
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-2bbc97d4"]]);
const _hoisted_1 = {
  id: "contact",
  class: "section contact"
};
const _hoisted_2 = { class: "contact__header" };
const _hoisted_3 = { class: "contact__heading" };
const _hoisted_4 = {
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
const _sfc_main$1 = {
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
      const _component_Icon = __nuxt_component_0$3;
      const _component_Container = __nuxt_component_1$1;
      return openBlock(), createElementBlock("section", _hoisted_1, [
        createVNode(_component_Container, { narrow: "" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("h2", _hoisted_3, toDisplayString(__props.heading), 1),
              __props.subtitle ? (openBlock(), createElementBlock("p", _hoisted_4, toDisplayString(__props.subtitle), 1)) : createCommentVNode("", true)
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
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9da33ed9"]]);
const __variableDynamicImportRuntimeHelper = (glob$1, path$13, segs) => {
  const v = glob$1[path$13];
  if (v) return typeof v === "function" ? v() : Promise.resolve(v);
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + path$13 + (path$13.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : ""))));
  });
};
const sectionsList = [
  "hero",
  "features",
  "about",
  "cta",
  "contact"
];
const DEBOUNCE_DEFAULTS = { trailing: true };
function debounce(fn, wait = 25, options = {}) {
  options = {
    ...DEBOUNCE_DEFAULTS,
    ...options
  };
  if (!Number.isFinite(wait)) throw new TypeError("Expected `wait` to be a finite number");
  let leadingValue;
  let timeout;
  let resolveList = [];
  let currentPromise;
  let trailingArgs;
  const applyFn = (_this, args) => {
    currentPromise = _applyPromised(fn, _this, args);
    currentPromise.finally(() => {
      currentPromise = null;
      if (options.trailing && trailingArgs && !timeout) {
        const promise = applyFn(_this, trailingArgs);
        trailingArgs = null;
        return promise;
      }
    });
    return currentPromise;
  };
  const debounced = function(...args) {
    if (options.trailing) trailingArgs = args;
    if (currentPromise) return currentPromise;
    return new Promise((resolve) => {
      const shouldCallNow = !timeout && options.leading;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        timeout = null;
        const promise = options.leading ? leadingValue : applyFn(this, args);
        trailingArgs = null;
        for (const _resolve of resolveList) _resolve(promise);
        resolveList = [];
      }, wait);
      if (shouldCallNow) {
        leadingValue = applyFn(this, args);
        resolve(leadingValue);
      } else resolveList.push(resolve);
    });
  };
  const _clearTimeout = (timer) => {
    if (timer) {
      clearTimeout(timer);
      timeout = null;
    }
  };
  debounced.isPending = () => !!timeout;
  debounced.cancel = () => {
    _clearTimeout(timeout);
    resolveList = [];
    trailingArgs = null;
  };
  debounced.flush = () => {
    _clearTimeout(timeout);
    if (!trailingArgs || currentPromise) return;
    const args = trailingArgs;
    trailingArgs = null;
    return applyFn(this, args);
  };
  return debounced;
}
async function _applyPromised(fn, _this, args) {
  return await fn.apply(_this, args);
}
const clientOnlySymbol = /* @__PURE__ */ Symbol.for("nuxt:client-only");
const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (_isAutoKeyNeeded(args[0], args[1])) {
    args.unshift(autoKey);
  }
  let [_key, _handler, options = {}] = args;
  let keyChanging = false;
  const key = computed(() => toValue(_key));
  if (typeof key.value !== "string") {
    throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  options.server ??= true;
  options.default ??= getDefault;
  options.getCachedData ??= getDefaultCachedData;
  options.lazy ??= false;
  options.immediate ??= true;
  options.deep ??= asyncDataDefaults.deep;
  options.dedupe ??= "cancel";
  options._functionName || "useAsyncData";
  nuxtApp._asyncData[key.value];
  function createInitialFetch() {
    const initialFetchOptions = { cause: "initial", dedupe: options.dedupe };
    if (!nuxtApp._asyncData[key.value]?._init) {
      initialFetchOptions.cachedData = options.getCachedData(key.value, nuxtApp, { cause: "initial" });
      nuxtApp._asyncData[key.value] = createAsyncData(nuxtApp, key.value, _handler, options, initialFetchOptions.cachedData);
    }
    return () => nuxtApp._asyncData[key.value].execute(initialFetchOptions);
  }
  const initialFetch = createInitialFetch();
  const asyncData = nuxtApp._asyncData[key.value];
  asyncData._deps++;
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  {
    let unregister = function(key2) {
      const data = nuxtApp._asyncData[key2];
      if (data?._deps) {
        data._deps--;
        if (data._deps === 0) {
          data?._off();
        }
      }
    };
    const instance = getCurrentInstance();
    if (instance && fetchOnServer && options.immediate && !instance.sp) {
      instance.sp = [];
    }
    if (instance && !instance._nuxtOnBeforeMountCbs) {
      instance._nuxtOnBeforeMountCbs = [];
      const cbs = instance._nuxtOnBeforeMountCbs;
      onBeforeMount(() => {
        cbs.forEach((cb) => {
          cb();
        });
        cbs.splice(0, cbs.length);
      });
      onUnmounted(() => cbs.splice(0, cbs.length));
    }
    const isWithinClientOnly = instance && (instance._nuxtClientOnly || inject(clientOnlySymbol, false));
    if (fetchOnServer && nuxtApp.isHydrating && (asyncData.error.value || asyncData.data.value != null)) {
      {
        asyncData.pending.value = false;
      }
      asyncData.status.value = asyncData.error.value ? "error" : "success";
    } else if (instance && (!isWithinClientOnly && nuxtApp.payload.serverRendered && nuxtApp.isHydrating || options.lazy) && options.immediate) {
      instance._nuxtOnBeforeMountCbs.push(initialFetch);
    } else if (options.immediate) {
      initialFetch();
    }
    const hasScope = getCurrentScope();
    const unsubKeyWatcher = watch(key, (newKey, oldKey) => {
      if ((newKey || oldKey) && newKey !== oldKey) {
        keyChanging = true;
        const hadData = nuxtApp._asyncData[oldKey]?.data.value !== asyncDataDefaults.value;
        const wasRunning = nuxtApp._asyncDataPromises[oldKey] !== void 0;
        const initialFetchOptions = { cause: "initial", dedupe: options.dedupe };
        if (!nuxtApp._asyncData[newKey]?._init) {
          let initialValue;
          if (oldKey && hadData) {
            initialValue = nuxtApp._asyncData[oldKey].data.value;
          } else {
            initialValue = options.getCachedData(newKey, nuxtApp, { cause: "initial" });
            initialFetchOptions.cachedData = initialValue;
          }
          nuxtApp._asyncData[newKey] = createAsyncData(nuxtApp, newKey, _handler, options, initialValue);
        }
        nuxtApp._asyncData[newKey]._deps++;
        if (oldKey) {
          unregister(oldKey);
        }
        if (options.immediate || hadData || wasRunning) {
          nuxtApp._asyncData[newKey].execute(initialFetchOptions);
        }
        queuePostFlushCb(() => {
          keyChanging = false;
        });
      }
    }, { flush: "sync" });
    const unsubParamsWatcher = options.watch ? watch(options.watch, () => {
      if (keyChanging) {
        return;
      }
      if (nuxtApp._asyncData[key.value]?._execute.isPending()) {
        queuePostFlushCb(() => {
          nuxtApp._asyncData[key.value]?._execute.flush();
        });
      }
      nuxtApp._asyncData[key.value]?._execute({ cause: "watch", dedupe: options.dedupe });
    }) : () => {
    };
    if (hasScope) {
      onScopeDispose(() => {
        unsubKeyWatcher();
        unsubParamsWatcher();
        unregister(key.value);
      });
    }
  }
  const asyncReturn = {
    data: writableComputedRef(() => nuxtApp._asyncData[key.value]?.data),
    pending: writableComputedRef(() => nuxtApp._asyncData[key.value]?.pending),
    status: writableComputedRef(() => nuxtApp._asyncData[key.value]?.status),
    error: writableComputedRef(() => nuxtApp._asyncData[key.value]?.error),
    refresh: (...args2) => {
      if (!nuxtApp._asyncData[key.value]?._init) {
        const initialFetch2 = createInitialFetch();
        return initialFetch2();
      }
      return nuxtApp._asyncData[key.value].execute(...args2);
    },
    execute: (...args2) => asyncReturn.refresh(...args2),
    clear: () => {
      const entry = nuxtApp._asyncData[key.value];
      if (entry?._abortController) {
        try {
          entry._abortController.abort(new DOMException("AsyncData aborted by user.", "AbortError"));
        } finally {
          entry._abortController = void 0;
        }
      }
      clearNuxtDataByKey(nuxtApp, key.value);
    }
  };
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key.value]).then(() => asyncReturn);
  Object.assign(asyncDataPromise, asyncReturn);
  Object.defineProperties(asyncDataPromise, {
    then: { enumerable: true, value: asyncDataPromise.then.bind(asyncDataPromise) },
    catch: { enumerable: true, value: asyncDataPromise.catch.bind(asyncDataPromise) },
    finally: { enumerable: true, value: asyncDataPromise.finally.bind(asyncDataPromise) }
  });
  return asyncDataPromise;
}
function writableComputedRef(getter) {
  return computed({
    get() {
      return getter()?.value;
    },
    set(value) {
      const ref2 = getter();
      if (ref2) {
        ref2.value = value;
      }
    }
  });
}
function _isAutoKeyNeeded(keyOrFetcher, fetcher) {
  if (typeof keyOrFetcher === "string") {
    return false;
  }
  if (typeof keyOrFetcher === "object" && keyOrFetcher !== null) {
    return false;
  }
  if (typeof keyOrFetcher === "function" && typeof fetcher === "function") {
    return false;
  }
  return true;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    {
      nuxtApp._asyncData[key].pending.value = false;
    }
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function createAsyncData(nuxtApp, key, _handler, options, initialCachedData) {
  nuxtApp.payload._errors[key] ??= asyncDataDefaults.errorValue;
  const hasCustomGetCachedData = options.getCachedData !== getDefaultCachedData;
  const handler = _handler;
  const _ref = options.deep ? ref : shallowRef;
  const hasCachedData = initialCachedData != null;
  const unsubRefreshAsyncData = nuxtApp.hook("app:data:refresh", async (keys) => {
    if (!keys || keys.includes(key)) {
      await asyncData.execute({ cause: "refresh:hook" });
    }
  });
  const asyncData = {
    data: _ref(hasCachedData ? initialCachedData : options.default()),
    pending: shallowRef(!hasCachedData),
    error: toRef(nuxtApp.payload._errors, key),
    status: shallowRef("idle"),
    execute: (...args) => {
      const [_opts, newValue = void 0] = args;
      const opts = _opts && newValue === void 0 && typeof _opts === "object" ? _opts : {};
      if (nuxtApp._asyncDataPromises[key]) {
        if (isDefer(opts.dedupe ?? options.dedupe)) {
          return nuxtApp._asyncDataPromises[key];
        }
      }
      if (opts.cause === "initial" || nuxtApp.isHydrating) {
        const cachedData = "cachedData" in opts ? opts.cachedData : options.getCachedData(key, nuxtApp, { cause: opts.cause ?? "refresh:manual" });
        if (cachedData != null) {
          nuxtApp.payload.data[key] = asyncData.data.value = cachedData;
          asyncData.error.value = asyncDataDefaults.errorValue;
          asyncData.status.value = "success";
          return Promise.resolve(cachedData);
        }
      }
      {
        asyncData.pending.value = true;
      }
      if (asyncData._abortController) {
        asyncData._abortController.abort(new DOMException("AsyncData request cancelled by deduplication", "AbortError"));
      }
      asyncData._abortController = new AbortController();
      asyncData.status.value = "pending";
      const cleanupController = new AbortController();
      const promise = new Promise(
        (resolve, reject) => {
          try {
            const timeout = opts.timeout ?? options.timeout;
            const mergedSignal = mergeAbortSignals([asyncData._abortController?.signal, opts?.signal], cleanupController.signal, timeout);
            if (mergedSignal.aborted) {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
              return;
            }
            mergedSignal.addEventListener("abort", () => {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
            }, { once: true, signal: cleanupController.signal });
            return Promise.resolve(handler(nuxtApp, { signal: mergedSignal })).then(resolve, reject);
          } catch (err) {
            reject(err);
          }
        }
      ).then(async (_result) => {
        if (nuxtApp._asyncDataPromises[key] !== promise) {
          return;
        }
        let result = _result;
        if (options.transform) {
          result = await options.transform(_result);
        }
        if (options.pick) {
          result = pick(result, options.pick);
        }
        nuxtApp.payload.data[key] = result;
        asyncData.data.value = result;
        asyncData.error.value = asyncDataDefaults.errorValue;
        asyncData.status.value = "success";
      }).catch((error) => {
        if (nuxtApp._asyncDataPromises[key] !== promise) {
          return nuxtApp._asyncDataPromises[key];
        }
        if (asyncData._abortController?.signal.aborted) {
          return nuxtApp._asyncDataPromises[key];
        }
        if (typeof DOMException !== "undefined" && error instanceof DOMException && error.name === "AbortError") {
          asyncData.status.value = "idle";
          return nuxtApp._asyncDataPromises[key];
        }
        asyncData.error.value = createError(error);
        asyncData.data.value = unref(options.default());
        asyncData.status.value = "error";
      }).finally(() => {
        cleanupController.abort();
        if (nuxtApp._asyncDataPromises[key] === promise) {
          {
            asyncData.pending.value = false;
          }
          delete nuxtApp._asyncDataPromises[key];
        }
      });
      nuxtApp._asyncDataPromises[key] = promise;
      return nuxtApp._asyncDataPromises[key];
    },
    _execute: debounce((...args) => asyncData.execute(...args), 0, { leading: true }),
    _default: options.default,
    _deps: 0,
    _init: true,
    _hash: void 0,
    _off: () => {
      unsubRefreshAsyncData();
      if (nuxtApp._asyncData[key]?._init) {
        nuxtApp._asyncData[key]._init = false;
      }
      if (!hasCustomGetCachedData) {
        nextTick(() => {
          if (!nuxtApp._asyncData[key]?._init) {
            clearNuxtDataByKey(nuxtApp, key);
            asyncData.execute = () => Promise.resolve();
            asyncData.data.value = asyncDataDefaults.value;
          }
        });
      }
    }
  };
  return asyncData;
}
const getDefault = () => asyncDataDefaults.value;
const getDefaultCachedData = (key, nuxtApp, ctx) => {
  if (nuxtApp.isHydrating) {
    return nuxtApp.payload.data[key];
  }
  if (ctx.cause !== "refresh:manual" && ctx.cause !== "refresh:hook") {
    return nuxtApp.static.data[key];
  }
};
function mergeAbortSignals(signals, cleanupSignal, timeout) {
  const list = signals.filter((s) => !!s);
  if (typeof timeout === "number" && timeout >= 0) {
    const timeoutSignal = AbortSignal.timeout?.(timeout);
    if (timeoutSignal) {
      list.push(timeoutSignal);
    }
  }
  if (AbortSignal.any) {
    return AbortSignal.any(list);
  }
  const controller = new AbortController();
  for (const sig of list) {
    if (sig.aborted) {
      const reason = sig.reason ?? new DOMException("Aborted", "AbortError");
      try {
        controller.abort(reason);
      } catch {
        controller.abort();
      }
      return controller.signal;
    }
  }
  const onAbort = () => {
    const abortedSignal = list.find((s) => s.aborted);
    const reason = abortedSignal?.reason ?? new DOMException("Aborted", "AbortError");
    try {
      controller.abort(reason);
    } catch {
      controller.abort();
    }
  };
  for (const sig of list) {
    sig.addEventListener?.("abort", onAbort, { once: true, signal: cleanupSignal });
  }
  return controller.signal;
}
const _sfc_main = {
  __name: "index",
  async setup(__props) {
    let __temp, __restore;
    const { data: sections } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("sections", () => {
      return Promise.all(
        sectionsList.map(async (name) => {
          const mod = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../data/sections/about.json": () => __vitePreload(() => import("./DnCTL4Vf.js"), true ? [] : void 0, import.meta.url), "../../data/sections/contact.json": () => __vitePreload(() => import("./wBWCB6Vd.js"), true ? [] : void 0, import.meta.url), "../../data/sections/cta.json": () => __vitePreload(() => import("./Cw1Z7ak_.js"), true ? [] : void 0, import.meta.url), "../../data/sections/features.json": () => __vitePreload(() => import("./D2hcrLpO.js"), true ? [] : void 0, import.meta.url), "../../data/sections/hero.json": () => __vitePreload(() => import("./AWBqkOMq.js"), true ? [] : void 0, import.meta.url) }), `../../data/sections/${name}.json`, 5);
          return { ...mod.default || mod, type: name };
        })
      );
    })), __temp = await __temp, __restore(), __temp);
    useHead({
      title: "Главная",
      meta: [
        { name: "description", content: "Современный статический сайт на Nuxt 3" }
      ]
    });
    return (_ctx, _cache) => {
      const _component_HeroSection = __nuxt_component_0$1;
      const _component_FeaturesSection = __nuxt_component_1;
      const _component_AboutSection = __nuxt_component_2;
      const _component_CtaSection = __nuxt_component_3;
      const _component_ContactSection = __nuxt_component_4;
      return openBlock(), createElementBlock("main", null, [
        unref(sections)?.[0]?.type === "hero" ? (openBlock(), createBlock(_component_HeroSection, normalizeProps(mergeProps({ key: 0 }, unref(sections)[0])), null, 16)) : createCommentVNode("", true),
        unref(sections)?.[1]?.type === "features" ? (openBlock(), createBlock(_component_FeaturesSection, normalizeProps(mergeProps({ key: 1 }, unref(sections)[1])), null, 16)) : createCommentVNode("", true),
        unref(sections)?.[2]?.type === "about" ? (openBlock(), createBlock(_component_AboutSection, normalizeProps(mergeProps({ key: 2 }, unref(sections)[2])), null, 16)) : createCommentVNode("", true),
        unref(sections)?.[3]?.type === "cta" ? (openBlock(), createBlock(_component_CtaSection, normalizeProps(mergeProps({ key: 3 }, unref(sections)[3])), null, 16)) : createCommentVNode("", true),
        unref(sections)?.[4]?.type === "contact" ? (openBlock(), createBlock(_component_ContactSection, normalizeProps(mergeProps({ key: 4 }, unref(sections)[4])), null, 16)) : createCommentVNode("", true)
      ]);
    };
  }
};
export {
  _sfc_main as default
};
