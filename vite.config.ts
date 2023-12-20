import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';

// Configuração padrão do Vite
export default defineConfig({
  plugins: [react(), viteCommonjs()],
});