
import { IoWarningOutline } from "react-icons/io5";

import NavBar from './Navbar';
import gsap from 'gsap';
import { useEffect } from "react";

function Home() {

    useEffect(()=> {
        if (typeof window !== 'undefined'){
        gsap.timeline()
        .to("#pgraph1", { opacity:0, delay:3 })
        .to("#pgraph2", { opacity:1, delay:.5 })
        .to("#buttons", { opacity:1, delay:1.25 })
        }
    }, [])

    

    const emoji = <IoWarningOutline className='text-yellow-300'/>
    return (
        <div>
            
         <div className="relative w-full h-screen overflow-hidden">
            {/* <NavBar/> */}
        <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
            <source src="/pixabayvid3840x2160large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        <div className="relative flex flex-col items-center justify-center h-full text-white">
            <h1 className=" text-5xl sm:text-xl font-bold ">Hello, I’m Devin</h1>
                <div className="mt-4">
                <p id="pgraph1" className="absolute max-w-xl ml-2">A Full stack Developer</p>
                <p id="pgraph2" className="max-w-xl  opacity-0">Are you ready to begin?</p>
                </div>
                    <div id="buttons" className="opacity-0 flex mt-2">
                        <button className="px-6 py-2 text-white backdrop-blur bg-white/5 border border-white/50 rounded-2xl hover:bg-white/30 transition">Yes</button>
                        <button className="px-6 py-2 text-white backdrop-blur bg-white/5 border border-white/50 rounded-2xl hover:bg-white/20 transition ml-2" >No</button>
                    </div>
            </div>
                
            </div>
        </div>
    )
}

export default Home