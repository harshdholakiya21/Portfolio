import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const isCondition = window.innerWidth < 1400 || window.innerHeight < 650

    return (
        <div className={`fixed w-full flex justify-center z-50 transition-all duration-500 ${isCondition ? "top-4" : "top-0"}`}>
            <nav className={`transition-all duration-500 ease-in-out border border-white/10
                ${isCondition
                    ? "bg-black/40 backdrop-blur-md px-6 py-2 rounded-full shadow-2xl"
                    : "bg-transparent w-full px-7 py-5"
                }`}>
                <div className={`flex items-center gap-8 ${isCondition ? "" : "justify-between px-6 w-full max-w-[1400px] mx-auto"}`}>

                    {!isCondition && (
                        <div className="flex items-center border pr-1 border-white/20">
                            <div className="flex items-center space-x-2">
                                <img src="/image/favicon.ico" alt="Logo" width="30" height="24" className="inline-block" />
                                <span className="text-white font-bold text-lg">Portfolio</span>
                            </div>
                        </div>
                    )}

                    <div className="flex">
                        <ul className={`flex items-center text-white transition-all duration-500 
                            ${isCondition ? "text-sm gap-4" : "text-[19px] gap-8"}`}>
                            <li>
                                <NavLink to={"/Home"} className={({ isActive }) =>
                                    `transition-all duration-300 px-3 py-1 rounded-xl 
                                    ${isActive ? "font-bold bg-white text-black" : "hover:bg-white/10"}`
                                }>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/AboutMe"} className={({ isActive }) =>
                                    `transition-all duration-300 px-3 py-1 rounded-xl 
                                    ${isActive ? "font-bold bg-white text-black" : "hover:bg-white/10"}`
                                }>About</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/Skills"} className={({ isActive }) =>
                                    `transition-all duration-300 px-3 py-1 rounded-xl 
                                    ${isActive ? "font-bold bg-white text-black" : "hover:bg-white/10"}`
                                }>Skills</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/Projects"} className={({ isActive }) =>
                                    `transition-all duration-300 px-3 py-1 rounded-xl 
                                    ${isActive ? "font-bold bg-white text-black" : "hover:bg-white/10"}`
                                }>Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/Contact"} className={({ isActive }) =>
                                    `transition-all duration-300 px-3 py-1 rounded-xl 
                                    ${isActive ? "font-bold bg-white text-black" : "hover:bg-white/10"}`
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