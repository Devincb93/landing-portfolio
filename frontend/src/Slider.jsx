import React, { useEffect, useRef, useState } from 'react'

const slideTexts = [
  "01 Slide 1 Title",
  "02 Slide 2 Title",
  "03 Slide 3 Title",
  "04 Slide 4 Title",
]

const Slider = () => {
  const slidesRef = useRef([])
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const textRef = useRef()

  const goToSlide = (direction = 1) => {
    if (isAnimating) return
    setIsAnimating(true)

    const nextIndex = (current + direction + slideTexts.length) % slideTexts.length

    const currentSlide = slidesRef.current[current]
    const nextSlide = slidesRef.current[nextIndex]

    nextSlide.style.zIndex = 2
    nextSlide.style.transform = "translateX(100%)"
    currentSlide.style.zIndex = 1

    // Text out
    textRef.current.style.opacity = "0"
    setTimeout(() => {
      textRef.current.innerHTML = slideTexts[nextIndex]
      textRef.current.style.transform = "translateY(50px)"
    }, 300)

    // Animate in
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
    // Set up slides
    slidesRef.current.forEach((slide, i) => {
      slide.style.zIndex = i === 0 ? 2 : 1
      slide.style.transform = i === 0 ? "translateX(0%)" : "translateX(100%)"
    })
  }, [])

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <div className='text absolute top-[120px] left-[120px] text-white text-[60px] z-10 opacity-1 translate-y-[-50px]' ref={textRef}>
        {slideTexts[0]}
      </div>
      <div className='slider relative w-full h-full'>
        {slideTexts.map((text, i) => (
          <div
            key={i}
            className='slide absolute top-0 left-0 w-full h-full flex justify-center items-center text-white text-[50px] bg-blue'
            ref={(el) => (slidesRef.current[i] = el)}
          >
            {`Slide ${i + 1}`}
          </div>
        ))}
      </div>
      <button
        onClick={() => goToSlide(1)}
        className='absolute bottom-[60px] right-[40px] bg-transparent border-none z-10 text-white text-xl'
      >
        Next
      </button>
    </div>
  )
}

export default Slider