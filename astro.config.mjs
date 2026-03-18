import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // L'URL de ton profil
  site: 'https://2026proton23000.github.io', 
  // Le nom de ton dépôt avec les slashes
  base: '/test_design', 
  trailingSlash: 'always', // Aide GitHub Pages à trouver les dossiers
  integrations: [],
  vite: {
    plugins: [tailwindcss()],
  },
});
