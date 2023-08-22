import React from 'react'
import Title from '../layouts/Title'
import {AiFillAppstore} from 'react-icons/ai';
import {FaMobile, FaGlobe, FaBars} from "react-icons/fa"
import {SiProgress, SiAntdesign} from "react-icons/si";

import Card from '../layouts/Card'


const Features = () => {
  return (
    <section id='features' className='w-full h-[800] py-20  border-b-[1px] border-b-black'>
      <Title title="Features" des="What I Do"/>
      <div className='grid grid-cols-3 gap-20'>
        <Card
         title="Business Strategy"
         des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In molestiae accusamus quo temporibus ipsum laboriosam iure placeat? Soluta asperiores ipsa necessitatibus commodi sunt veritatis. Soluta aut nulla recusandae praesentium! Alias?"
         icon={<FaBars/>}
        />
        
        <Card
         title="App Development"
         des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In molestiae accusamus quo temporibus ipsum laboriosam iure placeat? Soluta asperiores ipsa necessitatibus commodi sunt veritatis. Soluta aut nulla recusandae praesentium! Alias?"
         icon={<AiFillAppstore/>}
        />
        
        <Card
         title="SEO Optimizition"
         des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In molestiae accusamus quo temporibus ipsum laboriosam iure placeat? Soluta asperiores ipsa necessitatibus commodi sunt veritatis. Soluta aut nulla recusandae praesentium! Alias?"
         icon={<SiProgress/>}
        />
        
        <Card
         title="Mobile Development"
         des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In molestiae accusamus quo temporibus ipsum laboriosam iure placeat? Soluta asperiores ipsa necessitatibus commodi sunt veritatis. Soluta aut nulla recusandae praesentium! Alias?"
         icon={<FaMobile/>}
        />
        
        <Card
         title="UX Design"
         des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In molestiae accusamus quo temporibus ipsum laboriosam iure placeat? Soluta asperiores ipsa necessitatibus commodi sunt veritatis. Soluta aut nulla recusandae praesentium! Alias?"
         icon={<SiAntdesign/>}
        />
        
        <Card
         title="Hosting Websites"
         des="Lorem ipsum dolor sit amet consectetur, adipisicing elit. In molestiae accusamus quo temporibus ipsum laboriosam iure placeat? Soluta asperiores ipsa necessitatibus commodi sunt veritatis. Soluta aut nulla recusandae praesentium! Alias?"
         icon={<FaGlobe/>}
        />
        
        
      </div>
    </section>
  )
}

export default Features
