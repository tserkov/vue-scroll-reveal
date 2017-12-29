# vue-scroll-reveal [![license](https://img.shields.io/github/license/tserkov/vue-scroll-reveal.svg)]()
A Vue directive to wrap [@jlmake](https://github.com/jlmakes)'s excellent [ScrollReveal](https://github.com/jlmakes/scrollreveal) library.

The directive exposes `reset` and `nomobile` as modifiers (ie. `v-scroll-reveal.reset.nomobile`), and all other options can be passed as a value (ie. `v-scroll-reveal={ delay: 250 }`).

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
```

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