import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function Projects(){
    return (
        <div>
            <h1 className='font-neuropol text-xs m-1'>
                    <TypeAnimation className=' '
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'These project were built with JavaScript',
                        2000, // wait 1s before replacing "Mice" with "Hamsters"
                        'These project were built with React',
                        2000,
                        'These project were built with Python',
                        2000,
                        'These project were built with Flask',
                        2000
                      ]}
                      wrapper="span"
                      speed={50}
                      style={{ fontSize: '15px', display: 'inline-block' }}
                      repeat={Infinity}
                    />
                </h1>
        <div className='grid grid-cols-2'>
            <div className=''>
                
                <iframe className='m-1 mx-auto w-60 h-32' src="https://www.youtube.com/embed/QNlk6-UM8xE?si=0WUN1Ueiftme9KLk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div>
                
                <iframe className='m-1 mx-auto w-60 h-32' src="https://www.youtube.com/embed/yCRbWpJ0EYE?si=-56hLG3Ro-MKRrKS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div>
                <p>this one</p>
                <iframe className='m-1 mx-auto w-60 h-32' src="https://www.youtube.com/embed/ugzF019kEkw?si=3SkKEeyy7qhWIcgM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div>
            
            <iframe className='m-1 mx-auto w-60 h-32' src="https://www.youtube.com/embed/Xyd-uvbcrV4?si=7E8zuAB7EqJpei7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            
        </div>
        <div>
        
        <iframe className='m-1 mx-auto w-60 h-32' src="https://www.youtube.com/embed/7WuaI1rrMUk?si=Pb2jFmNlaZo339Kw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
           </div> 
    )
}
export default Projects