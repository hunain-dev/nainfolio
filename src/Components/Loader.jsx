import React, { useEffect } from 'react'
import hi from "../../public/assets/images/hi.png"
import gsap from 'gsap'

const Loader = () => {
    useEffect(() => {
        const tl = gsap.timeline()

        tl.to({}, { duration: 1 })
        
        tl.to(".loader-text", {
            y: -30,
            opacity: 0,

            duration: 0.7,
            ease: "power2.inOut"
        })
        
        tl.to(".loader-hand", {
            y: 30,
            opacity: 0,

            duration: 0.7,
            ease: "power2.inOut"
        })
        
        tl.to(".loader", {
            x:"-100%",
    duration: 2,
    ease: "power2.inOut",
    onComplete: () => {
        document.querySelector(".loader").classList.add("pointer-events-none");
      }
        })
        

        return () => {
            tl.kill()
        }
    }, [])

    return (
        <div className='loader h-screen w-full flex items-center justify-center fixed     pointer-events: none;
 z-[99999] bg-[#F4F4F4] pointer-events-auto'>
            <h2 className='actay loader-text text-[6vh]'>
                Hey
            </h2>

            <img
                src={hi}
                alt=""
                className='loader-hand w-14'
            />
        </div>
    )
}

export default Loader
