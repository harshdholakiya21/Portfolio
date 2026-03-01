import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Navbar = ({ isMobile }) => {
    const isCondition = window.innerWidth < 1400 || window.innerHeight < 650
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')
    const location = useLocation()

    useEffect(() => {
        if (!isMobile) return

        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -30% 0px',
            threshold: 0
        }

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)
        const sections = ['home', 'about', 'skills', 'projects', 'contact']

        sections.forEach(id => {
            const element = document.getElementById(id)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [isMobile])

    const navItems = [
        { name: 'Home', path: '/Home', id: 'home' },
        { name: 'About', path: '/AboutMe', id: 'about' },
        { name: 'Skills', path: '/Skills', id: 'skills' },
        { name: 'Projects', path: '/Projects', id: 'projects' },
        { name: 'Contact', path: '/Contact', id: 'contact' }
    ]

    const getLinkClass = (isActive) => {
        const baseClass = "transition-all duration-300 px-3 py-1 rounded-xl text-[17px]"
        const activeClass = "font-bold bg-black text-white"
        const inactiveClass = "hover:text-black hover:bg-gray-100"
        return `${baseClass} ${isActive ? activeClass : inactiveClass}`
    }

    const getMobileLinkClass = (id) => {
        const baseClass = "block px-4 py-3 rounded-xl transition-all"
        const activeClass = "bg-black text-white font-bold"
        const inactiveClass = "hover:bg-black/5"
        return `${baseClass} ${activeSection === id ? activeClass : inactiveClass}`
    }

    return (
        <div className="fixed w-full z-[9999]">
            <nav className={`transition-all duration-500 ease-in-out w-full bg-white/90 backdrop-blur-md border-b border-gray-200 px-4 py-1.5 lg:px-7 lg:py-2`}>
                <div className="flex items-center justify-between px-6 max-w-[1400px] mx-auto relative">

                    <div className="flex items-center pr-1 transition-all duration-500 border-black border">
                        <div className="flex items-center space-x-2">
                            <img src="/image/favicon.ico" alt="Logo" width="30" height="24" className="inline-block" />
                            <span className="font-bold text-gray-900 text-lg">
                                Portfolio
                            </span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex">
                        <ul className="flex items-center gap-6 text-[17px] text-gray-800 font-medium">
                            {navItems.map(item => (
                                <li key={item.id}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) => getLinkClass(isActive)}
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 transition-colors duration-300 rounded-lg text-gray-900 hover:bg-black/5"
                        >
                            {isMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Mobile menu dropdown */}
                    <div className={`lg:hidden absolute top-full left-0 right-0 mt-3 transition-all duration-300 origin-top overflow-hidden z-[10000]
                        ${isMenuOpen ? "scale-y-100 opacity-100 translate-y-0" : "scale-y-0 opacity-0 -translate-y-4 pointer-events-none"}`}>
                        <ul className={`flex flex-col gap-2 p-4 rounded-xl shadow-2xl backdrop-blur-2xl border
                            ${isCondition ? "bg-white text-gray-800 border-gray-100" : "bg-black/95 text-white border-white/10"}`}>
                            {navItems.map(item => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={getMobileLinkClass(item.id)}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
