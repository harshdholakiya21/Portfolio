import React from 'react'
import Navbar from './Navbar'
import Typewriter from './typetext'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Home = () => {
    const isCondition = window.innerWidth < 1400 || window.innerHeight < 650

    return (
        <div className={`home relative bg-gray-200 overflow-hidden min-h-screen ${isCondition ? "flex items-center justify-center" : "max-h-screen"}`}>
            <div className={`text transition-all duration-700 
                ${isCondition ? "z-10 text-center scale-90" : "absolute top-1/5 "}`}>

                <Typewriter isCondition={isCondition} />
                <div className={`flex items-center transition-all duration-500 
                    ${isCondition ? "pt-10 gap-10 justify-center" : "gap-20 pt-20 pl-20"}`}>

                    <button className='hover:scale-110 transition-transform' title='Github'>
                        <a href="https://github.com/harshdholakiya21" target='_blank' rel="noopener noreferrer">
                            <img src="image/github.svg" alt="github" className='rounded-2xl overflow-hidden' />
                        </a>
                    </button>
                    <button className='hover:scale-110 transition-transform' title='LinkedIn'>
                        <a href="https://www.linkedin.com/in/harshdholakiya/" target='_blank' rel="noopener noreferrer">
                            <img src="image/linkedln.svg" alt="linkedln" />
                        </a>
                    </button>
                    <button className='hover:scale-110 transition-transform' title='Contact'>
                        <NavLink to={"/contact"}>
                            <img src="image/contact.svg" alt="contact" />
                        </NavLink>
                    </button>
                </div>

            </div>

            {!isCondition && (
                <div className={`bg-gradient-to-b from-black via-black to-gray-900 transition-all duration-1000 ease-out z-0
                    min-w-screen min-h-[calc(100vh+110px)] rotate-285 translate-x-[calc(27%)] relative`}>

                    <img src="image/myphoto bgremove.png" alt="photo"
                        className='w-1/3 absolute left-6/20 rotate-75 drop-shadow-[1px_1px_10px_#e5e7eb] filter'
                    />
                </div>
            )}
        </div>
    )
}

export default Home;
