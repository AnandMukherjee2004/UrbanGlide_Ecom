import { defineConfig } from "vite";
import vitePluginRequire from "vite-plugin-require";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // other configurations...
  optimizeDeps: {
    include: ["stripe"], // Include CommonJS modules used by Strapi
  },
  plugins: [vitePluginRequire.default(), react()],
});
