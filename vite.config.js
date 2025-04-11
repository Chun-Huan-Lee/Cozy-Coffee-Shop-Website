import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: "https://chun-huan-lee.github.io/Cozy-Coffee-Shop-Website/",
  plugins: [react()],
})
