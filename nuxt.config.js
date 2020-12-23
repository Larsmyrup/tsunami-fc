export default {
  target: 'static',
  head: {
    title: 'tsunami-fc',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
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
    name: 'tsuyarn -fade',
    mode: 'out-in',
  },
}
