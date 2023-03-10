import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-vite-pwa/",
  server: {
    port: 8080,
    hot: true,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      // workbox: {
      //   globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      // }
    }),
  ],
});
