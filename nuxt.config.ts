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
      title: "Kazan No Bushi — XIVème édition",
      htmlAttrs: {
        lang: "fr",
      },
      meta: [
        {
          name: "description",
          content:
            "Stage, passage de grade et compétition de kendo — les 28 et 29 novembre 2026 à l'Artenium, Ceyrat.",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Kazan No Bushi — XIVème édition",
        },
        {
          property: "og:description",
          content:
            "Stage, passage de grade et compétition de kendo — les 28 et 29 novembre 2026 à l'Artenium, Ceyrat.",
        },
        { property: "og:url", content: "https://kazan-no-bushi.fr" },
        { property: "og:locale", content: "fr_FR" },
        { property: "og:site_name", content: "Kazan No Bushi" },
        {
          property: "og:image",
          content: "https://kazan-no-bushi.fr/fond-mila.jpeg",
        },
        { property: "og:image:width", content: "1960" },
        { property: "og:image:height", content: "1310" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Kazan No Bushi — XIVème édition",
        },
        {
          name: "twitter:description",
          content:
            "Stage, passage de grade et compétition de kendo — les 28 et 29 novembre 2026 à l'Artenium, Ceyrat.",
        },
        {
          name: "twitter:image",
          content: "https://kazan-no-bushi.fr/fond-mila.jpeg",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://kazan-no-bushi.fr" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Protest+Revolution&family=Yomogi&family=Zen+Kaku+Gothic+New:wght@400;500;700;900&display=swap",
        },
      ],
    },
  },
});
