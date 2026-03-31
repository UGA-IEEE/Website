import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative asset paths keep the production build portable for GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
