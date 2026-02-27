import React from 'react'
import Navbar from './Navbar'
import Typewriter from './typetext'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Home = () => {
    const isCondition = window.innerWidth < 1400 || window.innerHeight < 650

    return (
        <div className={`home relative overflow-hidden min-h-screen transition-colors duration-500 
            ${isCondition ? "bg-gray-100" : "bg-gray-200"}`}>

            <div className={`transition-all duration-1000 z-10 w-full 
                ${isCondition ? "flex flex-col items-center justify-center pt-24" : "absolute top-1/5 pl-20"}`}>

                <Typewriter isCondition={isCondition} />

                <div className={`flex items-center transition-all duration-700 
                    ${isCondition ? "pt-10 gap-10 justify-center" : "pt-20 gap-20 pl-20"}`}>

                    <button className='hover:scale-110 active:scale-95 transition-transform duration-300' title='Github'>
                        <a href="https://github.com/harshdholakiya21" target='_blank' rel="noopener noreferrer">
                            <img src="image/github.svg" alt="github" className='w-12 h-12 rounded-2xl' />
                        </a>
                    </button>
                    <button className='hover:scale-110 active:scale-95 transition-transform duration-300' title='LinkedIn'>
                        <a href="https://www.linkedin.com/in/harshdholakiya/" target='_blank' rel="noopener noreferrer">
                            <img src="image/linkedln.svg" alt="linkedln" className='w-12 h-12' />
                        </a>
                    </button>
                    <button className='hover:scale-110 active:scale-95 transition-transform duration-300' title='Contact'>
                        <NavLink to={"/contact"}>
                            <img src="image/contact.svg" alt="contact" className='w-12 h-12' />
                        </NavLink>
                    </button>
                </div>
            </div>

            <div className={`bg-gradient-to-b from-black via-black to-gray-900 absolute min-w-[200vw] min-h-[200vh] transition-all duration-1000 ease-out z-0
                ${isCondition ? "rotate-[15deg] translate-y-[55%] translate-x-[-10%]" : "rotate-285 translate-x-[27%]"}
            `}></div>

            <div className={`absolute transition-all duration-[1200ms] ease-out z-0 pointer-events-none
                ${isCondition ? "bottom-[-10%] opacity-40 scale-110" : "right-[-5%] top-1/2 -translate-y-1/2 scale-100"}
            `}>
                <img src="image/myphoto bgremove.png" alt="photo"
                    className={`transition-all duration-1000 drop-shadow-[1px_1px_10px_#e5e7eb] filter
                        ${isCondition ? "w-[75vw]" : "w-[400px] lg:w-[500px] translate-x-[-15%] rotate-[75deg] left-6/20 block"} 
                    `}
                />
            </div>
        </div>
    )
}

export default Home;
