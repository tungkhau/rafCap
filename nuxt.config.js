export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Rafter Capital | 椽盛資本有限公司',
    htmlAttrs: {
      lang: 'zh-Hant-HK'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '椽盛資本有限公司, Rafter Capital Limited is a Hong Kong Securities and Futures Commission’s licensed financial institution (License No. BRG363) specializing in asset management and investment advisory.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#007bff'},
      { name: 'apple-mobile-web-app-status-bar-style', content: '#007bff'},     
      { name: 'og:title', content: '椽盛資本有限公司'},
      { name: 'og:description', content: '椽盛資本有限公司, Rafter Capital Limited is a Hong Kong Securities and Futures Commission’s licensed financial institution (License No. BRG363) specializing in asset management and investment advisory.'},
      { name: 'og:image', content: 'https://racapm.com/favicon.png'},
      { name: 'og:url', content: 'https://racapm.com'},  
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    script: ["https://maps.googleapis.com/maps/api/js?key=AIzaSyBSSoRttYvXYkzCQtKpzVhO4ibD8lWmHWY"]
  },
  server: {
    port: '80'
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './static/css/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/index'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      'Noto Sans HK': [100, 400, 700],
      'Noto Sans SC': [100, 400, 700],
      'Noto Serif TC': [200, 400, 700],
      'Noto Serif SC': [200, 400, 700],
      'Maven Pro': [400, 700]
    },
  },  

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: [
      { code: 'zh', iso: 'zh-Hant-HK'},
      { code: 'cn', iso: 'zh-Hans-CN'},
      { code: 'en', iso: 'en'},
    ],
    defaultLocale: 'zh-Hant-HK',
    detectBrowserLanguage: {
      cookieKey: '_i18n_redirected',
      useCookie: true,
      alwaysRedirect: true,
      redirectOn: 'root',  // recommended
    }    
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.resolve.alias['node-fetch-native'] = require.resolve('node-fetch')
    }    
  },
  serverMiddleware: [
    { path: "/api/alerts", handler: "~/api/alerts.js" },
    { path: "/api/news", handler: "~/api/news.js" },
    { path: "/api/mail", handler: "~/api/mail.js" },
  ] 

}
