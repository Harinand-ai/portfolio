import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/harinand-ai/portfolio',   // ⚠️ replace with your repo name
})
