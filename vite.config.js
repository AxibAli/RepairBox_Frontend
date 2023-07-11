import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()

  ],
  // global api call
  define: {
    'process.env': {
      REACT_APP_BASE_URL:"http://13.48.193.17:81/api/v1"
    }
  },
  build: {
    chunkSizeWarningLimit: 1600,
  }
})
