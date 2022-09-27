# vue-scroll-reveal [![license](https://img.shields.io/github/license/tserkov/vue-scroll-reveal.svg)]()
A Vue 3 directive to wrap [@jlmakes](https://github.com/jlmakes)' excellent [ScrollReveal](https://github.com/scrollreveal/scrollreveal) library.

The directive exposes `reset`, `nodesktop`, and `nomobile` as modifiers (ie. `v-scroll-reveal.reset.nomobile`).

## Install

ScrollReveal must be installed alongside this directive, since it is a peer dependency.

``` bash
# npm
npm install --save vue-scroll-reveal@2 scrollreveal
```

``` bash
# yarn
yarn add vue-scroll-reveal@2 scrollreveal
```

## Use
Any of the [ScrollReveal options](https://scrollrevealjs.org/api/reveal.html) can be passed.


```vue
<script setup>
// if using default options
import { vScrollReveal } from 'vue-scroll-reveal';

// OR if using custom default options
import { createScrollRevealDirective } from 'vue-scroll-reveal'; 
const vScrollReveal = createScrollRevealDirective({
    delay: 1000,
    duration: 150,
});
</script>

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
    <section v-scroll-reveal.reset="{ delay: 1500 }">
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

As of vue-scroll-reveal@2.0.0, ScrollReveal() methods are no longer exposed. If you wish to use
any, import and use them directly, like so:

```javascript
import ScrollReveal from 'scrollreveal';

ScrollReveal.isSupported(); // for example
```

## Nuxt 3

Vue directives are [registered as a plugin](https://v3.nuxtjs.org/guide/directory-structure/plugins#vue-directives)
by creating the following file (the filename is very important):
```typescript
// plugins/scrollReveal.client.ts

import { vScrollReveal } from 'vue-scroll-reveal'; // if using default options
import { createScrollRevealDirective } from 'vue-scroll-reveal'; // OR if using custom default options

export default defineNuxtPlugin((nuxtApp) => {
  // if using default options
  nuxtApp.vueApp.directive('scroll-reveal', vScrollReveal);

  // OR if using custom default options
  nuxtApp.vueApp.directive('scroll-reveal', createScrollRevealDirective({
    delay: 1000,
    duration: 150,
    reset: true,
  }));
});
```

## Changelog

v2.1.0: Add `createScrollRevealDirective` so default options can be applied. [(#40)](https://github.com/tserkov/vue-scroll-reveal/issues/40#issuecomment-1258741430)

v2.0.0: Refactor in Typescript+Rollup for use in Vue 3 (& Nuxt 3).

## License

While the code within this component (tserkov/vue-scroll-reveal) is [MIT-licensed](https://github.com/tserkov/vue-scroll-reveal/blob/master/LICENSE.md), ScrollReveal is [GPL3-licensed](https://github.com/scrollreveal/scrollreveal#license), and requires the purchase of a [Commercial License](https://scrollrevealjs.org/pricing/) if you want to use it in a closed-source project.

For an explanation of why this component is licensed differently, see [#15](https://github.com/tserkov/vue-scroll-reveal/issues/21#issuecomment-424193121).
