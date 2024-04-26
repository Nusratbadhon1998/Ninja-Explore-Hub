import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AuthProvider from './providers/AuthProvider.jsx'
import { HelmetProvider } from "react-helmet-async";

// ..
AOS.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <HelmetProvider>
      <RouterProvider router={router}></RouterProvider>
    </HelmetProvider>
  </AuthProvider>
  </React.StrictMode>,
)
