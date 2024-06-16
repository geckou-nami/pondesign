// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr     : false,
  devtools: { enabled: true },
  app     : {
    head: {
      charset: 'utf-8',
      title  : '特訓6_pondesign',
      meta   : [
        { name: 'theme-color', content: '#391e88' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { property: 'og:image', content: '/ogp.png' },
        { property: 'og:type', content: 'article' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        {
          rel : "stylesheet",
          href:"https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        }
      ],
    },
  },
  css: [
    'modern-css-reset/dist/reset.min.css',
    '~/assets/scss/base.scss',
  ],
  components: {
    global: true,
    dirs  : ['~/components'],
  },
})
