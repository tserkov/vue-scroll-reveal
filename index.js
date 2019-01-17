import ScrollReveal from 'scrollreveal'

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

        ScrollReveal().reveal(el, options);
      },
      update: (el, binding) => {
        if (binding.value != binding.oldValue) {
          const options = generateOptions(defaultOptions, binding.value, binding.modifiers);

          ScrollReveal().reveal(el, options);
        }
      },
    });

    Object.defineProperty(Vue.prototype, '$sr', {
      get() {
        const instance = ScrollReveal()
        return Object.assign({}, instance, {
          reveal: new Proxy(instance.reveal, {
            apply: (target, ctx, args) => {
              const [el, config, interval, sync] = args
              target.apply(ctx, [el, generateOptions(defaultOptions, config), interval, sync])
            }
          })
        })
      },
    });
  },
};

export default VueScrollReveal;
