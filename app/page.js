import Carousel from "./components/Carousel";
import Marquee from "./components/Marquee";
import VideoComponent from "./components/video/VideoComponent";

export default function Home() {
 

  return (
    <div className="md:min-h-[calc(100vh-70px-65px)] min-h-[calc(100vh-84px-103.5px)] flex flex-col justify-center">
      <div className="max-w-[1170px] mx-auto px-6">
        <div className="py-[30px] flex justify-center items-center min-h-[370px]">
        <div className="flex flex-col md:flex-row items-center justify-between p-10 gap-[80px] w-full">
          <div className="text-center md:text-left">
            <h2 className=" text-[30px] md:text-[40px] font-medium text-zinc-200">Hi, I'm Aysenur.</h2>
            <p className="md:text-[20px] text-[15px] text-zinc-300">I’m a Frontend Developer with a passion for building gorgeous websites.</p>
          </div>
          <div>
            <VideoComponent />
          </div>
        </div>
      </div>
    </div>
    <Carousel/>
  </div>
  );
}
