import React from "react";
import ProjectsShowcase from "./ProjectsShowcase";
import MoreProofsSection from "./MoreProofsSection";
import Awards from "./Awards";
import Githubstatic from "./Githubstatic";
import Faqs from "../../Components/Ui/Common/Faqs";
import Textanimation from "../../Components/Ui/Textaniamtion";
import { Canvas } from "@react-three/fiber";

const Projects = () => {
  // for responsive size for 3d card
  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
  // for responsive size for 3d card

  return (
    <div id="project" className="w-full mt-10 lg:mb-0  pb-10 ">
      <div className="lg:px-30 mx-auto mb-[1vw] ">
        <div className=" flex  items-center justify-center lg:mb-5 mb-4 ">
          <Textanimation
            text="Work Collection"
            classname="Satoshis font-medium lg:text-[3vw] md:text-[6vw]  text-3xl text-[#242627] lg:mb-2"
          />
        </div>

        <h5 className="Satoshis font-medium lg:text-[1.7vw] md:text-3xl text-sm text-center text-[#242627]">
          Explore my collection of dynamic and engaging UI animations crafted
          using ReactJS, GSAP ScrollTrigger, and Locomotive Scroll. From smooth
          transitions to interactive experiences, each project showcases my
          expertise in bringing static designs to life with creativity,
          precision, and seamless motion.
        </h5>
      </div>

      {/* <ProjectsShowcase/>/// */}
      <div className="md:h-150 lg:pb-10 2xl:h-screen pb-7 lg:mt-10 mt-10 md:mt-10 md:pb-10 flex items-center jusitfy-center w-full ">
   <Canvas
  dpr={[1, 1.5]}
  camera={{
    position: [0, 0, 9],
    fov: isMobile ? 25 : isTablet ? 25 : 40,
  }}
>
  <ProjectsShowcase />
</Canvas>
      </div>

      <MoreProofsSection />

      <Faqs />
      <Awards />
      <Githubstatic />
    </div>
  );
};

export default Projects;
