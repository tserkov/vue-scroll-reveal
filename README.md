# vue-scroll-reveal [![license](https://img.shields.io/github/license/tserkov/vue-scroll-reveal.svg)]()
A Vue directive to wrap [@jlmake](https://github.com/jlmakes)'s excellent [ScrollReveal](https://github.com/jlmakes/scrollreveal) library.

## Install

``` bash
# npm
npm install vue-scroll-reveal
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
  <section>
    <h1>Scroll down!</h1>
  </section>

  <section v-scroll-reveal.reset>
    <h1>Tada!</h1>
  </section>
</template>

<style>
  section {
    height: 100vh;
  }
</style>
```
