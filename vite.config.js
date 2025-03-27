import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
],
  base: '/ir/2023/2023TR/',
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
