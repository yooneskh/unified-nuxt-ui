import { pathRelativeToBase } from './app/utils/path-relative';


export default defineNuxtConfig({

  compatibilityDate: 'latest',
  devtools: { enabled: false },

  experimental: {
    typedPages: true,
  },

  modules: [
    '@vueuse/nuxt',
    'nuxt-radash',
    '@nuxt/ui',
  ],

  css: [
    pathRelativeToBase(import.meta.url, './app/assets/css/main.css'),
  ],

  radash: {
    prefix: 'rad',
  },

  extends: [
    './layers/unified-toast',
    './layers/unified-dialog',
    './layers/unified-form',
    './layers/unified-network',
  ],

});
