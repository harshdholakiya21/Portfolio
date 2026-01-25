import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import TypewriterHeader from './typetext'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Home = () => {
    const [isResponsive, setIsResponsive] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            // Apply responsive design below 1475x773
            const isSmallScreen = window.innerWidth < 1475 || window.innerHeight < 773
            setIsResponsive(isSmallScreen)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
            <div className={`home relative bg-gray-200 overflow-hidden ${isResponsive ? 'max-h-auto min-h-screen' : 'max-h-screen'}`}>
                
                {/* Content Section - Responsive Positioning */}
                <div className={`text ${isResponsive ? 'relative' : 'absolute'} ${isResponsive ? 'pt-8 px-6 text-center' : 'top-1/5'}`}>
                    <TypewriterHeader />
                    
                    {/* Social Links - Responsive Layout */}
                    <div className={`flex ${isResponsive ? 'flex-col gap-4 items-center pt-8' : 'gap-20 pt-20 pl-20 items-center'}`}>
                        <button className='hover:scale-110 transition-transform' title='Github'>
                            <a href="https://github.com/harshdholakiya21" target='_blank'>
                                <img src="image/github.svg" alt="github" className={`rounded-2xl overflow-hidden ${isResponsive ? 'w-12' : 'w-16'}`}/> 
                            </a> 
                        </button>
                        <button className='hover:scale-110 transition-transform' title='LinkedIn'>
                            <a href="https://www.linkedin.com/in/harshdholakiya/" target='_blank'> 
                                <img src="image/linkedln.svg" alt="linkedin" className={isResponsive ? 'w-12' : 'w-16'}/> 
                            </a> 
                        </button>
                        <button className='hover:scale-110 transition-transform' title='Contact'>
                            <NavLink to={"/contact"}> 
                                <img src="image/contact.svg" alt="contact" className={isResponsive ? 'w-12' : 'w-16'}/> 
                            </NavLink> 
                        </button>
                    </div>
                </div>

                {/* Background Gradient Section - Responsive */}
                <div className={`bg-gradient-to-b from-black via-black to-gray-900 ${isResponsive ? 'min-h-screen' : 'min-w-screen min-h-[calc(100vh+110px)]'} ${isResponsive ? 'translate-x-0' : 'rotate-285 translate-x-[calc(27%)]'} relative`}>
                    <img 
                        src="image/myphoto bgremove.png" 
                        alt="photo" 
                        className={`absolute drop-shadow-[1px_1px_10px_#e5e7eb] filter ${
                            isResponsive 
                                ? 'w-1/2 left-1/4 rotate-0 top-1/4' 
                                : 'w-1/3 left-6/20 rotate-75'
                        }`} 
                    />
                </div>
            </div>
        </>
    )
}

export default Home;
