import Image from "next/image";
import { TbBrowserShare, TbBrandGithub } from "react-icons/tb";
import namastox_portada from "./assets/screenshot_namastox.png"
import { Fade } from "react-awesome-reveal";
import { cn } from "@/lib/utils";
import { BackgroundLines } from "./components/ui/background-lines";
export default function Home() {
  return (
    <>
      {/* home */}
      <Fade cascade delay={300} >
        <div id="home" className="h-screen w-full flex items-center  md:mt-24 justify-center md:justify-between flex-col gap-2">
          <div className="flex flex-col items-center relative gap-2">
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
              <span className="text-6xl   md:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[#4E4384]  to-[#CE5D69] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">Namastox</span>
            </BackgroundLines>
            <span className="text-[#7E7E7E] w-6/6 text-center md:w-4/6 ">Software tool for supporting the implementation of New Assessment Methods (NAMs) within a New Generation Risk Assessment (NGRA) framework.</span>
            <a href="https://namastox.upf.edu" target="_blank" className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#4E4384] to-[#CE5D69] rounded-lg" />
              <div className="px-8 py-2 flex flex-row gap-2 items-center  bg-white rounded-[6px]  relative group transition duration-200 text-black hover:bg-transparent hover:text-white">
                Go Namastox  <TbBrowserShare size={20} />
              </div>
            </a>
          </div>
          <div className="preview-software w-full flex items-center justify-center px-4">

            <Image className=" w-[500px] md:w-[1400px] rounded-xl shadow-2xl shadow-[#4E4384]" src={namastox_portada} alt="software " />
          </div>
        </div>
        <div id="about" className="h-screen w-full">
          <h1>About</h1>
        </div>
        <div id="resources" className="h-screen w-full">
          <h1>Resources to Learn</h1>
        </div>
      </Fade>
    </>

  );
}
