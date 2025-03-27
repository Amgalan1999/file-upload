// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@nuxt/fonts", "@nuxt/eslint"],

  css: ["assets/scss/style.css"],

  fonts: {
    families: [{ name: "Montserrat", provider: "google" }],
  },

  build: {
    transpile: ["vuetify"],
  },

  runtimeConfig: {
    public: {
      space_key: process.env.SPACE_ACCESS,
      space_secret: process.env.SPACE_SECRET,
      space_endpoint: process.env.ENDPOINT,
      space_region: process.env.REGION,
      space_bucket_name: process.env.BUCKET_NAME,
    },
  },
});
