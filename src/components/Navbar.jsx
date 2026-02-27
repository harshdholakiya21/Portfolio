import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const isCondition = window.innerWidth < 1400 || window.innerHeight < 650

    return (
        <div className="fixed w-full z-50">
            <nav className={`transition-all duration-500 ease-in-out w-full 
                ${isCondition
                    ? "bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 py-3"
                    : "bg-transparent px-7 py-5"
                }`}>
                <div className="flex items-center justify-between px-6 max-w-[1400px] mx-auto">

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

                    <div className="flex">
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

                </div>
            </nav>
        </div>
    )
}

export default Navbar