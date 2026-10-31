import Textanimation from "../../Components/Ui/Textaniamtion";

const Githubstatic = () => {
  return (
    <div className="w-full lg:px-0  px-4 lg:mt-0 mt-3 flex flex-col items-center justify-center ">
     <h2 className="text-center pb-3">
        <Textanimation
          text="My github Activity "
          classname="Satoshis lg:text-[2.7vw]  md:text-3xl text-lg"
        />
      </h2>

      <div
        className="
    border border-gray-500
   lg:py-11 md:py-10  lg:px-35 md:px-22 py-6 overflow-x-auto flex justify-center
    shadow-lg
    rounded-xl"
      >
        <img
          src="https://ghchart.rshah.org/hunain-dev"
          alt="GitHub Contributions"
          width={500}
          height={400}
          className="
            w-full 
            h-auto 
            object-contain 
            lg:scale-136
            md:scale-120
            scale-98
          "
          unoptimized
        />
      </div>
    </div>
  );
};

export default Githubstatic;
