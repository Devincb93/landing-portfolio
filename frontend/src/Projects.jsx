import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function Projects(){
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 >
                    <TypeAnimation 
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Built with JavaScript',
                        2000, 
                        'Built with React',
                        2000,
                        'Built with Python',
                        2000,
                        'Built with Flask',
                        2000
                      ]}
                      wrapper="span"
                      speed={50}
                      style={{ fontSize: '15px', display: 'inline-block' }}
                      repeat={Infinity}
                    />
                </h1>
        
        <div className='flex flex-col items-center'>
                
                {/* <iframe  src="https://www.youtube.com/embed/QNlk6-UM8xE?si=0WUN1Ueiftme9KLk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                

            </div>
            <div>
                
                {/* <iframe className='m-1' src="https://www.youtube.com/embed/yCRbWpJ0EYE?si=-56hLG3Ro-MKRrKS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
            </div>

            <div className='flex'>
                <iframe className='m-1' src="https://www.youtube.com/embed/ugzF019kEkw?si=3SkKEeyy7qhWIcgM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div className='w-72 text-sm mt-10 mb-10 bg-[#e8ddb5] rounded-md bg-opacity-30'>
                    <p className='text-[15px] w-72 text-center'>A CLI Menu app that allows users to manage books and authors</p>
                    <li className='text-[10px]' >Built using Python and the Fire library to create an interactive CLI for managing books and authors</li>
                    <li className='text-[10px]'>Mapped a one-to-many author-book relationship with SQLAlchemy for database efficiency</li>
                    <li className='text-[10px]'>Implemented CRUD operations to simplify book and author management via the command line</li>
                </div>
            </div>

            <div className='flex'>
            <iframe className='m-1' src="https://www.youtube.com/embed/Xyd-uvbcrV4?si=7E8zuAB7EqJpei7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div className='w-72 text-sm mt-10 mb-10 bg-[#e8ddb5] rounded-md bg-opacity-30'>
                    <p className='text-[15px] w-72 text-center'>An app where users can explore, save, and favorite recipes, with personalized collections for a seamless experience</p>
                    <li className='text-[10px]' >Developed with Flask for backend API, handling CRUD operations, user authentication, and sessions</li>
                    <li className='text-[10px]'>Created a responsive UI with React, featuring a grid layout for recipes, improving user experience</li>
                    <li className='text-[10px]'>Integrated Formik for form validation, ensuring accurate data input and seamless user interaction.</li>
                </div>
            </div>

            <div className='flex'>
            <iframe className='m-1' src="https://www.youtube.com/embed/7WuaI1rrMUk?si=Pb2jFmNlaZo339Kw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div className='w-72 text-sm mt-10 mb-10 bg-[#e8ddb5] rounded-md bg-opacity-30'>
                    <p className='text-[15px] w-72 text-center'>An app that lets users easily join, leave, and manage queues, making wait times more organized and efficient</p>
                    <li className='text-[10px]' >Built with React for a dynamic frontend and Flask for backend API, enabling real-time queue management.</li>
                    <li className='text-[10px]'>Styled with TailwindCSS to ensure a responsive and adaptable UI across devices</li>
                    <li className='text-[10px]'>Improved queue management with React and Flask to enhance service efficiency</li>
                </div>
            </div>

        </div>
        
           
    )
}
export default Projects