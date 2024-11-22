import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/Router'
import { AuthProvider } from './contexts/auth/AuthContext'

createRoot(document.getElementById('root')!).render(
   <ThemeProvider theme={theme}>
      <AuthProvider>
         <RouterProvider router={router} />
      </AuthProvider>
   </ThemeProvider>,
)
