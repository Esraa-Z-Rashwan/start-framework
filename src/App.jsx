import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/Portfolio/Portfolio'
import NotFound from './Components/NotFound/NotFound'

const routers= createBrowserRouter ([{ path: '/', element: <Layout/> , children: [
  {index: true, element: <Home/>},
  {path: '/about', element: <About/>},
  {path: '/contact', element: <Contact/>},
  {path: '/portfolio', element: <Portfolio/>},
  {path: '*', element: <NotFound/>}
]}]);

function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
