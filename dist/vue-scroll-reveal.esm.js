import ScrollReveal from 'scrollreveal';

function reveal(el, value, modifiers) {
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
    ScrollReveal().reveal(el, options);
}
const vScrollReveal = {
    mounted(el, { value, modifiers }) {
        reveal(el, value, modifiers);
    },
    updated(el, { value, modifiers }) {
        reveal(el, value, modifiers);
    },
    getSSRProps() {
        return {};
    }
};
function createScrollRevealDirective(defaultOptions) {
    return {
        mounted(el, { value, modifiers }) {
            reveal(el, Object.assign({}, defaultOptions, value), modifiers);
        },
        updated(el, { value, modifiers }) {
            reveal(el, Object.assign({}, defaultOptions, value), modifiers);
        },
        getSSRProps() {
            return {};
        }
    };
}

export { createScrollRevealDirective, vScrollReveal };
