import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use a relative base so built asset URLs resolve no matter where Pages serves
// the site. While the repo is private, GitHub Pages access control serves it
// from the root of a randomised subdomain (e.g. <id>.pages.github.io/), not
// from /PCMH-Roadmap/. A relative base also keeps working if the site later
// becomes a public project page at <org>.github.io/PCMH-Roadmap/. Safe because
// the app is a single page with no client-side routing.
// (Supersedes the absolute base assumed in docs/BUILD_BRIEF.md Section 10.)
export default defineConfig({
  base: './',
  plugins: [react()],
});
