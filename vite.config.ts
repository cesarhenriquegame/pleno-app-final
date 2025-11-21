import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carrega variáveis de ambiente (como a API_KEY)
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    define: {
      // Define process.env.API_KEY para estar disponível no código do navegador
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
  }
})