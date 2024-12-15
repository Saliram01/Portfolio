import { React, useContext, useState } from "react";
import pic from "../assets/sa.jpeg";
import Button from "./Button";
import Resume from "./Resume";

function Home() {
  const [showResume, setShowResume] = useState(true);

  return (
    <>
    <Resume showResume={showResume} setShowResume={setShowResume}/>
      <div className="max-w-full h-[710px]">
        <div className="w-full h-full grid md:grid-cols-2 px-4 md:px-8 xl:px-32">
          <div className="grid place-content-center sm:px-34 space-y-3 lg:gap-4 xs:order-2 order-1 py-3 md:py-0 text-center md:text-start">
            <h1 className="text-xl md:text-3xl font-bold text-[#2A1454]">Hello I'm</h1>
            <h2 className="text-xl md:text-3xl lg:text-5xl font-bold text-[#4F2C96]">
              Saliram Chaudhary
            </h2>
            <p className="text-2xl font-bold text-[#4F2C96]">Web Developer</p>
            <p className="mb-4 text-xl font-bold text-[#616161]">
            I help business owners and busy web developers to design & develop creative websites that fits their vision and attracts the visitors to stay for ever.
            </p>
            <div>
              <Button title="Preview Resume" showResume={showResume} setShowResume={setShowResume}/>
            </div>
          </div>
          <div className="grid place-content-center md:order-2 py-14">
            <img
              className="w-60 md:w-[280px] rotate-6 hover:rotate-0 transition-all lg:w-[330px] border-8 border-b-green-400 rounded-3xl"
              src={pic}
              alt="image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
