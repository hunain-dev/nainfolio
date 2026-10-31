
import React, {
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";

import MoreProofsSection from "./MoreProofsSection";
import Awards from "./Awards";
import Githubstatic from "./Githubstatic";
import Faqs from "../../Components/Ui/Common/Faqs";
import Textanimation from "../../Components/Ui/Textaniamtion";

// Preload Canvas + ProjectsShowcase
const loadProjectsCanvas = () =>
  Promise.all([
    import("@react-three/fiber"),
    import("../projects/ProjectsShowcase"),
  ]).then(([{ Canvas }, { default: ProjectsShowcase }]) => ({
    default: function ProjectsCanvasInner({ isMobile, isTablet }) {
      return (
        <Canvas
          dpr={[1, 1.5]}
          camera={{
            position: [0, 0, 9],
            fov: isMobile ? 25 : isTablet ? 25 : 40,
          }}
        >
          <ProjectsShowcase />
        </Canvas>
      );
    },
  }));

// Lazy component must stay outside Projects
const ProjectsCanvas = lazy(loadProjectsCanvas);

const Projects = () => {
  // Responsive screen sizes
  const isMobile = window.innerWidth < 768;
  const isTablet =
    window.innerWidth >= 768 && window.innerWidth < 1024;

  // Canvas loading state
  const [loadCanvas, setLoadCanvas] = useState(false);
  const canvasSectionRef = useRef(null);

  // Preload 3D JavaScript modules immediately
  // useEffect(() => {
  //   loadProjectsCanvas();
  // }, []);

  // Render Canvas when Projects section approaches
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadCanvas(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "2000px 0px",
      }
    );

    const section = canvasSectionRef.current;

    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="project" className="w-full mt-10 lg:mb-0 pb-10">

      {/* Heading */}
      <div className="lg:px-30 mx-auto mb-[1vw]">
        <div className="flex items-center justify-center lg:mb-5 mb-4">
          <Textanimation
            text="Work Collection"
            classname="Satoshis font-medium lg:text-[3vw] md:text-[6vw] text-3xl text-[#242627] lg:mb-2"
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

      {/* 3D Projects Showcase */}
      <div
        ref={canvasSectionRef}
        className="md:h-150 lg:pb-10 2xl:h-screen pb-7 lg:mt-10 mt-10 md:mt-10 md:pb-10 flex items-center justify-center w-full"
      >
        {loadCanvas && (
          <Suspense
            fallback={<div className="w-full h-full" />}
          >
            <ProjectsCanvas
              isMobile={isMobile}
              isTablet={isTablet}
            />
          </Suspense>
        )}
      </div>

      <MoreProofsSection />
      <Faqs />
      <Awards />
      <Githubstatic />

    </div>
  );
};

export default Projects;
