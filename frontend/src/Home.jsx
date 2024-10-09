import React from 'react'
import { IoWarningOutline } from "react-icons/io5";
import Projects from './Projects';
import AboutMe from './Aboutme';
import { Link } from 'react-router-dom';

function Home() {

     const emoji = <IoWarningOutline className='text-yellow-300'/>
    return (
        <div>
        <div className='flex justify-center items-center'>
            <h1 className='flex items-center text-center'>
                {emoji}THIS SITE IS UNDER CONSTRUCTION{emoji}
            </h1>
        </div>  
        <Projects/>
        <AboutMe/>
        
        </div>
    )
}

export default Home