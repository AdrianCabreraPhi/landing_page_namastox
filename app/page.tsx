"use client";
import Image from "next/image";
import { TbBrowserShare, TbArrowGuide, TbFileDatabase } from "react-icons/tb";
import namastox_portada from "./assets/screenshot_namastox.png";
import { Fade } from "react-awesome-reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import aspa from "./assets/aspa.png";
import excel_icon from "./assets/excel_icon.svg";
import word_icon from "./assets/word_icon.svg";
import keycloak_icon from "./assets/keycloak_icon.png";

import { GiPadlock } from "react-icons/gi";
export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleValueHeroText = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.5, 0]
  );
  const opacityHeroText = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  return (
    <>
      {/* home */}
      <Fade cascade delay={300}>
        <div
          id="home"
          className="h-screen w-full flex items-center  md:mt-24 justify-center md:justify-between flex-col gap-2"
        >
          <motion.div
            style={{ scale: scaleValueHeroText, opacity: opacityHeroText }}
            className="flex flex-col hero-text items-center relative gap-2"
          >
            <span className="text-6xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[#4E4384] to-[#CE5D69] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              Namastox
            </span>
            <span className="text-[#7E7E7E] w-full text-center md:w-4/6">
              Software tool for supporting the implementation of New Assessment
              Methods (NAMs) within a New Generation Risk Assessment (NGRA)
              framework.
            </span>
            <a
              href="https://namastox.upf.edu"
              target="_blank"
              className="p-[3px] relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4E4384] to-[#CE5D69] rounded-lg" />
              <div className="px-8 py-2 flex flex-row gap-2 items-center bg-white rounded-[6px] relative group transition duration-200 text-black hover:bg-transparent hover:text-white">
                Go Namastox <TbBrowserShare size={20} />
              </div>
            </a>
          </motion.div>
          <motion.div
            style={{ scale: scaleValueHeroText, opacity: opacityHeroText }}
            className="preview-software w-full flex items-center justify-center px-4"
          >
            <Image
              quality={100}
              className="w-[500px] transform  md:w-[1400px] rounded-xl shadow-2xl shadow-[#4E4384]"
              src={namastox_portada}
              alt="software"
            />
          </motion.div>
        </div>
      </Fade>
      <div id="about" className="h-screen flex flex-row w-full mt-[10vh]">
        <div className="main flex flex-row w-full justify-around">
          <div className="flex flex-col w-5/6">
            {/* <span className="text-xl md:text-4xl mb-10 text-transparent bg-clip-text bg-gradient-to-r from-[#4E4384] to-[#CE5D69]">
              About Namastox
            </span> */}

            {/* <Fade bottom delay={200}>
              <div className="md:ml-10 mb-10 transition-all duration-300 ease-in-out border-l-4 pl-2 hover:pl-4 border-gray-300  hover:border-[#4E4384]">
                <span className="text-sm  md:text-3xl leading-relaxed text-left ">
                  NAMASTOX is a computational tool for supporting the
                  implementation of New Assessment Methods (NAMs) within a New
                  Generation Risk Assessment (NGRA) framework.
                </span>
              </div>
            </Fade> */}
            {/* <Fade bottom delay={400}>
              <div className="md:ml-10  mb-10 transition-all duration-300 ease-in-out border-l-4 pl-2 hover:pl-4 border-gray-300  hover:border-[#4E4384]">
                <span className="text-sm md:text-3xl leading-relaxed text-left">
                  The application of NGRA can be complex, involve many steps,
                  and generate many pieces of evidence that are difficult to
                  integrate. Adopting this methodology would be largely
                  facilitated by using a stable, well-designed workflow, guiding
                  the user on the ordered and systematic application of these
                  steps. An example of such workflow is the ASPA workflow
                  currently being developed by the ASPIS cluster.
                </span>
              </div>
            </Fade> */}
{/* 
            <Fade bottom delay={600}>
              <div className="md:ml-10 mb-10 transition-all duration-300 ease-in-out border-l-4 pl-2 hover:pl-4 border-gray-300  hover:border-[#4E4384]">
                <span className="text-sm md:text-3xl leading-relaxed  text-left">
                  NAMASTOX was developed by one of the ASPIS cluster projects
                  (RISK-HUNT3R) specifically aiming to support the ASPA workflow
                  and facilitate its application in practice.
                </span>
              </div>
            </Fade> */}
            <div className="flex flex-col items-center justify-center mx-auto mt-40 p-20 w-full rounded bg-neutral-50  ">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E4384] to-[#CE5D69] mb-24 text-xl">what does namastox have for you?</span>
              <Fade cascade delay={200}>
              <div className="grid grid-cols-6 grid-rows-6 gap-6">
  
                <div className="col-span-2 row-span-6 w-[400px] transition-all duration-300 ease-in-out group hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] border bg-white pt-3 px-3 pb-3  rounded-l-3xl rounded-r-lg">
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-row gap-1 items-center justify-between">
                      <span className="titlecard text-lg font-medium tracking-tight text-gray-950">
                        Step-by-step guide{" "}
                      </span>{" "}
                      <TbArrowGuide
                        className="text-gray-200 transition-colors duration-300 ease-in-out group-hover:text-gray-600"
                        size={25}
                      />
                    </div>
                    <span className="text-sm/6 text-gray-600 mt-3">
                      For the user through the ASPA workflow via a simple
                      graphical interface, suggesting the most appropriate NAMs
                      (in vitro, in silico).
                    </span>
                    <div className="flex justify-center">
                      <Image
                        quality={100}
                        className="w-[250px]  flex items-center justify-center"
                        src={aspa}
                        alt="workflow"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-2 row-span-3 col-start-3 w-[400px] transition-all duration-300 ease-in-out group hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] border bg-white pt-3 px-3 pb-3  rounded-lg">
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-row gap-1 items-center justify-between">
                      <span className="titlecard text-lg font-medium tracking-tight text-gray-950">
                        Data
                      </span>{" "}
                      <TbFileDatabase
                        className="text-gray-200 transition-colors duration-300 ease-in-out group-hover:text-gray-600"
                        size={25}
                      />
                    </div>
                    <span className="text-sm/6 text-gray-600 mt-3">
                      A collection of all the data generated in the process for
                      review and documentation. Reports in standard formats can
                      be generated, facilitating the transparency of the process
                      and its adoption by regulatory bodies.
                    </span>
                    <div className="flex flex-row justify-center">
                      <Image
                        quality={100}
                        className="w-[150px]"
                        src={excel_icon}
                        alt="excel"
                      />
                      <Image
                        quality={100}
                        className="w-[150px]"
                        src={word_icon}
                        alt="word"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-2 row-span-3 col-start-3 row-start-4 w-[400px] transition-all duration-300 ease-in-out group hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] border bg-white pt-3 px-3 pb-3  rounded-lg">
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-row gap-1 items-center justify-between">
                      <span className="titlecard text-lg font-medium tracking-tight text-gray-950">
                        Security
                      </span>{" "}
                      <GiPadlock
                        className="text-gray-200 transition-colors duration-300 ease-in-out group-hover:text-gray-600"
                        size={25}
                      />
                    </div>
                    <span className="text-sm/6 text-gray-600 mt-3">
                    The application is protected with a login system based on Keycloak.
                    This also allows you to control who has access to your risk assesments.
                    </span>

                    <div className="flex flex-row justify-center">
                      <Image
                        quality={100}
                        className="w-[200px] mt-2"
                        src={keycloak_icon}
                        alt="excel"
                      />
  
                    </div>
                  </div>
                </div>
                <div className="col-span-2 row-span-6 col-start-5 row-start-1">
                  4
                </div>
              </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <div id="resources" className="h-screen w-full">
        <h1>Resources to Learn</h1>
      </div>
    </>
  );
}
