import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../components/RootLayout";

export const router = createBrowserRouter([
   {
      path: '/',
      element: <RootLayout />,
      children: [
         {
            path: '',
            element: <div>Главная</div>,
         },
         {
            path: 'login',
            element: <div>Вход</div>,
         },
         {
            path: 'favorite',
            element: <div>Избранное</div>,
         },
         {
            path: 'profile',
            element: <div>Профиль</div>,
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
   },
])