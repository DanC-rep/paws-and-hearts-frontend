import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { theme } from './theme'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/Router'

createRoot(document.getElementById('root')!).render(
   <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
   </ThemeProvider>,
)
