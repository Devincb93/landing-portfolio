
import { IoWarningOutline } from "react-icons/io5";

import NavBar from './Navbar';
import gsap from 'gsap';
import { useEffect } from "react";

function Home() {

    useEffect(()=> {
        gsap.timeline()
        .to("#pgraph1", { opacity:0, delay:1 })
        .to("#pgraph2", { opacity:1, delay:1 })
    }, [])

    

    const emoji = <IoWarningOutline className='text-yellow-300'/>
    return (
        <div>
            
         <div className="relative w-full h-screen overflow-hidden">
            <NavBar/>
        <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
            <source src="/pixabayvid3840x2160large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex items-end p-8 h-full text-white">
            <div></div>
            <h1 className="text-5xl font-bold mb-24">Hello, I’m Devin</h1>
            <div className=" relative mb-24">
            <p id="pgraph1" className=" absolute max-w-xl ml-2 "> A Full stack Developer</p>
            <p id="pgraph2" className="max-w-xl ml-2  opacity-0">Are you ready to begin?</p>
            </div>
            {/* Add more content here */}
        </div>
        </div>
        <section className='mb-6'>
            Hi, thanks for stopping by! I’m updating my site with new coding skills. Check back soon to see the changes.
        </section>
        {/* <Projects/> */}
        {/* <AboutMe/> */}
        
        </div>
    )
}

export default Home