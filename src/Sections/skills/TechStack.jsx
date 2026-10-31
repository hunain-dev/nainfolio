import { motion } from "framer-motion";
import { useRef } from "react";
import Textanimation from "../../Components/Ui/Textaniamtion";

const TechStack = () => {
  const constraintsRef = useRef(null);
  const textphyscis = [
    { text: "Html" },
    { text: "Css" },
    { text: "Javascript" },
    { text: "Reactjs" },
    { text: "Nextjs" },
    { text: "Gsap" },
    { text: "Locomotive" },
    { text: "Tailwind" },
    { text: "Threejs" },
    { text: "R3F" },
  ];

  return (
    <div id="stack" className="myskills lg:mt-[13vh] mt-9 w-full md:px-2 px-0   text-center">
      <Textanimation  text="My Skills" classname="Satoshi font-medium lg:text-[3vw] md:text-[6vw]  text-3xl text-[#242627] mb-6"/>

      <div
  ref={constraintsRef}
  className="relative w-full lg:px-2  xl:px-20  lg:pb-5 grid xl:grid-cols-5 lg:grid-cols-5 grid-cols-3 md:grid-cols-4  lg:gap-11 gap-5 md:gap-5 ">
  {textphyscis.map((elem, index) => {
    return (
  <motion.h1
  key={index}
  className="techskills  Satoshi cursor-pointer text-center border border-black  hover:bg-black hover:text-white  h-fit w-fit xl:px-12 px-9 lg:px-11 py-1 uppercase rounded-4xl xl:text-sm lg:text-sm text-[2vw] md:py-2"
  drag
  dragElastic={0.2}
  dragMomentum={true}
  dragConstraints={{
    top: 0,
    left: 0,
    right: 200,
    bottom: 50,
  }}
>
  {elem.text}
</motion.h1>
    );
  })}
</div>
    

    </div>
  );
};

export default TechStack;
