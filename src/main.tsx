import { ThemeProvider } from "@/components/darkmode/theme-provider.tsx"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from "./context/AuthContext.tsx"
import { Toaster } from "./components/ui/toaster.tsx"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
        <Toaster />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
)