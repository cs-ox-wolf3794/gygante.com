import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/investor-access/",
  build: {
    outDir: "../investor-access",
    emptyOutDir: true,
  },
  plugins: [react()],
});
