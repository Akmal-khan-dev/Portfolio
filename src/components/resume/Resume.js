import React from "react";
import Title from "../layouts/Title";
import ResumeCard from "./ResumeCard";

const Resume = () => {
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="1+ YEARS OF EXPERIENCE" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-4">
          <li className="resumeLi">Education</li>
          <li className="resumeLi">Professional Skills</li>
          <li className="resumeLi">Experience</li>
          <li className="resumeLi">Achievements</li>
        </ul>
      </div>
      <div className="flex justify-between gap-20 w-full">
        <div>
          <div className="py-12 font-titleFont">
            <p className="text-sm text-designColor tracking-[4px]">
              2005 -2023
            </p>
            <h2 className="text-4xl font-bold">Education Quality</h2>
          </div>
          <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Bs in Computer Science"
              subTitle="University of Azad Kashmir(2019-2023)"
              result="3.6/4"
              des="The training provided by universities in order to prepare the people to work in various sectors of the economy  or areas of culture."
            />
            <ResumeCard
              title="Fsc in Pre-Engineering"
              subTitle="M.Tufail Shaheed Army College Mardan(2015-2017)"
              result="74%"
              des="The training provided by universities in order to prepare the people to work in various sectors of the economy  or areas of culture."
            />
            <ResumeCard
              title="Matric in Science"
              subTitle="Sudhum Children Academy Rustam(2005-2015)"
              result="74%"
              des="The training provided by universities in order to prepare the people to work in various sectors of the economy  or areas of culture."
            />
          </div>
        </div>
        <div>
          <div className="py-12 font-titleFont">
            <p className="text-sm text-designColor tracking-[4px]">
              2021-2023
            </p>
            <h2 className="text-4xl font-bold">Job Experience</h2>
          </div>
          <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            <ResumeCard
              title="Frontend Development"
              subTitle="HTML, CSS, JS, REACT JS"
              result="90%"
              des="The training provided by universities in order to prepare the people to work in various sectors of the economy  or areas of culture."
            />
            <ResumeCard
              title="Backend Development"
              subTitle="PHP, Laravel, Node Js, Express JS, Mongo DB, Mysql"
              result="80%"
              des="The training provided by universities in order to prepare the people to work in various sectors of the economy  or areas of culture."
            />
            <ResumeCard
              title="ML Engineer"
              subTitle="Python, Pandas, Numpy, Matplotlib, Seaborn, tensorflow"
              result="74%"
              des="The training provided by universities in order to prepare the people to work in various sectors of the economy  or areas of culture."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
