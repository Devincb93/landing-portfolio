import React, { useEffect } from 'react'
import gsap from 'gsap'
import Navbar from './Navbar'

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
        <section className='flex flex-col mt-3'>
            <Navbar/>
            <p>Hi, I’m <span className='animate1 [font-size:25px] opacity-0 '>Devin Burkett,</span> a self-driven full stack software engineer based in Los Angeles. I specialize in building real-world web applications from the ground up, combining strong front-end skills in <span className='animate1 [font-size:25px] opacity-0 '>React</span> and <span className='animate1 [font-size:25px] opacity-0 '>Tailwind CSS</span> with solid back-end expertise in <span className='animate1 [font-size:25px] opacity-0 '>Node.js, Express,</span> and <span className='animate1 [font-size:25px] opacity-0 '>Python.</span> I have hands-on experience creating responsive, performant apps, including projects featuring 3D visuals with Three.js and robust real-time functionality.</p>
            <p className='mt-2'>My background includes problem-solving under pressure, gained from diverse roles in technical support and lab work, which has sharpened my ability to troubleshoot and deliver stable, high-quality software. I’m passionate about continuous learning and applying best practices in UI/UX design and clean architecture to create intuitive user experiences.</p>
            <p className='mt-2'>Currently, I’m looking to grow long-term with a team where I can contribute my skills and keep leveling up as a developer.</p>
        </section>
        <section className='w-full h-screen [font-size:100px]'> words to fill everything in lalalalala this is just to see what goes on the screen etc,</section>
    </div>
    
  )
}

export default MainPage