'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sr = require('scrollreveal')();

var VueScrollReveal = {
  install: function install(Vue) {
    Vue.directive('scroll-reveal', {
      inserted: function inserted(el, binding) {
        var options = binding.value || {};

        if (binding.modifiers) {
          if (binding.modifiers.reset) {
            options.reset = true;
          }

          if (binding.modifiers.nomobile) {
            options.mobile = false;
          }
        }

        sr.reveal(el, options);
      }
    });

    var $sr = {
      isSupported: function isSupported() {
        return sr.isSupported();
      },
      sync: function sync() {
        sr.sync();
      }
    };

    Object.defineProperty(Vue.prototype, '$sr', {
      get: function get() {
        return $sr;
      }
    });
  }
};

exports.default = VueScrollReveal;
