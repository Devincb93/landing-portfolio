import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { use } from 'react'


function ContactMe() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = () => {
        e.preventDefault()
        const compiledMessage = {name, email, message}
    }
    return (
        <div >
            <form onSubmit={() => {handleSubmit()}} className='flex flex-col bg-[#9abca7] '>
                <div className='m-4 ' >
                    <label className='items-center' htmlFor="name">Name:</label>
                    <input className='text-black ' onChange={(e) => setName(e.target.value)}  type="text" id="name" name="name" value={name} required />
                </div>
                <div className='m-4'>
                    <label className='items-center' htmlFor="email">Email:</label>
                    <input className='text-black' onChange={(e)=> setEmail(e.target.value)} type="email" id="email" name="email" required />
                </div>
                <div className='m-4'>
                    <label className='items-center' htmlFor="message">Message:</label>
                    <textarea className='text-black' onChange={(e)=> setMessage(e.target.value)} id="message" name="message" required></textarea>
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