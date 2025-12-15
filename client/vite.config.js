import { defineConfig } from 'vite'
import viteImagemin from "vite-plugin-imagemin";
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      mozjpeg: { quality: 80 },
      webp: { quality: 80 },
    }),
  ],
})
