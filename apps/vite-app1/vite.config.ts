import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/vite1/',
    server: {
        port: 4001,
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
