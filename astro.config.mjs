// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://anisbouchema.github.io",
  base: "/Anis-Bouchema-Website-Official",
  vite: {
    plugins: [tailwindcss()],
  },
});
