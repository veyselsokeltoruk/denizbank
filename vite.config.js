import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
],
  assetsInclude: ['**/*.gltf', '**/*.png', '**/*.jpg'],
  build: {
    rollupOptions: {
      output: {
        inlineDynamicImports: false,
      },
    },
    sourcemap: true,
  },
})
