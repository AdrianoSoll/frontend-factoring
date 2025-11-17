import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // IMPORTANTE: Esta línea le dice a Vite que use el nombre del repositorio como ruta base.
  base: '/frontend-factoring/',
})
