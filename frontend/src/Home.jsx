import React from 'react'

import Projects from './Projects';

function Home() {
    return (
        <div>
        <h1 className='text-center m-2 font-neuropol text-3xl mb-10 '>
            {/* <TypeAnimation
             sequence={[
                // Same substring at the start will only be typed out once, initially
                'Skilled in JavaScript',
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                'Skilled in React',
                2000,
                'Skilled in Python',
                2000,
                'Skilled in Flask',
                2000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}/> */}
              Building Tomorrow's Solutions Today
        </h1>

        <Projects/>
        </div>
    )
}

export default Home