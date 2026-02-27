import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Welcomepage from './components/Welcomepage'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Layout from './components/Layout'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcomepage />
  },
  {
    element: <Layout />,
    children: [
      { path: '/Home', element: <Home /> },
      { path: '/AboutMe', element: <AboutMe /> },
      { path: '/Skills', element: <Skills /> },
      { path: '/Projects', element: <Projects /> },
      { path: '/Contact', element: <Contact /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
