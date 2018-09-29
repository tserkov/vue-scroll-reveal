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
      },
    });

    const $sr = {
      isSupported() {
        return sr.isSupported();
      },
      sync() {
        sr.sync();
      },
      reveal(target, config, interval, sync) {
        const options = generateOptions(defaultOptions, config);

        sr.reveal(target, config, interval, sync);
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
