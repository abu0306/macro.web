import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/vite2/',
    server: {
        host: true,
        port: 4002,
    },
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        },
    },
    optimizeDeps: {
        include: ['@wisland/ui', '@wisland/utils'],
    },
})
