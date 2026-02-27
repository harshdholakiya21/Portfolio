import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const isCondition = window.innerWidth < 1400 || window.innerHeight < 650
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="fixed w-full z-[9999]">
            <nav className={`transition-all duration-500 ease-in-out w-full 
                ${isCondition
                    ? "bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 py-3"
                    : "bg-transparent px-7 py-5"
                }`}>
                <div className="flex items-center justify-between px-6 max-w-[1400px] mx-auto relative">

                    <div className={`flex items-center pr-1 transition-all duration-500 
                        ${isCondition ? "border-transparent" : "border-black border"}`}>
                        <div className="flex items-center space-x-2">
                            <img src="/image/favicon.ico" alt="Logo" width="30" height="24" className="inline-block" />
                            <span className={`font-bold transition-all duration-500 
                                ${isCondition ? "text-gray-900 text-lg" : "text-black text-lg"}`}>
                                Portfolio
                            </span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex">
                        <ul className={`flex items-center transition-all duration-500 
                            ${isCondition ? "text-[15px] gap-4 text-gray-800 font-medium" : "text-[19px] gap-6 text-white"}`}>
                            <li>
                                <NavLink to={"/Home"} className={({ isActive }) =>
                                    `transition-all duration-300 px-3 py-1 rounded-xl 
                                    ${isActive
                                        ? (isCondition ? "font-bold bg-black text-white" : "font-bold bg-white text-black")
                                        : (isCondition ? "hover:text-black hover:bg-gray-100" : "hover:drop-shadow-[0_0_10px_#e5e7eb]")
                                    }`
                                }>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/AboutMe"} className={({ isActive }) =>
                                    `transition-all duration-300 px-3 py-1 rounded-xl 
                                    ${isActive
                                        ? (isCondition ? "font-bold bg-black text-white" : "font-bold bg-white text-black")
                                        : (isCondition ? "hover:text-black hover:bg-gray-100" : "hover:drop-shadow-[0_0_10px_#e5e7eb]")
                                    }`
                                }>About</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/Skills"} className={({ isActive }) =>
                                    `transition-all duration-300 px-3 py-1 rounded-xl 
                                    ${isActive
                                        ? (isCondition ? "font-bold bg-black text-white" : "font-bold bg-white text-black")
                                        : (isCondition ? "hover:text-black hover:bg-gray-100" : "hover:drop-shadow-[0_0_10px_#e5e7eb]")
                                    }`
                                }>Skills</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/Projects"} className={({ isActive }) =>
                                    `transition-all duration-300 px-3 py-1 rounded-xl 
                                    ${isActive
                                        ? (isCondition ? "font-bold bg-black text-white" : "font-bold bg-white text-black")
                                        : (isCondition ? "hover:text-black hover:bg-gray-100" : "hover:drop-shadow-[0_0_10px_#e5e7eb]")
                                    }`
                                }>Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/Contact"} className={({ isActive }) =>
                                    `transition-all duration-300 px-3 py-1 rounded-xl 
                                    ${isActive
                                        ? (isCondition ? "font-bold bg-black text-white" : "font-bold bg-white text-black")
                                        : (isCondition ? "hover:text-black hover:bg-gray-100" : "hover:drop-shadow-[0_0_10px_#e5e7eb]")
                                    }`
                                }>Contact</NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={`p-2 transition-colors duration-300 rounded-lg 
                                ${isCondition ? "text-gray-900 hover:bg-black/5" : "text-white hover:bg-white/10"}`}
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
                            <li>
                                <NavLink to={"/Home"} onClick={() => setIsMenuOpen(false)} className={({ isActive }) =>
                                    `block px-4 py-3 rounded-xl transition-all ${isActive ? "bg-black text-white font-bold" : "hover:bg-black/5"}`
                                }>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/AboutMe"} onClick={() => setIsMenuOpen(false)} className={({ isActive }) =>
                                    `block px-4 py-3 rounded-xl transition-all ${isActive ? "bg-black text-white font-bold" : "hover:bg-black/5"}`
                                }>About</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/Skills"} onClick={() => setIsMenuOpen(false)} className={({ isActive }) =>
                                    `block px-4 py-3 rounded-xl transition-all ${isActive ? "bg-black text-white font-bold" : "hover:bg-black/5"}`
                                }>Skills</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/Projects"} onClick={() => setIsMenuOpen(false)} className={({ isActive }) =>
                                    `block px-4 py-3 rounded-xl transition-all ${isActive ? "bg-black text-white font-bold" : "hover:bg-black/5"}`
                                }>Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/Contact"} onClick={() => setIsMenuOpen(false)} className={({ isActive }) =>
                                    `block px-4 py-3 rounded-xl transition-all ${isActive ? "bg-black text-white font-bold" : "hover:bg-black/5"}`
                                }>Contact</NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar