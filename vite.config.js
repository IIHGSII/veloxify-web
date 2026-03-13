import { defineConfig } from 'vite'

export default defineConfig({
    // Vite config options
    base: './', // Ensures assets are linked correctly even in subfolders
    build: {
        outDir: 'dist',
    }
})
