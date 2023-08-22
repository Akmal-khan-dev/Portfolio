import React from "react";
import { motion } from "framer-motion"

const Skills = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}}  className="flex justify-between gap-20 w-full">
      <div className="w-1/2">
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className="text-4xl font-bold">Design Skills</h2>
        </div>
        <div className="mt-8 w-full flex flex-col gap-6 ">
          <div className="overflow-x-hidden">
            <p className="text-sm font-medium uppercase">Photoshop</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
              initial={{x:'-100%', opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:0.5, delay:0.5}}
              className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">100%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm font-medium uppercase">Figma</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
              initial={{x:'-100%', opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:0.5, delay:0.5}}
              className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">70%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm font-medium uppercase">Adobe IDesign</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
              initial={{x:'-100%', opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:0.5, delay:0.5}}
              className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">90%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm font-medium uppercase">Illustrator</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
              initial={{x:'-100%', opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:0.5, delay:0.5}}
              className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">80%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">Features</p>
          <h2 className="text-4xl font-bold">Development Skills</h2>
        </div>
        <div className="mt-8 w-full flex flex-col gap-6 ">
          <div className="overflow-x-hidden">
            <p className="text-sm font-medium uppercase">HTML CSS JS</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
              initial={{x:'-100%', opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:0.5, delay:0.5}}
              className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">90%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm font-medium uppercase">Tailwind & Bootstrap CSS</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
              initial={{x:'-100%', opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:0.5, delay:0.5}}
              className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">90%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm font-medium uppercase">React Node Express JS</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
              initial={{x:'-100%', opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:0.5, delay:0.5}}
              className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">80%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <p className="text-sm font-medium uppercase">Python</p>
            <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
              <motion.span
              initial={{x:'-100%', opacity:0}}
              animate={{x:0, opacity:1}}
              transition={{duration:0.5, delay:0.5}}
              className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
                <span className="absolute -top-7 right-0">70%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
