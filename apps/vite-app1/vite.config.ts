import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/vite1/',
    server: {
        host: true,
        port: 4001,
        strictPort: true,
        hmr: {
            clientPort: 80,
            path: '/vite1/@vite/client',
        },
    },
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@wisland/ui': path.resolve(__dirname, '../../packages/ui/src'),
            '@wisland/utils': path.resolve(__dirname, '../../packages/utils/src'),
        },
    },
    optimizeDeps: {
        include: ['@wisland/ui', '@wisland/utils'],
    },
})
