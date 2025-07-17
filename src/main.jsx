import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home'
import CelebrationBackground from './components/celebrationPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "celeb",
    element: <CelebrationBackground/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)