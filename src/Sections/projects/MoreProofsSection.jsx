  "use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MoreProofsSection = () => {
  const containerRef = useRef(null);
  const needRef = useRef(null);
  const moreRef = useRef(null);
  const proofRef = useRef(null);
  const youRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%", // scroll length
        pin: true,
        scrub:4,
      },
    });


    tl.fromTo(
      youRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2 }
    ).to(youRef.current, { opacity: 0, y: -20, duration: 2 });
    // Need animation
    tl.fromTo(
      needRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    ).to(needRef.current, { opacity: 0, y: -20, duration: 1 });

    // More animation
    tl.fromTo(
      moreRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2 }
    ).to(moreRef.current, { opacity: 0, y: -20, duration: 2 });

    // Proof animation
    tl.fromTo(
      proofRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2 }
    ).to(proofRef.current, { opacity: 0, y: -20, duration: 2 });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen w-full flex items-center justify-center bg-[#F55A00] relative overflow-hidden"
    >
      {/* Need */}

      <h1
        ref={youRef}
        className="absolute text-white Morganites lg:text-[35vw] text-[41vh] md:text-[40vh] uppercase"
      >
        You
      </h1>

      <h1
        ref={needRef}
        className="absolute text-white Morganites lg:text-[35vw] text-[41vh] md:text-[40vh] uppercase"
      >
        Need
      </h1>

      {/* More */}
      <h1
        ref={moreRef}
        className="absolute text-white Morganites lg:text-[35vw] text-[41vh] md:text-[40vh] uppercase"
      >
        More
      </h1>

      {/* Proof */}
      <h1
        ref={proofRef}
        className="absolute text-white Morganites lg:text-[35vw] text-[31vh] md:text-[40vh] uppercase"
      >
        Proof?
      </h1>
    </div>
  );
};

export default MoreProofsSection;
