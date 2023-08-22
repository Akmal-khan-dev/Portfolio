import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
// import Experience from "./Experience";

const Resume = () => {
  const [education, setEducation] = useState(true)
  const [skills, setSkills] = useState(false)
  const [experience, setExperience] = useState(false)
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="1+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-2">
          <li className={`${education ? "border-designColor": "border-transparent "} resumeLi`}
          onClick={()=>{
            setEducation(true)
            setExperience(false)
            setSkills(false)
          }}
          >Education & Experience</li>
          <li className={`${skills ? "border-designColor": "border-transparent "} resumeLi`}
           onClick={()=>{
            setEducation(false)
            setExperience(false)
            setSkills(true)
          }}
          >Professional Skills</li>
          {/* <li className={`${experience ? "border-designColor": "border-transparent "} resumeLi`}
           onClick={()=>{
            setEducation(false)
            setExperience(true)
            setSkills(false)
          }}
          >Experience</li> */}
         
        </ul>
      </div>
      {
        education &&  <Education/>
      }
      {
        skills &&  <Skills/>
      }
      {/* {
        experience &&  <Experience/>
      } */}
    
    </section>
  );
};

export default Resume;
