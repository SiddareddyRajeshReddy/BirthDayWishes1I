import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import CelebrationBackground from './components/celebrationPage'
function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "celeb",
      element: <CelebrationBackground/>
    }
  ])
  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
