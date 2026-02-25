import tailwindcss from "@tailwindcss/vite";
import Aura from "@primeuix/themes/aura";
import { definePreset } from "@primeuix/themes";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "@primevue/auto-import-resolver";

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "{indigo.50}",
      100: "{indigo.100}",
      200: "{indigo.200}",
      300: "{indigo.300}",
      400: "{indigo.400}",
      500: "{indigo.500}",
      600: "{indigo.600}",
      700: "{indigo.700}",
      800: "{indigo.800}",
      900: "{indigo.900}",
      950: "{indigo.950}",
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
});
