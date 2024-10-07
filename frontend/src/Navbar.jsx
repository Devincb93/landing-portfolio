import React from 'react'
import { Routes } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Link } from 'react-router-dom';


function NavBar() {

    
    return (
        <div className='py-1 flex m-1 flex-row-reverse'>
            <div className='m-1  hover:scale-150'>
                <BsTwitterX />
            </div>
            <div className='m-1  hover:scale-150' onClick={()=>{window.open('https://www.instagram.com/null_value_user/')}}>
                <FaInstagram />
            </div>
            <div className='m-1  hover:scale-150'>
                <FaGithub onClick={()=> {window.open('https://github.com/Devincb93')}} />
            </div>
            <div className='m-1  hover:scale-150'>
                <FaLinkedin onClick={()=> {window.open('https://www.linkedin.com/in/devin-burkett-b02b83a1/')}}/>
            </div>
            <div>
                
                    <Link to="resume">
                    <p className='m-1 hover:scale-125 font-neuropol text-[9px]'>Resume</p>
                    </Link>
            </div>
        </div>
    )
}

export default NavBar