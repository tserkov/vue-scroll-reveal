# vue-scroll-reveal [![license](https://img.shields.io/github/license/tserkov/vue-scroll-reveal.svg)]()
A Vue directive to wrap [@jlmakes](https://github.com/jlmakes)' excellent [ScrollReveal](https://github.com/scrollreveal/scrollreveal) library.

The directive exposes `reset`, `nodesktop`, and `nomobile` as modifiers (ie. `v-scroll-reveal.reset.nomobile`).
All other options can be passed to `Vue.use` or to individual elements as a value (ie. `v-scroll-reveal={ delay: 250 }`).

## Install

``` bash
# npm
npm install --save vue-scroll-reveal
```

``` bash
# yarn
yarn add vue-scroll-reveal
```

## Use
Remember! Any of the [ScrollReveal options](https://scrollrevealjs.org/api/defaults.html) can be used!

```javascript
// In main.js
import VueScrollReveal from 'vue-scroll-reveal';

// Using ScrollReveal's default configuration
Vue.use(VueScrollReveal);

// OR specifying custom default options for all uses of the directive
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 800,
  scale: 1,
  distance: '10px',
  mobile: false
});
```

```html
<!-- In a component -->
<template>
  <main>

    <section>
      <h1>Scroll down!</h1>
    </section>

    <!-- This section will reveal itself each time it's scrolled into view -->
    <section v-scroll-reveal.reset>
      <h1>Tada!</h1>
    </section>

    <!-- Element-specific configuration options can be passed like this -->
    <section v-scroll-reveal.reset="{ delay: 250 }">
      <h1>Slightly late tada!</h1>
    </section>

  </main>
</template>

<style>
  section {
    height: 100vh;
  }
</style>
```

## Methods

As of 1.0.4, the `isSupported()` and `sync()` methods are exposed via `Vue.$sr` or `this.$sr`.

As of 1.0.7, the `reveal(target, config, interval, sync)` is exposed via `Vue.$sr` or `this.$sr`, though using the directive
is preferred in order to keep with Vue principles.

## Nuxt

If using as a plugin with [Nuxt](https://github.com/nuxt/nuxt.js), make sure to disable server-side rendering in `nuxt.config.js`.

```javascript
module.exports = {
  plugins: [
    { src: '~/plugins/vue-scroll-reveal', ssr: false }
  ],
}
```

## License

While the code within this component (tserkov/vue-scroll-reveal) is [MIT-licensed](https://github.com/tserkov/vue-scroll-reveal/blob/master/LICENSE.md), ScrollReveal is [GPL3-licensed](https://github.com/scrollreveal/scrollreveal#license), and requires the purchase of a [Commercial License](https://scrollrevealjs.org/pricing/) if you want to use it in a closed-source project.

For an explanation of why this component is licensed differently, see [#15](https://github.com/tserkov/vue-scroll-reveal/issues/21#issuecomment-424193121).
