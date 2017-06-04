const sr = require('scrollreveal')();

const VueScrollReveal = {
  install(Vue) {
    Vue.directive('scroll-reveal', {
      inserted: (el, binding) => {
        const options = binding.arg || {};

        if (binding.modifiers) {
          if (binding.modifiers.reset) {
            options.reset = true;
          }

          if (binding.modifiers.nomobile) {
            options.mobile = false;
          }
        }

        sr.reveal(el, options);
      },
    });
  },
};

export default VueScrollReveal;
