import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Allow reading optional host override for HMR when running via Tauri
const host = (process.env as Record<string, string | undefined>)[
  "TAURI_DEV_HOST"
];

// https://vite.dev/config/
export default defineConfig(async () => ({
  plugins: [react()],
  // Allow serving under a path prefix when built for the web
  // e.g. set VITE_BASE="/tauri/" to be served at http://host/tauri/
  base: process.env.VITE_BASE ?? "/",

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent Vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
        protocol: "ws",
        host,
        port: 1421,
      }
      : undefined,
    watch: {
      // 3. tell Vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
}));
