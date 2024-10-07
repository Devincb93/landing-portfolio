import React from 'react'

import Projects from './Projects';
import AboutMe from './Aboutme';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
        <h1 className=''>
              Building Tomorrow's Solutions Today
        </h1>

        <Projects/>
        <AboutMe/>
        <Link to="contact">Contact Me</Link>
        </div>
    )
}

export default Home