// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2025-07-15',
//   devtools: { enabled: true }
// })

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2026-10-05", // "4.6.0": "2026-10-05T22:34:32.514Z"
  devtools: { enabled: true },
  modules: ["@nuxt/content"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
