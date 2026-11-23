// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     target: 'es2015',
//   },
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // ✅ CHANGE THIS
    cssCodeSplit: true,
  },
  // ========== SHIVM NEW CHANGES START ==========
  // Add cache headers for static assets to improve performance.
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
  // ========== SHIVM NEW CHANGES END ==========
})
