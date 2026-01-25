import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-transparent px-7 py-5 z-50 fixed w-full top-0 left-0 right-0">
            <div className='flex justify-between gap-4 items-center px-6'>
                <div className="flex items-center border pr-1">
                    <div className="flex items-center space-x-2">
                        <img src="/image/favicon.ico" alt="Logo" width="30" height="24" className="inline-block" />
                        <span className="text-black font-bold text-lg hidden sm:inline">Portfolio</span>
                    </div>
                </div>
                <div className="flex">
                    <ul className='flex text-sm sm:text-base md:text-lg text-white gap-4 sm:gap-6'>
                        <li>
                            <NavLink to={"/Home"} className={({ isActive }) =>
                                `${isActive ? "font-bold bg-white text-black p-1 px-2.5 rounded-xl" : "hover:drop-shadow-[0_0_10px_#e5e7eb]"}`
                            }>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/AboutMe"} className={({ isActive }) =>
                                `${isActive ? "font-bold bg-white text-black p-1 px-2.5 rounded-xl" : "hover:drop-shadow-[0_0_10px_#e5e7eb]"}`
                            }>About</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Skills"} className={({ isActive }) =>
                                `${isActive ? "font-bold bg-white text-black p-1 px-2.5 rounded-xl" : "hover:drop-shadow-[0_0_10px_#e5e7eb]"}`
                            }>Skills</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/Contact"} className={({ isActive }) =>
                                `${isActive ? "font-bold bg-white text-black p-1 px-2.5 rounded-xl" : "hover:drop-shadow-[0_0_10px_#e5e7eb]"}`
                            }>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
