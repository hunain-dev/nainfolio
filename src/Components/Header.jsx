import React, { useEffect, useRef, useState } from "react";
import { VscMenu } from "react-icons/vsc";
import Textanimation from "./Ui/Textaniamtion";
import { FaLocationArrow } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import gsap from "gsap";
import { motion } from "framer-motion";
import { locoRef } from "../hooks/SmoothScrolling";

const Header = () => {
  const [MEnuoepn, setMEnuoepn] = useState(false);
  const menuRef = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    // Set initial state so it's hidden but exists in the DOM
    gsap.set(menuRef.current, {
      scaleY: 0,
      transformOrigin: "top center",
      autoAlpha: 0,
      display: "none",
    });

    tl.current = gsap
      .timeline({ paused: true })
      // Animate the menu container to scale up from bottom like a TV
      .to(menuRef.current, {
        scaleY: 1,
        autoAlpha: 1,
        display: "grid",
        duration: 0.9,
        scrub: true,
        ease: "power4.inOut",
      })
      // Stagger the text items appearance inside
      .fromTo(
        ".menu-item",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          delay: 0.5,
          opacity: 1,
          stagger: 0.3,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.3",
      )
      // Animate the resume section at the end
      .fromTo(
        ".resume-section",
        {
          opacity: 0,
          scale: 0.9,
          y: 20,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.5)",
        },
        "-=0.3",
      );
  }, []);

  useEffect(() => {
    if (MEnuoepn) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [MEnuoepn]);

  const obj = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#aboutus" },
    { text: "Stack", href: "#stack" },
    { text: "Services", href: "#services" },
    { text: "Project", href: "#project" },
  ];

  const textobj = [
    {
      text: "Catch me, I’m yours.",
    },
    {
      text: "Catch me, I’m yours.",
    },
    {
      text: "Catch me, I’m yours.",
    },
    {
      text: "Catch me, I’m yours.",
    },
    {
      text: "Catch me, I’m yours.",
    },
    {
      text: "Catch me, I’m yours.",
    },
    {
      text: "Catch me, I’m yours.",
    },
    {
      text: "Catch me, I’m yours.",
    },
    {
      text: "Catch me, I’m yours.",
    },
    {
      text: "Catch me, I’m yours.",
    },
    {
      text: "Catch me, I’m yours.",
    },
    {
      text: "Catch me, I’m yours.",
    },
  ];

  // for smooth scrolling to section
  const scrollToSection = (href) => {
    locoRef.current?.scrollTo(href, {
    duration: 5,
    offset: -80,
    });
  };

  return (
    <div className=" lg:px-0 px-2 w-full  lg:py-3 py-3  flex-col items-center gap-1 justify-center top-0 left-1/2 -translate-x-1/2 flex fixed z-999">
      {/* We keep the menu in the DOM always, but handle visibility with GSAP */}

      {/* main menu */}
      <div className="actay p-1  cursor-pointer lg:w-sm md:w-md 2xl:w-md w-full   rounded-1xl lg:px-3 px-2  overflow-hidden   bg-[#201D1D] grid grid-cols-2">
        <div className=" h-full flex items-center  justify-start gap-1 text-white">
          <div
            onClick={() => {
              setMEnuoepn((prev) => !prev);
            }}
            className=" rounded-[0.3vw] p-1  text-white flex items-center justify-center"
          >
            {MEnuoepn ? (
              <IoCloseOutline className="lg:text-[1.6vw] text-1xl md:text-2xl " />
            ) : (
              <VscMenu className="lg:text-[1.5vw] text-1xl md:text-2xl -mt-1  " />
            )}
          </div>
          <h2 className="lg:text-[1.1vw] text-1xl md:text-2xl">Menu</h2>
        </div>
        <a
          href="#contact"
          className="h-full  cursor-pointer flex items-center justify-end "
        >
          <button className="px-4 py-2 font-bold bg-[#BBFD6A]  cursor-pointer rounded-[0.3vw] lg:text-[2.1vh] text-sm md:text-lg rounded-1xl">
            Contact Us
          </button>
        </a>
      </div>

      {/* main menu */}

      {/* offer anything say something client */}

      <div className="relative w-fit overflow-hidden  lg:opacity-100 opacity-0 bg-[#A0FD62]">
        {/* Width determine karne ke liye sirf 3 items */}
        <div className="flex invisible">
          {textobj.slice(0, 3).map((elem, index) => (
            <h2 key={index} className="actay text-sm">
              {elem.text}
            </h2>
          ))}
        </div>

        {/* Actual moving text */}
        <motion.div
          className="absolute  top-1 2xl:top-1 flex gap-4 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...textobj, ...textobj].map((elem, index) => (
            <h2 key={index} className="text-[1.7vh] shrink-0">
              {elem.text}
            </h2>
          ))}
        </motion.div>
      </div>

      {/* offer anything say something client */}

      {/* menu bar open */}

      <div
        ref={menuRef}
        className=" lg:w-lg  lg:py-5 md:py-10 py-4  overflow-hidden grid grid-cols-2  rounded-1xl bg-[#201D1D]"
      >
        <div className="flex justify-center  h-full w-full items-center gap-3  flex-col">
          {obj.map((elem, index) => {
            return (
              <div
                key={index}
                className="menu-item actay flex items-center justify-center w-full px-3"
              >
                <button
                  onClick={() => scrollToSection(elem.href)}
                  className="bg-[#BBFD6A] flex items-center justify-center  w-full lg:py-3 py-2 rounded-[1vw]  actay"
                >
                  <Textanimation
                    text={elem.text}
                    href={elem.href}
                    classname="actay lg:text-[1.2vw] xl:text-1xl md:text-3xl 2xl:text-md sm:text-md text-center"
                  />
                </button>
              </div>
            );
          })}
        </div>

        <div className="resume-section h-full pt-10 text-white  ">
          <div className=" w-full lg:px-10 px-5 md:px-20">
            <img
              src="/assets/images/hunain.webp"
              loading="lazy"
              className="h-full  w-full object-cover"
              alt=""
            />
          </div>
          <div className="h-fit w-full mt-3 flex items-center justify-center gap-1">
            <Textanimation
              text="Resume"
              classname="actay lg:text-[1.3vw] xl:text-1xl md:text-3xl 2xl:text-md text-center"
            />
            {/* <h2 className=' '>Resume</h2> */}
            <FaLocationArrow className="text-white  2xl:text-sm xl:text-[1.3vw] lg:text-[1.5vw] text-1xl md:text-2xl  " />
          </div>
        </div>
      </div>

      {/* menu bar open */}
    </div>
  );
};

export default Header;
