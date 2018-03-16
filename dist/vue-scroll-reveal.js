'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sr = require('scrollreveal')();

function generateOptions(defaultOptions, bindingValue, bindingModifiers) {
  var options = Object.assign({}, defaultOptions, bindingValue);

  if (bindingModifiers) {
    if (bindingModifiers.reset) {
      options.reset = true;
    }

    if (bindingModifiers.nomobile) {
      options.mobile = false;
    }
  }

  return options;
}

var VueScrollReveal = {
  install: function install(Vue, defaultOptions) {
    Vue.directive('scroll-reveal', {
      inserted: function inserted(el, binding) {
        var options = generateOptions(defaultOptions, binding.value, binding.modifiers);

        sr.reveal(el, options);
      },
      update: function update(el, binding) {
        if (binding.value != binding.oldValue) {
          var options = generateOptions(defaultOptions, binding.value, binding.modifiers);

          sr.reveal(el, options);
        }
      }
    });

    var $sr = {
      isSupported: function isSupported() {
        return sr.isSupported();
      },
      sync: function sync() {
        sr.sync();
      },
      reveal: function reveal(target, config, interval, sync) {
        var options = generateOptions(defaultOptions, config);

        sr.reveal(target, config, interval, sync);
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
