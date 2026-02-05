// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: '2026-01-27',
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_URL,
    },
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
      appear: false
    },
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap&subset=cyrillic'
        }
      ],
      meta: [
        { charset: "utf-8" }
      ]
    } 
  }
  
})

