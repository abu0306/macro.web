import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/vite2/',
    server: {
        host: true,
        port: 4002,
        fs: { allow: [path.resolve(__dirname, '../../')] }
    },
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@wisland/ui': path.resolve(__dirname, '../../packages/ui/src'),
            '@wisland/utils': path.resolve(__dirname, '../../packages/utils/src'),
            '@wisland/i18n': path.resolve(__dirname, '../../packages/i18n')
        },
    },
    optimizeDeps: {
        exclude: ['@wisland/ui', '@wisland/utils', '@wisland/i18n'],
    },
})
