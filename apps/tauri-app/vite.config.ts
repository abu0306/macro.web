import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const publicBase = process.env.VITE_PUBLIC_BASE || "/";

export default defineConfig({
    base: publicBase,
    plugins: [react() as any],
    server: {
        host: true,
        port: 1420,
        strictPort: true,
    },
    build: {
        outDir: "dist",
    },
});
