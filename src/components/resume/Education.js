import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion"

const Education = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} className="flex justify-between gap-20 w-full">
      <div>
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2005 -2023</p>
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
          <p className="text-sm text-designColor tracking-[4px]">2021-2023</p>
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
    </motion.div>
  );
};

export default Education;
