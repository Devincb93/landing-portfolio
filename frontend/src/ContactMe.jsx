import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'



function ContactMe() {

    
    

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        
    
        const data = { name, email, message };
        console.log('Sending data:', data); // Log data before sending
    
        try {
            const response = await fetch('https://devinburkett.netlify.app/.netlify/functions/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
    
            console.log('Server response:', response); // Log server response
            if (response.ok) {
                alert('Message sent successfully!');
                navigate('/')
            } else {
                alert('Failed to send the message.');
            }


            
        } catch (error) {
            console.error(error);
            alert('Error sending the message.');
        }
    };
    return (
        <div >
            <form onSubmit= {handleSubmit} className='flex flex-col bg-[#9abca7] '>
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