import React from 'react'
import Navbar from './Navbar'
import Typewriter from './typetext'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Home = () => {
    const isCondition = window.innerWidth < 1400 || window.innerHeight < 650

    return (
        <div className='home relative bg-[#0a0a0a] overflow-hidden min-h-screen flex items-center justify-center'>
            <div className={`transition-all duration-1000 w-full z-10 flex flex-col 
                ${isCondition ? "items-center scale-90" : "pl-40"}`}>

                <Typewriter isCondition={isCondition} />

                <div className={`flex items-center transition-all duration-700 
                    ${isCondition ? "pt-12 gap-8 justify-center" : "pt-24 gap-16"}`}>

                    <button className='group relative hover:scale-110 active:scale-95 transition-all duration-300' title='Github'>
                        <div className="absolute -inset-2 bg-purple-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <a href="https://github.com/harshdholakiya21" target='_blank' rel="noopener noreferrer" className="relative">
                            <img src="image/github.svg" alt="github" className='w-14 h-14 rounded-2xl invert-[0.3] brightness-150' />
                        </a>
                    </button>
                    <button className='group relative hover:scale-110 active:scale-95 transition-all duration-300' title='LinkedIn'>
                        <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <a href="https://www.linkedin.com/in/harshdholakiya/" target='_blank' rel="noopener noreferrer" className="relative">
                            <img src="image/linkedln.svg" alt="linkedln" className='w-14 h-14' />
                        </a>
                    </button>
                    <button className='group relative hover:scale-110 active:scale-95 transition-all duration-300' title='Contact'>
                        <div className="absolute -inset-2 bg-gray-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <NavLink to={"/contact"} className="relative">
                            <img src="image/contact.svg" alt="contact" className='w-14 h-14' />
                        </NavLink>
                    </button>
                </div>
            </div>

            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180vw] h-[180vh] transition-all duration-[2000ms]
                ${isCondition ? "rotate-[15deg] opacity-70" : "rotate-[285deg] translate-x-[35%] opacity-100"}
                bg-gradient-to-b from-black via-[#111] to-[#1a1a1a] pointer-events-none
            `}></div>

            <div className={`absolute transition-all duration-[1500ms] ease-out z-0 pointer-events-none
                ${isCondition ? "bottom-[-15%] opacity-30 scale-125 saturate-50" : "right-10 top-1/2 -translate-y-1/2 opacity-90 scale-100"}
            `}>
                <img src="image/myphoto bgremove.png" alt="photo"
                    className={`transition-all duration-1000 drop-shadow-[0_0_50px_rgba(118,68,187,0.2)]
                        ${isCondition ? "w-[70vw]" : "w-[400px] lg:w-[500px]"}
                    `}
                />
            </div>
        </div>
    )
}

export default Home;
