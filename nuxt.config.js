import { pathRelativeToBase } from './app/utils/path-relative';


export default defineNuxtConfig({

  compatibilityDate: 'latest',
  devtools: { enabled: false },

  modules: [
    '@nuxt/ui',
  ],

  css: [
    pathRelativeToBase('./app/assets/css/main.css', import.meta.url),
  ],

});
