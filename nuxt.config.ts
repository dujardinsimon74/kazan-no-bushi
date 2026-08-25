import tailwindcss from "@tailwindcss/vite";
import Aura from "@primeuix/themes/aura";
import { definePreset } from "@primeuix/themes";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "@primevue/auto-import-resolver";

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "#fdf6ee",
      100: "#faead4",
      200: "#f6d6ab",
      300: "#f3c089",
      400: "#e8a45c",
      500: "#d98a3a",
      600: "#c07128",
      700: "#a8702c",
      800: "#7a4f20",
      900: "#513416",
      950: "#2c1c0c",
    },
  },
});

export default defineNuxtConfig({
  compatibilityDate: "2026-02-25",
  devtools: { enabled: true },
  routeRules: {
    "/": { prerender: true },
  },
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
      Components({
        resolvers: [PrimeVueResolver()],
      }),
    ],
  },
  modules: ["@primevue/nuxt-module"],
  primevue: {
    options: {
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: false,
        },
      },
    },
  },
  app: {
    head: {
      title: "Kazan No Bushi", // default fallback title
      htmlAttrs: {
        lang: "fr",
      },
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Yomogi&family=Zen+Kaku+Gothic+New:wght@400;500;700;900&display=swap",
        },
      ],
    },
  },
});
