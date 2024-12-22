import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../theme'
import { RouterProvider } from 'react-router-dom'
import { router } from '../app/Router'
import { Provider } from 'react-redux'
import { store } from '../app/store'

createRoot(document.getElementById('root')!).render(
   <ThemeProvider theme={theme}>
      <Provider store={store}>
         <RouterProvider router={router} />
      </Provider>
   </ThemeProvider>,
)
