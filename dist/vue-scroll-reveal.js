(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('scrollreveal')) :
    typeof define === 'function' && define.amd ? define(['exports', 'scrollreveal'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["vue-scroll-reveal"] = {}, global.ScrollReveal));
})(this, (function (exports, ScrollReveal) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var ScrollReveal__default = /*#__PURE__*/_interopDefaultLegacy(ScrollReveal);

    function reveal(el, { value, modifiers }) {
        const options = value || {};
        if (modifiers) {
            if (modifiers.reset) {
                options.reset = true;
            }
            if (modifiers.nomobile) {
                options.mobile = false;
            }
            if (modifiers.nodesktop) {
                options.desktop = false;
            }
        }
        if (typeof options.class === 'string') {
            el.classList.add(options.class);
            delete options.class;
        }
        ScrollReveal__default["default"]().reveal(el, options);
    }
    const vScrollReveal = {
        mounted(el, binding) {
            reveal(el, binding);
        },
        updated(el, binding) {
            reveal(el, binding);
        },
        getSSRProps() {
            return {};
        }
    };

    exports.vScrollReveal = vScrollReveal;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
