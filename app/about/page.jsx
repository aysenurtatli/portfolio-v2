import React from 'react'
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import IconList from '../components/IconList';

const About = () => {
    const programs = [
        {name: "ai", icon: SiAdobeillustrator},
        {name: "ps", icon: SiAdobephotoshop},
        {name: "figma", icon: IoLogoFigma},
        {name: "vscode", icon: VscVscode},
    ]
    const techs = [
        {name: "html", icon: FaHtml5},
        {name: "css", icon: FaCss3Alt},
        {name: "js", icon: IoLogoJavascript},
        {name: "react", icon: FaReact},
        {name: "nextjs", icon: RiNextjsFill},
        {name: "tailwind", icon: RiTailwindCssFill},
        {name: "bootstrap", icon: FaBootstrap},
    ]
    const equipments = [
        {name: 'Macbook Air (13", 2020)', src: "mac.png"},
        {name: 'Samsung 27" LC27HG70 Curved', src: "monitor.png"},
        {name: "Logitech Mx Keys Mini", src: "./keyboard.webp"},
        {name: "Logitech Lift Mouse", src: "./mouse.webp"},
    ]
  return (
    <div className='max-w-[1170px] mx-auto min-h-screen md:min-h-[calc(100vh-82.5px-65px)] px-6 py-[40px]'>
        <div>
        <h2 className='text-zinc-300 text-[30px] font-bold '>About</h2>
        <div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="md:text-[20px] text-[15px] text-zinc-400 my-[40px] max-w-3xl">
            I'm Aysenur, a Visual Communication Design graduate and a designer who is also advancing in frontend development. I enjoy combining my design knowledge with coding to create user-friendly and aesthetically pleasing interfaces.
            <br />
            <br />  
            I develop modern and functional web projects using JavaScript and React. I work on component-based structures, state management, and API integrations. Thanks to my design background, I pay close attention to user experience, color harmony, and layout.
            <br />
            <br />
            I'm always eager to learn and improve myself. I keep up with technological advancements to apply the best practices in my projects.
            </p>
            <div className=" w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full mb-[40px] md:mb-0 bg-black flex items-center justify-center overflow-hidden flex-shrink-0">
                <img src="/about.png" alt="Profile" className="w-50 h-full object-cover" />
            </div>
        </div>
            <div className='mb-[40px]'>
                <div className='flex  md:text-left gap-4 flex-col '>
                    <IconList title="Programs" items={programs}/>
                    <IconList title="Technologies" items={techs}/>
                    </div>
            </div>
            <div>
            <h3 className='text-zinc-300 text-[20px] mb-[20px] font-semibold'>Equipments</h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-5'>
                    {equipments.map((equipment, index) => (
                        <div key={index} className='flex flex-col items-center bg-zinc-900 rounded-md p-4'>
                            <img src={equipment.src} alt={equipment.name} className='w-[200px]'/>
                            <div className='text-zinc-400 text-[15px] md:text-md'>{equipment.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default About