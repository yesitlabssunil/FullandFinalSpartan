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

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2015',
    // In Vite 8+, rollupOptions is automatically mapped to rolldownOptions
    rollupOptions: {
      output: {
        // advancedChunks replaces the old object-form manualChunks
        advancedChunks: {
          groups: [
            {
              name: 'vendor',
              test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
              priority: 20,
            },
            {
              name: 'redux',
              test: /[\\/]node_modules[\\/](@reduxjs\/toolkit|react-redux)[\\/]/,
              priority: 15,
            },
            {
              name: 'ui',
              test: /[\\/]node_modules[\\/](react-toastify|react-icons)[\\/]/,
              priority: 10,
            },
          ],
        },
      },
    },
  },
})