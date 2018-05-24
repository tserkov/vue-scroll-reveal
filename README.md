# vue-scroll-reveal [![license](https://img.shields.io/github/license/tserkov/vue-scroll-reveal.svg)]()
A Vue directive to wrap [@jlmake](https://github.com/jlmakes)'s excellent [ScrollReveal](https://github.com/jlmakes/scrollreveal) library.

The directive exposes `reset` and `nomobile` as modifiers (ie. `v-scroll-reveal.reset.nomobile`).  
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

```javascript
// In main.js
import VueScrollReveal from 'vue-scroll-reveal';

Vue.use(VueScrollReveal);

// You can also pass in default options
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 800,
  scale: 1,
  distance: '10px',
  mobile: false
});
```
Please note that any options from the [ScrollReveal library](https://github.com/jlmakes/scrollreveal) can be passed in here.
```html
<!-- In a component -->
<template>
  <main>

    <section>
      <h1>Scroll down!</h1>
    </section>

    <section v-scroll-reveal.reset>
      <h1>Tada!</h1>
    </section>

    <!-- See below how options can be passed on a per-element basis -->
    <section v-scroll-reveal.reset={ delay: 250 }>
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

As of 1.0.4, the `isSupported()` and `sync()` are now exposed via `Vue.$sr` or `this.$sr`.

As of 1.0.7, the `reveal(target, config, interval, sync)` is exposed via `Vue.$sr` or `this.$sr`, though using the directive
is preferred in order to keep with Vue principles.

## Nuxt

If using as a plugin with [Nuxt](https://github.com/nuxt/nuxt.js) be sure to disable server side rendering in `nuxt.config.js`.

```javascript
module.exports = {
  plugins: [
    { src: '~/plugins/vue-scroll-reveal', ssr: false }
  ],
}
```
