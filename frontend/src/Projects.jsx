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
            
                <iframe className='m-1 mx-auto w-60 h-32' src="https://www.youtube.com/embed/2yMs4iyhXU4?si=FmOCNF_jjVdc4Rlv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div>
            
                <iframe className='m-1 mx-auto w-60 h-32' src="https://www.youtube.com/embed/zgpGeuFefIQ?si=xvSwLF2noCtba_2y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            
        </div>
        <div>
        
                <iframe className='m-1 mx-auto w-60 h-32 -mt-56 md:mb-56' src="https://www.youtube.com/embed/pgQxe4rNlRQ?si=hitwZCHaW18_NF6h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
           </div> 
    )
}
export default Projects