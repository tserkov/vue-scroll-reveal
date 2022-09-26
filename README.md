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
import { vScrollReveal } from 'vue-scroll-reveal';
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

import { vScrollReveal } from 'vue-scroll-reveal';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('scroll-reveal', vScrollReveal);
});
```

## License

While the code within this component (tserkov/vue-scroll-reveal) is [MIT-licensed](https://github.com/tserkov/vue-scroll-reveal/blob/master/LICENSE.md), ScrollReveal is [GPL3-licensed](https://github.com/scrollreveal/scrollreveal#license), and requires the purchase of a [Commercial License](https://scrollrevealjs.org/pricing/) if you want to use it in a closed-source project.

For an explanation of why this component is licensed differently, see [#15](https://github.com/tserkov/vue-scroll-reveal/issues/21#issuecomment-424193121).
