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
            const isSmallScreen = window.innerWidth < 1460 || window.innerHeight < 700
            setIsResponsive(isSmallScreen)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
            {isResponsive ? (
                // Responsive Design - Below 1475x773
                <div className='home relative bg-gray-200 overflow-hidden min-h-screen flex flex-col items-center justify-center'>
                    <div className='text relative pt-8 px-6 text-center'>
                        <TypewriterHeader />
                        
                        {/* Social Links - Horizontal Row */}
                        <div className='flex flex-row gap-6 items-center justify-center pt-8'>
                            <button className='hover:scale-110 transition-transform' title='Github'>
                                <a href="https://github.com/harshdholakiya21" target='_blank'>
                                    <img src="image/github.svg" alt="github" className='w-12 rounded-2xl overflow-hidden'/> 
                                </a> 
                            </button>
                            <button className='hover:scale-110 transition-transform' title='LinkedIn'>
                                <a href="https://www.linkedin.com/in/harshdholakiya/" target='_blank'> 
                                    <img src="image/linkedln.svg" alt="linkedin" className='w-12'/> 
                                </a> 
                            </button>
                            <button className='hover:scale-110 transition-transform' title='Contact'>
                                <NavLink to={"/contact"}> 
                                    <img src="image/contact.svg" alt="contact" className='w-12'/> 
                                </NavLink> 
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                // Original Design - Above 1475x773
                <div className='home relative bg-gray-200 overflow-hidden max-h-screen'>
                    <div className='text absolute top-1/5'>
                        <TypewriterHeader />
                        
                        <div className='flex gap-20 pt-20 pl-20 items-center'>
                            <button className='hover:scale-110' title='Github'>
                                <a href="https://github.com/harshdholakiya21" target='_blank'>
                                    <img src="image/github.svg" alt="github" className='rounded-2xl overflow-hidden'/> 
                                </a> 
                            </button>
                            <button className='hover:scale-110' title='LinkedIn'>
                                <a href="https://www.linkedin.com/in/harshdholakiya/" target='_blank'> 
                                    <img src="image/linkedln.svg" alt="linkedin" /> 
                                </a> 
                            </button>
                            <button className='hover:scale-110' title='Contact'>
                                <NavLink to={"/contact"}> 
                                    <img src="image/contact.svg" alt="contact" /> 
                                </NavLink> 
                            </button>
                        </div>
                    </div>

                    <div className='bg-gradient-to-b from-black via-black to-gray-900 min-w-screen min-h-[calc(100vh+110px)] rotate-285 translate-x-[calc(27%)] relative'>
                        <img src="image/myphoto bgremove.png" alt="photo" className='w-1/3 absolute left-6/20 rotate-75 drop-shadow-[1px_1px_10px_#e5e7eb] filter' />
                    </div>
                </div>
            )}
        </>
    )
}

export default Home;
