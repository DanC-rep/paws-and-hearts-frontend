import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../shared/components/RootLayout'
import { MainPage } from '../pages/MainPage/MainPage'
import { NotFoundPage } from '../pages/Errors/NotFoundPage'
import { LoginPage } from '../pages/Login/LoginPage'
import { ProfilePage } from '../pages/Profile/ProfilePage'
import { ProtectedRoute } from '../shared/components/ProtectedRoute'

export const router = createBrowserRouter([
   {
      path: '/',
      element: <RootLayout />,
      children: [
         {
            path: '',
            element: <MainPage />,
         },
         {
            path: 'login',
            element: <LoginPage />,
         },
         {
            path: 'favorite',
            element: <div>Избранное</div>,
         },
         {
            path: 'profile',
            element: (
               <ProtectedRoute roles={['volunteer', 'participant', 'admin']}>
                  <ProfilePage />
               </ProtectedRoute>
            ),
         },
         {
            path: 'volunteers',
            element: <div>Волонтеры</div>,
         },
         {
            path: 'help-pets',
            element: <div>Помощь животным</div>,
         },
      ],
      errorElement: <NotFoundPage />,
   },
])
