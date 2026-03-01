import React from 'react'
import Home from './Home'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

const MainContent = ({ isMobile }) => {
    return (
        <main>
            <Home isMobile={isMobile} />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
        </main>
    )
}

export default MainContent
