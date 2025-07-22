import React, { useEffect, useRef, useState } from 'react'
import AboutMe from './Aboutme'


const slideTexts = [
  "01 About Me",
  "02 Projects",
  "03 Skills",
  "04 Contact"
]

const Slider = () => {
  const slidesRef = useRef([])
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const textRef = useRef()

  const goToSlide = (direction = 1) => {
    if (isAnimating) return
    setIsAnimating(true)

    const total = slideTexts.length
    const nextIndex = (current + direction + total) % total

    const currentSlide = slidesRef.current[current]
    const nextSlide = slidesRef.current[nextIndex]

    nextSlide.style.zIndex = 2
    nextSlide.style.transform = `translateX(${direction > 0 ? '100%' : '-100%'})`
    currentSlide.style.zIndex = 1

    textRef.current.style.opacity = "0"
    setTimeout(() => {
      textRef.current.innerHTML = slideTexts[nextIndex]
      textRef.current.style.transform = "translateY(50px)"
    }, 300)

    nextSlide.style.transition = "transform 2s ease"
    nextSlide.style.transform = "translateX(0%)"

    setTimeout(() => {
      textRef.current.style.transition = "opacity 1s, transform 1s"
      textRef.current.style.opacity = "1"
      textRef.current.style.transform = "translateY(0)"
    }, 1500)

    setTimeout(() => {
      currentSlide.style.zIndex = 0
      setIsAnimating(false)
    }, 2000)

    setCurrent(nextIndex)
  }

  useEffect(() => {
    slidesRef.current.forEach((slide, i) => {
      slide.style.zIndex = i === 0 ? 2 : 1
      slide.style.transform = i === 0 ? "translateX(0%)" : "translateX(100%)"
    })
  }, [])

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <div
        className='absolute top-[120px] left-[120px] text-white text-[60px] z-10 opacity-1 translate-y-[-50px]'
        ref={textRef}
      >
        {slideTexts[0]}
      </div>

      <div className='relative w-full h-full'>
        <div
          ref={(el) => (slidesRef.current[0] = el)}
          className='absolute w-full h-full top-0 left-0 bg-black text-white flex justify-center items-center'
        >
          <AboutMe />
        </div>
        <div
          ref={(el) => (slidesRef.current[1] = el)}
          className='absolute w-full h-full top-0 left-0 bg-black text-white flex justify-center items-center'
        >
          Projects girlie cakes!
        </div>
        <div
          ref={(el) => (slidesRef.current[2] = el)}
          className='absolute w-full h-full top-0 left-0 bg-black text-white flex justify-center items-center'
        >
          Slide 3 – Skills
        </div>
        <div
          ref={(el) => (slidesRef.current[3] = el)}
          className='absolute w-full h-full top-0 left-0 bg-black text-white flex justify-center items-center'
        >
          Slide 4 – Contact
        </div>
      </div>

      <div className='absolute bottom-[60px] right-[40px] flex gap-4 z-10'>
        <button
          onClick={() => goToSlide(-1)}
          className='text-white bg-transparent text-xl border border-white px-4 py-2 rounded'
        >
          Back
        </button>
        <button
          onClick={() => goToSlide(1)}
          className='text-white bg-transparent text-xl border border-white px-4 py-2 rounded'
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Slider
