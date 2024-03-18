import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme';
import Provider from './context/Provider';
import Header from './components/Header';
import ClientFormPage from './pages/ClientFormPage';
import ClientsPage from './pages/ClientsPage';
import NotFoundPage from './pages/NotFoundPage';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ClientsPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/clients',
    element: <ClientsPage />,
  },
  {
    path: 'clients/create',
    element: <ClientFormPage page='create' />,
  },
  {
    path: 'clients/edit/:id',
    element: <ClientFormPage page='edit' />,
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider>
        <Header />
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
