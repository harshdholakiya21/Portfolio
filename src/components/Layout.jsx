import React, { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import MainContent from './MainContent'

const Layout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar isMobile={isMobile} />
      <div className='flex-1'>
        {isMobile ? <MainContent isMobile={isMobile} /> : <Outlet />}
      </div>
    </div>
  )
}

export default Layout
