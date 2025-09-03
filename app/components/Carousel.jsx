import React from 'react'
const Carousel = () => {
    const texts = [
        "Web Development",
        "UI Design",
        "Graphic Design"
      ];


  return (
    <>
      <div className="relative backdrop-blur-sm border border-white/10 text-zinc-500 shadow-sm overflow-hidden py-[30px] text-[20px] md:text-[30px] whitespace-nowrap group ">
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-zinc-950 to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-zinc-950 to-transparent pointer-events-none z-10" />
        <div className="flex space-x-10 animate-slide">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="inline-block">
              {texts.map((text, i) => (
                <React.Fragment key={i}>
                  <span className="mx-[20px] md:mx-[30px]">{text}</span>
                  <span className="bg-gradient-to-r from-red-500 via-blue-500 to-red-500 bg-400 bg-clip-text text-transparent animate-gradient-move text-[20px]">✦</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  
  
  )
}

export default Carousel