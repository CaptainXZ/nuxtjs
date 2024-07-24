export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: "static",

  head: {
    title: "Landing Page",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  //   server: {
  //     host: "0.0.0.0", // Listen on all network interfaces
  //     port: 3000, // Default port
  //   },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["vuetify/dist/vuetify.min.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/vuetify"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  i18n: {
    locales: [
      { code: "en", name: "English" },
      { code: "fr", name: "French" },
      // Add other languages here
    ],
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: {
          welcome: "Welcome to My Portfolio",
          projects: "Projects",
          posSystem: "POS System",
        },
        fr: {
          welcome: "Bienvenue sur mon portfolio",
          projects: "Projets",
          posSystem: "Système POS",
        },
        // Add other languages here
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
