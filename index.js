const sr = require('scrollreveal')();

function generateOptions(defaultOptions, bindingValue, bindingModifiers) {
  const options = Object.assign({}, defaultOptions, bindingValue);

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

const VueScrollReveal = {
  install(Vue, defaultOptions) {
    Vue.directive('scroll-reveal', {
      inserted: (el, binding) => {
        const options = generateOptions(defaultOptions, binding.value, binding.modifiers);

        sr.reveal(el, options);
      },
      update: (el, binding) => {
        if (binding.value != binding.oldValue) {
          const options = generateOptions(defaultOptions, binding.value, binding.modifiers);

          sr.reveal(el, options);
        }
      },
    });

    const $sr = {
      isSupported() {
        return sr.isSupported();
      },
      sync() {
        sr.sync();
      },
    };

    Object.defineProperty(Vue.prototype, '$sr', {
      get() {
        return $sr;
      },
    });
  },
};

export default VueScrollReveal;
