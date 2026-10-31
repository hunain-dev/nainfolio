// import Faqs from "./Faqs";

const Ourservices = () => {
  return (
    <div  id="services" className="w-full lg:mt-[8vh] mt-[8vh] h-full relative bg-[#689D48]">

      {/* Top Section */}
      <div className="w-full  px-[1vw] text-center">
        <h2 className="Impacted font-medium lg:text-[12vw] md:text-[14vw] text-5xl lg:leading-[12vw] uppercase text-white">
          Our Services,
        </h2>
        <h2 className="Impacted font-medium lg:text-[13vw] text-5xl lg:leading-[12vw] md:leading-[12vw] md:text-[13vw] leading-12 uppercase text-white">
          WHAT I OFFER, & WHY CHOOSE ME
        </h2>
      </div>

      {/* Bottom Section */}
      <div className=" w-full">
        <div className="h-full w-full bg-[#e0e05f] flex items-center justify-center overflow-hidden border border-black">
          <div className="flex items-center justify-center w-full lg:h-[183vh] mt-[-10vw] overflow-hidden" data-scroll data-scroll-speed="0.4">
          <img
  src="assets/images/Ourservicesimages.webp"
  alt="Service 1"
  className="
    object-contai object-center
    w-60 h-100      
    md:w-110 md:h-210   /* Small Laptop */
    lg:w-230 lg:h-240   /* Desktop */
    xl:w-300 xl:h-250   /* Desktop */
    2xl:w-300 2xl:h-260   /* Desktop */

  "
  loading="lazy"

/>
<img
  src="assets/images/Ourservicesimages1.webp"
  alt="Service 1"
  className="
    object-contai object-center
    w-60 h-100      
        /* Mobile */
    md:w-110 md:h-210   /* Small Laptop */
    lg:w-230 lg:h-230   /* Desktop */
    xl:w-300 xl:h-250   /* Desktop */
  "
  loading="lazy"
/>        </div>
        </div>
      </div>

      {/* FAQ Section */}
      {/* <Faqs/> */}
    

    </div>
  );
};

export default Ourservices;
