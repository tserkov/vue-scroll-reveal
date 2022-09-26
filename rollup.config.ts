import type { RollupOptions } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

const config: RollupOptions = {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/vue-scroll-reveal.esm.js',
      format: 'esm',
      exports: 'named',
      globals: {
        scrollreveal: 'ScrollReveal',
      },
    },
    {
      file: 'dist/vue-scroll-reveal.js',
      format: 'umd',
      name: 'vue-scroll-reveal',
      globals: {
        scrollreveal: 'ScrollReveal',
      },
    },
  ],
  plugins: [
    typescript(),
    commonjs(),
  ],
  external: ['scrollreveal'],
};

export default config;
