import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import './global.css';
import { HanaSpoust } from './pages/HanaSpoust';
import { AlzbetaKacir } from './pages/AlzbetaKacir';
import { ErrorPage } from './pages/ErrorPage';
import { App } from './App.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: 'alzbetakacir',
        element: <AlzbetaKacir />,
      },
      {
        path: 'hanaspoust',
        element: <HanaSpoust />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
