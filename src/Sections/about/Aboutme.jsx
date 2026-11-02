import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import hunainGif from "../../assets/hunainvideo-unscreen.gif";

const Aboutme = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const subtitleRef = useRef(null);
  const paraRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top +=20%",
          end: "+=500%",
          scrub: true,
          pin: true,
        },
      });

      tl.to(textRef.current, {
        scale: 0.4,
        y: -30,
      });

      // Mobile
      mm.add("(max-width: 767px)", () => {
        tl.to(
          subtitleRef.current,
          {
            scale: 0.8,
            y: -70,
            ease: "power2.out",
          },
          0,
        );
      });

      // Tablet
      mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
        tl.to(
          subtitleRef.current,
          {
            scale: 1,
            y: -93,
            ease: "power2.out",
          },
          0,
        );
      });

      // Desktop
      mm.add("(min-width: 1024px) and (max-width: 1439px)", () => {
        tl.to(
          subtitleRef.current,
          {
            scale: 0.5,
            y: -141,
            ease: "power2.out",
          },
          0,
        );
      });

      // Large Desktop
      mm.add("(min-width: 1440px)", () => {
        tl.to(
          subtitleRef.current,
          {
            scale: 0.4,
            y: -135,
            ease: "power2.out",
            backgroundColor: "orange",
          },
          0,
        );
      });

      tl.to(
        paraRef.current,
        {
          opacity: 1,
          y: -5,
          ease: "power2.out",
        },
        0.5,
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={sectionRef} className="lg:pb-6 xl:pb-24 pb-20 text-white w-full">
      <div className="h-full w-full">
        <div className="relative flex items-center justify-center flex-col w-full  ">
          <h2
            ref={textRef}
            className="ppneuemontreal font-500 flex items-center justify-center uppercase lg:text-[24vw] text-[24vw] lg:leading-[4%] leading-25"
          >
            Huna
            <span className="h-full w-fit">
              <img
                src={hunainGif}
                alt="Hunain GIF"
                className="
    object-cover
    w-11 h-auto      
    sm:w-32           
    lg:w-40"
                loading="lazy"
              />
            </span>
            n
          </h2>
          <h4
            ref={subtitleRef}
            className="group lg:text-8xl text-3xl md:text-5xl xl:mt-1 mt-1 lg:mt-0 lg:opacity-100 opacity-100 md:opacity-100"
          >
            <span className="actay inline-block transition-transform duration-600 group-hover:-translate-x-50">
              Creative
            </span>
            <span className="mx-3"></span>
            <span className="actay inline-block transition-transform duration-600 group-hover:translate-x-50">
              Developer
            </span>
          </h4>
          <div
            ref={paraRef}
            className="h-fit flex items-center justify-start text-center lg:px-20 px-1 xl:px-8 md:px-8 absolute lg:top-55 xl:top-70 md:top-48 top-23 left-0 w-full opacity-0"
          >
            <h4 className="actay lg:text-[1.6vw] md:text-sm xl:text-xl  text-[2.3vw] 2xl:text-2xl">
              Hi! I'm Muhammad Hunain, a Web Designer and Web Developer from
              Karachi, Pakistan. I specialize in creating interactive, visually
              appealing websites using ReactJS, GSAP, Framer Motion, and other
              modern technologies.With a focus on front-end development, I
              design sleek, user-friendly websites that are not only functional
              but also deliver seamless digital experiences. I love adding
              animations and smooth transitions to my projects, making them
              stand out. I’ve worked on a variety of projects, including those
              featured on Awwwards, and I'm always looking for new opportunities
              to collaborate and innovate in the world of web development. Feel
              free to explore my work and connect if you'd like to collaborate!
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
