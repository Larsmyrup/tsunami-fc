export default {
  target: 'static',
  head: {
    title: 'Tsunami FC',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/tsucover.jpg',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '*',
        component: resolve(__dirname, 'pages/404.vue'),
      })
    },
  },
  css: [],
  plugins: [],
  styleResources: {
    scss: [
      '~/assets/base.scss',
    ],
  },
  build: {
    loaders: {
      scss: { sourceMap: false },
    },
  },
  components: true,
  modules: [
    '@nuxtjs/style-resources',
  ],
  pageTransition: {
    name: 'tsu-fade',
    mode: 'out-in',
  },
}
