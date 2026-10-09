import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-10-05", // "4.6.0": "2026-10-05T22:34:32.514Z"
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  components: [{ path: "~/components", pathPrefix: false }],
});
