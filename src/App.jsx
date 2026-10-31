import React from 'react'
import TechStack from './Sections/skills/TechStack'
import Ourservices from './Sections/services/OurServices'
import Projects from './Sections/projects/Projects'
import Aboutus from "./Sections/about/Aboutus"
import Home from "./Sections/home/Home"
import { Canvas } from '@react-three/fiber'
import ProjectsShowcase from './Sections/projects/ProjectsShowcase'
const App = () => {
  return (
    <div className='lg:pt-7 pt-6 w-full'>

      {/*  front area*/}
{/* Background / Grid */}
<div className="fixed inset-0 z-0 grid grid-cols-2 pointer-events-none">
  <div className="h-full w-full border-r border-[#cbcaca]"></div>
  <div className="h-full w-full"></div>
</div>


{/* Main Content */}
<div className="relative z-10 w-full">
  
   <Home />
  <Aboutus />
  <TechStack />
  <Ourservices />
  <Projects /> 
</div>


    </div>
  )
}

export default App
