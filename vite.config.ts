import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/https://github.com/adrianar873/mi-web/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
