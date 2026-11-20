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
import react from '@vitejs/plugin-react-swc' // 1. Use SWC
import { visualizer } from 'rollup-plugin-visualizer'; // Optional: for bundle analysis

export default defineConfig({
  plugins: [
    react(),
    // visualizer({ open: true, gzipSize: true }) // Uncomment to see what's in your bundle
  ],
  build: {
    target: 'esnext', // Target modern browsers to reduce polyfill bloat
    sourcemap: false, // Set to false for production to reduce size
    rollupOptions: {
      output: {
        // 2. Manual Chunking Strategy
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('react-router')) return 'router-vendor';
            if (id.includes('axios') || id.includes('lodash')) return 'vendor-utils';
            return 'vendor'; // A catch-all for other dependencies
          }
        }
      }
    },
    // 3. (Optional) If you add the image optimizer plugin, configure it here
    // assetsInlineLimit: 4096, // Inline small assets to save HTTP requests
  },
  // 4. Optimize dependencies for dev server (optional but good practice)
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
})
