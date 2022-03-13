import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  server: {
    port: 8000 // default: 3000
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'Alfian An - Naufal Nuha',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hai, saya Nuha, seorang web development yang bekerja di Yogyakarata. Saya tinggal di Yogyakarta dan memiliki specialisasi membuat Aplikasi WEB / Halaman Admin sebuah company.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: "google-site-verification", content: "XA19svWIWZolsAs3dJF4_tuxK2ron_arNAtqgWdb9R4" },
      { name: "description", content: 'Hai, saya Nuha, seorang web development yang bekerja di Yogyakarata. Saya tinggal di Yogyakarta dan memiliki specialisasi membuat Aplikasi WEB / Halaman Admin sebuah company.'},
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/logo_2.png' },
      { rel: 'shortcut icon', type: 'image/png', sizes: '16x16', href: '/logo_2.png' },
      { rel: 'shortcut icon', type: 'image/png', sizes: '32x32', href: '/logo_2.png' },
      { rel: 'shortcut icon', type: 'image/png', sizes: '64x64', href: '/logo_2.png' },
      { rel: 'shortcut icon', type: 'image/png', sizes: '120x120', href: '/logo_2.png' },
      { rel: 'shortcut icon', type: 'image/png', sizes: '144x144', href: '/logo_2.png' },
      { rel: 'shortcut icon', type: 'image/png', sizes: '152x152', href: '/logo_2.png' },
      { rel: 'shortcut icon', type: 'image/png', sizes: '192x192', href: '/logo_2.png' },
      { rel: 'apple-touch-icon', href: '/logo_2.png' },
      { rel: 'mask-icon', href: '/logo_2.png' },
      { rel: 'ms-tile-image', href: '/logo_2.png' }
    ]
  },

  loading: { 
    color: '#6D4C41',
    height: '3px'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/css/main.css',
    'animate.css/animate.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/VeeValidate.js',
    '~/plugins/Axios.js',
    { src: '~plugins/VueCarousel3d.js', ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    ['@nuxtjs/vuetify', {treeShake: true}],
    // Google Analytics
    '@nuxtjs/google-analytics'
  ],

  googleAnalytics: {
    // Options
    id: 'G-ZBZ6KQVS2P'
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: 'G-ZBZ6KQVS2P'
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname: 'https://portofolionuha.com/',
    path: 'sitemap.xml',
    gzip: true,
    generate: false,
    exclude: [
      '/about/**',
      '/article/**',
      '/projects/**',
    ],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: false,
    manifest: {
      name: 'Wedding Web',
      short_name: 'Wedding Web',
      lang: 'en',
      useWebmanifestExtension: false,
      orientation: 'portrait',
      display: 'standalone',
      background_color: '#6D4C41',
      theme_color: '#6D4C41',
      start_url: '/'
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    extend(config, { isClient }) {
      // Extend only webpack config for client-bundle
      if (isClient) {
        config.devtool = 'source-map'
      }
      // const vueLoader = config.module.rules.find(
      //   rule => rule.loader === "vue-loader"
      // );
      // vueLoader.options.transformToRequire = {
      //   img: "src",
      //   image: "xlink:href",
      //   "b-img": "src",
      //   "b-img-lazy": ["src", "blank-src"],
      //   "b-card": "img-src",
      //   "b-card-img": "img-src",
      //   "b-carousel-slide": "img-src",
      //   "b-embed": "src"
      // };
    }
  },

  router: {
    scrollBehavior: async function(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }

      const findEl = async (hash, x = 0) => {
        return (
          document.querySelector(hash) ||
          new Promise(resolve => {
            if (x > 50) {
              return resolve(document.querySelector("#app"));
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1));
            }, 100);
          })
        );
      };

      if (to.hash) {
        let el = await findEl(to.hash);
        if ("scrollBehavior" in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
        } else {
          // return window.scrollTo(0, el.offsetTop, "smooth");
          return window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      }

      return { x: 0, y: 0 };
    }
  },
}
