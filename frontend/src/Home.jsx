
import { IoWarningOutline } from "react-icons/io5";

import NavBar from './Navbar';

function Home() {

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
            <source src="/public/bgvid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex items-end p-8 h-full text-white">
            <h1 className="text-5xl font-bold mb-24">Hello, I’m Devin</h1>
            <p className="max-w-xl ml-2 mb-24">Are you ready to begin?</p>
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