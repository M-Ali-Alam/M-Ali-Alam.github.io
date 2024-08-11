import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/m-ali-alam.github.io/",
  plugins: [react()],
});
