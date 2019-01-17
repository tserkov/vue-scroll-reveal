"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

const sr = require('scrollreveal').default();

function generateOptions(defaultOptions, bindingValue, bindingModifiers) {
  const options = Object.assign({}, defaultOptions, bindingValue);

  if (bindingModifiers) {
    if (bindingModifiers.reset) {
      options.reset = true;
    }

    if (bindingModifiers.nomobile) {
      options.mobile = false;
    }

    if (bindingModifiers.nodesktop) {
      options.desktop = false;
    }
  }

  return options;
}

const VueScrollReveal = {
  install(Vue, defaultOptions) {
    Vue.directive('scroll-reveal', {
      inserted: (el, binding) => {
        const options = generateOptions(defaultOptions, binding.value, binding.modifiers);

        if (typeof options.class === 'string') {
          el.classList.add(options.class);
          delete options.class;
        }

        sr.reveal(el, options);
      },
      update: (el, binding) => {
        if (binding.value != binding.oldValue) {
          const options = generateOptions(defaultOptions, binding.value, binding.modifiers);
          sr.reveal(el, options);
        }
      }
    });
    Object.defineProperty(Vue.prototype, '$sr', {
      get() {
        return Object.assign({}, sr, {
          reveal: new Proxy(sr.reveal, {
            apply: (target, ctx, args) => {
              const _args = _slicedToArray(args, 4),
                    el = _args[0],
                    config = _args[1],
                    interval = _args[2],
                    sync = _args[3];

              target.apply(ctx, [el, generateOptions(defaultOptions, config), interval, sync]);
            }
          })
        });
      }

    });
  }

};
var _default = VueScrollReveal;
exports.default = _default;
