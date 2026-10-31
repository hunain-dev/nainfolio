import React from "react";

const Textanimation = ({ text, classname,href }) => {
  return (
    <div
      className={`relative inline-block  overflow-hidden cursor-pointer group ${classname}`}
    >
      {/* Top Text (visible initially) */}
      <a href={href} className="font-[400] block transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-full">
        {text}
      </a>

      {/* Bottom Text (hidden initially, slides in on hover) */}
      <a  href={href}   className="font-[400] block absolute left-0 top-full w-full text-center transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-full"
      >
        {text}
      </a>
    </div>
  );
};

export default Textanimation;