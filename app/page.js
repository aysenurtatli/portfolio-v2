import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <main className="md:min-h-[calc(100vh-80px-65px)] min-h-[calc(100vh-84px-103.5px)] flex flex-col justify-center">
      <section className="max-w-[1170px] mx-auto px-6 py-[30px] flex justify-center items-center min-h-[370px]">
        <div className="flex flex-col md:flex-row items-center justify-between p-10 gap-[80px] w-full">
          <div className="text-center md:text-left">
            <p className="md:text-[20px] text-[15px] font-medium text-zinc-300">Jr.</p>
            <h2 className=" text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-200 via-blue-300 to-yellow-200 bg-400 bg-clip-text text-transparent animate-gradient-move  ">Frontend Developer</h2>
            <p className="md:text-[20px] text-[15px] text-zinc-300 my-6">Hi 👋🏻 I'm Aysenur. I’m a Frontend Developer with a passion for building gorgeous websites.</p>
            <Link href={"/projects"}>
              <button className="text-white backdrop-blur-sm border border-white/20  rounded-lg font-mono hover:shadow-2xl px-2 md:px-5 h-16 hover:-translate-y-1 duration-200 hover:border-indigo-200">
              Wanna see my awesome projects?
              </button>
            </Link>
            
          </div>
          <figure className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full mb-[40px] md:mb-0 bg-black-900/10 border border-pink-200/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                <Image 
                  src="/images/home.png"
                  alt="home"
                  width={125}
                  height={125} 
                  className="w-[110px] md:w-[150px] h-auto object-cover" 
                />
            </figure>
        </div>
    </section>
  </main>    
  );
}
