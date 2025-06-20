import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set the base path for GitHub Pages.
  // If your repository is named <YOUR_USERNAME>.github.io, use '/'.
  // If repository is e.g. 'my-portfolio' and served from <YOUR_USERNAME>.github.io/my-portfolio/, use '/my-portfolio/'.
  base: '/', 
  server: {
    // Optional: Set a default port
    // port: 3000, 
    // Optional: Open browser on start
    // open: true, 
  },
  build: {
    outDir: 'dist', // Default is 'dist', making it explicit for clarity
    // Optional: Configure build options
    // sourcemap: true,
  }
});