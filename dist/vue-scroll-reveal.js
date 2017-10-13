'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sr = require('scrollreveal')();

var VueScrollReveal = {
  install: function install(Vue) {
    // Add an instance method so we can fire from function
    Vue.prototype.$reveal = function (el, options, int) {
      return sr.reveal(el, options, int)
    }
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

        // Added values so we can set some Scroll Reveal options via the directive
        if (binding.value) {
          // Where should the component originate from
          if (binding.value.origin) {
            options.origin = binding.value.origin
          }

          // How far should it travel
          if (binding.value.distance) {
            options.distance = binding.value.distance
          }

          // What should the duration be
          if (binding.value.duration) {
            options.duration = binding.value.duration
          }

          // Starting opacity
          if (binding.value.opacity) {
            options.opacity = binding.value.opacity
          }

          // Starting scale
          if (binding.value.scale) {
            options.scale = binding.value.scale
          }
        }

        sr.reveal(el, options);
      }
    });
  }
};

exports.default = VueScrollReveal;
