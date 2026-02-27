import React from 'react'
import Navbar from './Navbar'
import TypewriterHeader from './typetext'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <>


            <div className=' home relative bg-gray-200  overflow-hidden max-h-screen'>
                <div className='text absolute  top-1/5'>

                    <TypewriterHeader />
                    <div className='flex gap-20 pt-20  pl-20 items-center'>

                        <button className='hover:scale-110 ' title='Github'><a href="https://github.com/harshdholakiya21" target='_blank'><img src="image/github.svg" alt="github" className='rounded-2xl overflow-hidden' /> </a> </button>
                        <button className='hover:scale-110 ' title='Linkedln' ><a href="https://www.linkedin.com/in/harshdholakiya/" target='_blank'> <img src="image/linkedln.svg" alt="linkedln" /> </a> </button>
                        <button className='hover:scale-110 ' title='Contact'><NavLink to={"/contact"}> <img src="image/contact.svg" alt="contact" /> </NavLink> </button>
                    </div>

                </div>


                <div className='bg-gradient-to-b from-black via-black to-gray-900 min-w-screen min-h-[calc(100vh+110px)] rotate-285 translate-x-[calc(27%)] relative
                '>
                    <img src="image/myphoto bgremove.png" alt="photo" className='w-1/3  absolute left-6/20 rotate-75 drop-shadow-[1px_1px_10px_#e5e7eb] filter ' />
                </div>

            </div>
            <div>

            </div>
        </>
    )
}

export default Home;
