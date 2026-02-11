import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pagesのリポジトリ名に合わせてベースパスを指定
  base: '/worlddashboard/',
  server: {
    port: 5173,
  },
});
