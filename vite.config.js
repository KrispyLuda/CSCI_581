import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace <repository-name> with your GitHub repo name
export default defineConfig({
  base: '/CSCI_581/',  
  plugins: [react()],
})