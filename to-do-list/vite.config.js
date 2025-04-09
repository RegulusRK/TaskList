import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/projetos-1/to-do-list/',
  plugins: [react()],
})