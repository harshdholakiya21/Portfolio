import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const isCondition = window.innerWidth < 1400 || window.innerHeight < 650

    return (
        <div>
            <nav className={`bg-transparent z-50 fixed w-full top-0 left-0 right-0 ${isCondition ? "px-5 py-3" : "px-7 py-5"}`}>
                <div className={`flex justify-between items-center ${isCondition ? "px-4 gap-2" : "px-6 gap-4"}`}>

                    <div className="flex items-center border pr-1">
                        <div className="flex items-center space-x-2">
                            <img src="/image/favicon.ico" alt="Logo" width="30" height="24" className="inline-block" />
                            <span className={`text-black font-bold ${isCondition ? "text-base" : "text-lg"}`}>Portfolio</span>
                        </div>
                    </div>
                    <div className="flex">
                        <ul className={`flex text-white ${isCondition ? "text-base gap-4" : "text-[19px] gap-6"}`}>
                            <li>
                                <NavLink to={"/Home"} className={(e) =>
                                    `${e.isActive ? "font-bold bg-white text-black p-1 px-2.5 rounded-xl" : "hover:drop-shadow-[0_0_10px_#e5e7eb]"}`
                                }>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/AboutMe"} className={({ isActive }) =>
                                    `${isActive ? "font-bold bg-white text-black p-1 px-2.5 rounded-xl" : "hover:drop-shadow-[0_0_10px_#e5e7eb]"}`
                                }>About Me</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/Skills"} className={(e) =>
                                    `${e.isActive ? "font-bold bg-white text-black p-1 px-2.5 rounded-xl" : "hover:drop-shadow-[0_0_10px_#e5e7eb]"}`
                                }>Skills</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/Projects"} className={(e) =>
                                    `${e.isActive ? "font-bold bg-white text-black p-1 px-2.5 rounded-xl" : "hover:drop-shadow-[0_0_10px_#e5e7eb]"}`
                                }>Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to={"/Contact"} className={({ isActive }) =>
                                    `${isActive ? "font-bold bg-white text-black p-1 px-2.5 rounded-xl" : "hover:drop-shadow-[0_0_10px_#e5e7eb]"}`
                                } >Contact</NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar