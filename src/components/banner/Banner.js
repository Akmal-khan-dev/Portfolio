import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner"



const Banner = () => {
 
  return (
    <section
      id="home"
      className="w-full h-[800px]  py-20 border-b-[1px] flex border-b-black"
    >
      
         <LeftBanner/>
         <RightBanner/>
         
      
    </section>
  );
};

export default Banner;
