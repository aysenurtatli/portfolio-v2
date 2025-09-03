import React from 'react'
import Image from 'next/image';
import IconList from './components/IconList';
import { programs, techs } from './data/aboutData';
import Equipments from './components/Equipments';

const About = () => {
   
  return (
    <section className='max-w-[1170px] mx-auto min-h-screen md:min-h-[calc(100vh-82.5px-65px)] px-6 py-[40px]'>
        <div>
            <h2 className='text-zinc-300 text-[30px] font-bold '>About</h2>
            <div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="md:text-[20px] text-[15px] text-zinc-300 my-[40px] max-w-3xl">
                    I'm Aysenur, a Visual Communication Design graduate and a designer who is also advancing in frontend development. I enjoy combining my design knowledge with coding to create user-friendly and aesthetically pleasing interfaces.
                    <br />
                    <br />  
                    I develop modern and functional web projects using JavaScript and React. I work on component-based structures, state management, and API integrations. Thanks to my design background, I pay close attention to user experience, color harmony, and layout.
                    <br />
                    <br />
                    I'm always eager to learn and improve myself. I keep up with technological advancements to apply the best practices in my projects.
                    </p>
                    <figure className=" w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full mb-[40px] md:mb-0 bg-black-900/10 border border-pink-200/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                        <Image 
                            src="/images/about.png"
                            alt="memoji"
                            width={125}
                            height={125} 
                            className="w-[110px] md:w-[150px] h-auto object-cover" 
                        />
                    </figure>
                </div>
                <div className='mb-[40px]'>
                    <div className='flex  md:text-left gap-4 flex-col'>
                        <IconList title="Programs" items={programs}/>
                        <IconList title="Technologies" items={techs}/>
                    </div>
                </div>
                <div>
                    <h3 className='text-zinc-300 text-[20px] mb-[20px] font-semibold'>Equipments</h3>
                    <Equipments />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About