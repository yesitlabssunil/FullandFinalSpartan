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
    rollupOptions: {
      output: {
        manualChunks: {
          // Split React core into its own chunk
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Split Redux state management
          redux: ['@reduxjs/toolkit', 'react-redux'],
          // Split UI/Notification libraries
          ui: ['react-toastify', 'react-icons']
        }
      }
    }
  },
})