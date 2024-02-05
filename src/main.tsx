import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'
import { Home } from './layout/home.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: 'home',
    element: <Home />
  },
  {
    path: 'company',
    element: <Home />
  },
  {
    path: 'resources',
    element: <Home />
  },
  {
    path: 'about',
    element: <Home />
  },
  {
    path: 'contact',
    element: <Home />
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
