/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      imports: 'react',
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
  },
});
