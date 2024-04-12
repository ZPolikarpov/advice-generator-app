import { defineConfig } from 'vite'
import htmlPurge from 'vite-plugin-purgecss';
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    htmlPurge([htmlPurge()]),
  ],
})
