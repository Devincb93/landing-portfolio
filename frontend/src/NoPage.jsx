import React, { useEffect } from 'react'
import gsap from 'gsap'

const NoPage = () => {

  useEffect(() => {
    gsap.to("#container", {
      opacity: 1,
      duration: 1,
    })
  })
  return (
    <div id='container' className='opacity-0 w-full h-screen flex items-center justify-center px-4 text-center'>
      <h1 className='text-3xl'>Great, cause we're still under construction! Sorry about that but you can always check back with us in a few days and there should be some updates even if they're small. Thanks!</h1>
    </div>
  )
}

export default NoPage