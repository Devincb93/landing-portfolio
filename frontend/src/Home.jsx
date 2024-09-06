import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function Home() {
    return (
        <h1 className='text-center text-[#cae9ff]'>
            <TypeAnimation
             sequence={[
                // Same substring at the start will only be typed out once, initially
                'Skilled in JavaScript',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Skilled in React',
                1000,
                'Skilled in Python',
                1000,
                'Skilled in Flask',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}/>
        </h1>
    )
}

export default Home