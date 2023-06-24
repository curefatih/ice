import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "8935",
  build: {
    chunkSizeWarningLimit: 4000,
    emptyOutDir: true,
    outDir: "../ice/routes/ui/",
  },
  plugins: [react()],
});
