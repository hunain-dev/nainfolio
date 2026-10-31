import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Button from "./Ui/Button";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Textanimation from "./Ui/Textaniamtion";
const Footer = () => {
  const icons = [
    {
      icon: <FaLinkedin />,
      Link: "https://www.linkedin.com/in/muhammad-hunain-khan/",
    },
    { icon: <FaGithub />, Link: "https://github.com/hunain-dev" },
    { icon: <FaEnvelope />, Link: "mailto:huniiali1122@gmail.com" },

  ];


  
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const width = text.offsetWidth;

    gsap.fromTo(
      text,
      { x: 30 },
      {
        x: -width,
        duration: width / 30, // adjust speed
        repeat: -2,
        ease: "linear",
      }
    );
  }, []);

  return (
    <div id="contact" className="min-h-full    lg:mt-2 mt-0 w-full">


      <div className="h-full w-full  flex items-center overflow-hidden lg:text-[13vw] text-[18vw] ">
        {/* Duplicate text manually for seamless loop */}
        <div ref={textRef} className="actay tracking-tighter flex whitespace-nowrap  actay">
        {`Let's create something extra ordinary together `}
          {`Let's create something extra ordinary together `}
          </div>

        <div className="actay not-first:flex tracking-tighter whitespace-nowrap ">
        {`Let's create something extra ordinary together `}
        {`Let's create something extra ordinary together `}
        </div>
        <div className="actay flex whitespace-nowrap tracking-tighter ">
        {`Let's create something extra ordinary together `}
        {`Let's create something extra ordinary together `}
        </div>
        <div className="actay flex whitespace-nowrap tracking-tighter  ">
        {`Let's create something extra ordinary together `}
          {`Let's create something extra ordinary together `}
          </div>
        <div className="actay flex whitespace-nowrap tracking-tighter ">
        {`Let's create something extra ordinary together `}
        {`Let's create something extra ordinary together `}
        </div>
      </div>



      
      <div className="relative flex  z-99  h-fit    lg:py-12 xl:py-9 2xl:py-14 ">
        {/* Main Content */}
        <div className=" w-full mx-auto  grid lg:grid-cols-2 md:grid-cols-2  ">
          <div className="actay w-full h-full  px-3 py-3">
        <div className="h-fit mt-6 lg:w-fit ">
      <Button
      href={`https://wa.me/923252991455?text=${encodeURIComponent("Hello Hunain")}`}
        btntext="0325-2991455"
        classname="uppercase px-15 py-2 bg-[#BBFD6A]"
        type="button"
        
      />
</div>
       </div>
          <div className="h-full px-7 py-3 cursor-pointer  flex lg:items-end items-center  lg:justify-right md:items-end md:justify-right flex-col">
            <div className="flex flex-row gap-4 mt-2 md:mt-4 ">
              {icons.map((item, idx) => (
                <a
                  key={idx}
                  href={item.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  
                  <div
                    className="w-11 h-11 flex items-center justify-center rounded-full cursor-pointer shadow-lg transition-transform duration-500 border border-black hover:scale-125 hover:rotate-12 hover:shadow-2xl"
                    style={{ backgroundColor: item.color }}
                  >
                    <div className="text-black text-2xl">{item.icon}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Footer;
