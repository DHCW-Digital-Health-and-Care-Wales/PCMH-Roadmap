import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project site is served from /PCMH-Roadmap/ so assets resolve.
// See docs/BUILD_BRIEF.md Section 10.
export default defineConfig({
  base: '/PCMH-Roadmap/',
  plugins: [react()],
});
