import React, { useEffect } from 'react'
import gsap from 'gsap'
import Navbar from './Navbar'
import AboutMe from './Aboutme'
import Slider from './Slider'

const MainPage = () => {

    useEffect(()=> {
        gsap.to('#container', {
            opacity:1,
            duration:1,
            fadeIn: true,
        })
        gsap.to('.animate1', {
            // fontSize: '2rem',
            duration: 1,
            
            opacity: 1,
            ease: 'power2.inOut',
        })
    })
  return (
    <div id='container' className='absolute opacity-0 w-full h-screen text-center'>
        <section className='w-full h-screen [font-size:100px]'>
            <Slider/>
        </section>
    </div>
    
  )
}

export default MainPage