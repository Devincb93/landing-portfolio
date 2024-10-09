import React from 'react'
import { Link } from 'react-router-dom'


function ContactMe() {
    return (
        <div >
            <form className='flex flex-col bg-[#9abca7] '>
                <div className='m-4 ' >
                    <label className='items-center' htmlFor="name">Name:</label>
                    <input  type="text" id="name" name="name" required />
                </div>
                <div className='m-4'>
                    <label className='items-center' htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className='m-4'>
                    <label className='items-center' htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                
                <button type="submit">Send Message</button>
                <Link to='/'>
                <button className='bg-green-800 rounded-md hover:bg-green-950'>Go Back</button>
                </Link>
            </form>
        </div>
    )
}

export default ContactMe