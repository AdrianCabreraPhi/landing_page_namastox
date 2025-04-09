"use client";
import Image from "next/image";
import {
  TbBrowserShare,
  TbArrowGuide,
  TbFileDatabase,
  TbInfoSmall,
  TbBrandGithub,
  TbBrandLinkedin,
} from "react-icons/tb";
import { FaRegFilePdf } from "react-icons/fa";
import { GrInstall } from "react-icons/gr";
import namastox_portada from "./assets/screenshot_namastox.png";
import { Fade } from "react-awesome-reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import aspa from "./assets/aspa.png";
import excel_icon from "./assets/excel_icon.svg";
import word_icon from "./assets/word_icon.svg";
import keycloak_icon from "./assets/keycloak_icon.png";
import { GiPadlock } from "react-icons/gi";
import { HoverEffect } from "./components/ui/card-hover-effect";
import adrian from "./assets/adrian.jpeg";
import manuel from "./assets/manuel.jpeg";
import { AnimatedTooltip } from "./components/ui/animated-tooltip";
import logo_ue from "./assets/ue.webp";
import horizonte from "./assets/horizonte.png";
const tutorials = [
  {
    title: "Create a new RA",
    link: "https://drive.google.com/file/d/17FPzaVE1tzNcwi3nP1jXF43jvoSx1Xpw/view",
  },
  {
    title: "Executing a task",
    link: "https://drive.google.com/file/d/1TaPsgqTesrx2kdPxViZ2nO3Bfq6LCNuH/view",
  },
  {
    title: "Making decisions",
    link: "https://drive.google.com/file/d/1xKlXPA0fk0a--rHdeo1W1GtFjNGrPDlL/view",
  },
  {
    title: "Review results and decisions",
    link: "https://drive.google.com/file/d/1a57Q-YlWtUpAKSPjYFTB80LOMO7drdDY/view",
  },
  {
    title: "Generating reports",
    link: "https://drive.google.com/file/d/1Y5dfElFdavgh5JqWUpmr0KbRrtDuf-Hp/view",
  },
  {
    title: "Project management",
    link: "https://drive.google.com/file/d/1AKXig2ASWMTS5iLqF-n2LQ865ZRzGilQ/view",
  },
];

const people = [
  {
    id: 1,
    name: "Manuel Pastor",
    designation: "Head of PharmacoInformatics",
    image: manuel,
  },
  {
    id: 2,
    name: "Adrian Cabrera",
    designation: "Full Stack Developer",
    image: adrian,
  },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleValueHeroText = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.5, 0]
  );

  const opacityHeroText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const openPDF = () => {
    window.open("/quickstarting.pdf", "_blank");
  };

  return (
    <>
      {/* home */}
      <Fade cascade delay={300}>
        <div
          id="home"
          className="h-screen  w-full flex items-center  lg:mt-24 justify-around sm:justify-between flex-col gap-2"
        >
          <motion.div
            style={{ scale: scaleValueHeroText }}
            className="flex flex-col hero-text items-center  relative gap-2"
          >
            <span className="text-6xl md:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[#4E4384] to-[#CE5D69] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              Namastox
            </span>
            <span className="text-[#7E7E7E] w-full text-center md:w-4/6">
              Software tool for supporting the implementation of New Assessment
              Methods (NAMs) within a New Generation Risk Assessment (NGRA)
              framework.
            </span>
            <div className="flex flex-row items-center gap-4">
              <a
                href="https://github.com/phi-grib/namastox"
                target="_blank"
                className=" cursor-pointer   bg-transparent"
              >
                <div className="social-links group flex flex-row transition-colors duration-300 ease-in-out hover:bg-neutral-50 gap-2 rounded-xl px-8 py-2 border border-dashed">
                  <TbBrandGithub
                    className="text-gray-400 transition-color duration-300 ease-in-out group-hover:text-gray-950"
                    size={27}
                  />
                </div>
              </a>
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
            </div>
          </motion.div>
          <motion.div
            style={{ scale: scaleValueHeroText, opacity: opacityHeroText }}
            className="preview-software w-full flex items-center justify-center px-4"
          >
            <Image
              quality={100}
              className="w-[100vw] transform  lg:w-[60vw] rounded-xl shadow-2xl shadow-[#4E4384]"
              src={namastox_portada}
              alt="software"
            />
          </motion.div>
        </div>
      </Fade>
      <div id="about" className=" flex flex-row w-full">
        <div className="main flex flex-row w-full justify-around">
          <div className="flex flex-col">
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
            <Fade>
              <div className="flex flex-col items-center justify-center mx-auto  w-full rounded    ">
                <Fade delay={200}>
                  <div className="mb-24">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E4384] to-[#CE5D69]  text-xl">
                      Features
                    </span>
                  </div>
                </Fade>
                <Fade cascade delay={400}>
                  <div className="flex flex-col gap-3 w-[90vw] md:max-w-7xl  md:grid md:grid-cols-6 md:grid-rows-6 md:gap-6">
                    <div className="col-span-2 row-span-6 md:w-[350px] 2xl:w-[400px] transition-all duration-300 ease-in-out group hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] border bg-white pt-3 px-3 pb-3 rounded-xl md:rounded-l-3xl md:rounded-r-lg flex flex-col">
                      <div className="flex flex-col">
                      <span className="text-sm text-gray-300 transition-colors duration-300 ease-in-out group-hover:text-gray-400">
                              01
                            </span>
                        <div className="flex flex-row gap-1 items-center justify-center border-b pb-1 border-gray-100">
                          <div className="flex flex-row gap-2">
                        
                            <span className="titlecard text-lg font-medium tracking-tight text-gray-950">
                              Guidance
                            </span>
                          </div>
                  
                        </div>
                        <span className="text-sm/6 text-gray-600 mt-3">
                          NAMASTOX allows navigating the workflow step-by-step
                        </span>
                        <span className="text-sm/6 text-gray-600 mt-3">
                          The interface shows a simplified view of the workflow
                          including only the visited nodes and the next tasks or
                          decisions, organized in blocks.
                        </span>
                      </div>

                      {/* La clase mt-auto empuja la imagen hacia el final del contenedor flex */}
                      <Image
                        quality={100}
                        className="w-[550px] mt-[10%] "
                        src={aspa}
                        alt="workflow"
                      />
                    </div>

                    <div className="col-span-2 row-span-3 col-start-3 md:w-[350px] 2xl:w-[400px] transition-all duration-300 ease-in-out group hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] border bg-white pt-3 px-3 pb-3  rounded-lg">
                      <div className="flex flex-col">
                      <span className="text-sm text-gray-300 transition-colors duration-300 ease-in-out group-hover:text-gray-400 ">
                              02
                            </span>
                        <div className="flex flex-row gap-1 items-center justify-center border-b pb-1 border-gray-100">
                          <div className="flex flex-row gap-2">
                       
                            <span className="titlecard text-lg font-medium tracking-tight text-gray-950">
                            Results
                          </span>{" "}
                          </div>
            
                    
                        </div>
                        <span className="text-sm/6 text-gray-600 mt-3">
                        NAMs results can be entered in different formats and levels of detail, attaching also files. Decisions are documented to improve the ASPA workflow transparency and reproducibility.
                        </span>
               <span className="text-sm/6 text-gray-600 mt-3">
               NAM results can be consulted from a centralized repository.
               </span>
                      </div>
                    </div>
                    <div className="col-span-2 row-span-3 col-start-3 row-start-4 md:w-[350px] 2xl:w-[400px] transition-all duration-300 ease-in-out group hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] border bg-white pt-3 px-3 pb-3  rounded-lg">
                      <div className="flex flex-col">
                      <span className="text-sm text-gray-300 transition-colors duration-300 ease-in-out group-hover:text-gray-400 ">
                              03
                            </span>
                        <div className="flex flex-row gap-1 items-center justify-center border-b pb-1 border-gray-100">
                        <div className="flex flex-row gap-2">
                    
                        <span className="titlecard text-lg font-medium tracking-tight text-gray-950">
                        Running In silico tools
                          </span>
                            </div>
                 
                        </div>
                        <span className="text-sm/6 text-gray-600 mt-3">
                        In silico tools (e.g., models for predicting hazard or ADME properties) can be run directly from NAMASTOX. The results are automatically collected.
                        </span>

                        <span className="text-sm/6 text-gray-600 mt-3">
                        QSAR Models developed in Flame can be imported directly from the interface.
                        </span>
                      </div>
                    </div>
                    <div className="col-span-2 row-span-6 col-start-5 row-start-1 md:w-[350px] 2xl:w-[400px] transition-all duration-300 ease-in-out group hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] border bg-white pt-3 px-3 pb-3  md:rounded-r-3xl rounded-xl md:rounded-l-lg">
                      <div className="flex flex-col justify-between gap-5">
                      <span className="text-sm text-gray-300 transition-colors duration-300 ease-in-out group-hover:text-gray-400 ">
                              04
                            </span>
                        <div className="flex flex-row gap-1 items-center justify-center border-b pb-1 border-gray-100">
                        <div className="flex flex-row gap-2 ">
                     
                        <span className="titlecard text-lg font-medium tracking-tight text-gray-950 ">
                        Reporting
                          </span>
                            </div>
                   
                        </div>
                        <span className="text-sm/6 text-gray-600  mt-3">
                        At any point of the assessment NAMASTOX can generate a report in standard formats like Word or Excel, presenting all the results in a clear and organized way.
                        </span>
                        <span className="text-sm/6 text-gray-600 mt-3">
                        This report contains live links to attached files and documents.
                        </span>

                        <span className="text-sm text-gray-300 transition-colors duration-300 ease-in-out group-hover:text-gray-400 ">
                              05
                          </span>
                   
                        <div className="flex flex-row items-center justify-center border-b pb-1 border-gray-100">
                  
                        <span className="titlecard text-lg  font-medium tracking-tight text-gray-950">
                        Uncertainty management
                          </span>
                            </div>
                   
                    

                        <span className="text-sm/6 text-gray-600 ">
                          NAMASTOX can be installed as a freely accessible tool
                          on the Internet, in a private server, or locally on a
                          desktop computer
                        </span>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <div
        id="resources"
        className="flex flex-col items-center  pt-64 justify-center w-full  mb-64"
      >
        <Fade cascade delay={200}>
          <div className="w-full flex flex-col items-center justify-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E4384] to-[#CE5D69]  text-xl">
              Documentation
            </span>
            <div
              onClick={openPDF}
              className=" mt-4 cursor-pointer group transition-all ease-in-out duration-300 hover:bg-gray-50 p-2 rounded flex flex-row gap-1 items-center"
            >
              <FaRegFilePdf
                className="text-red-400 transition-all duration-300 ease-in-out group-hover:text-red-500"
                size={30}
              />
              <span className="text-sm text-gray-400 transition-all duration-300 ease-in-out group-hover:text-neutral-700 ">
                quickstarting.pdf
              </span>
            </div>
          </div>
        </Fade>
        <Fade cascade delay={300}>
          <div className="max-w-6xl mx-auto px-8">
            <HoverEffect items={tutorials} />
          </div>
        </Fade>
      </div>
      <Fade triggerOnce>
        <footer className=" w-full  border-t border-dashed flex flex-row items-center justify-around text-neutral-600 py-3">
          <div className="flex flex-row gap-2">
            <div className="flex flex-row">
              <Image
                className="w-[100px] rounded-l"
                src={logo_ue}
                alt="logo europe union"
              />

              <Image
                className="w-[120px] rounded-r"
                src={horizonte}
                alt="horizonte 2020"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-md font-bold">Acknowledgments</span>
              <span className="text-sm text-neutral-500">
                Namastox has been developed for the project RISKHUNT3R{" "}
                <a
                  className="text-neutral-600 transition-colors duration-300 ease-in-out hover:text-neutral-700"
                  href="https://www.risk-hunt3r.eu/"
                  target="_blank"
                >
                  (https://www.risk-hunt3r.eu/)
                </a>{" "}
              </span>
              <span className="text-sm text-neutral-500">
                This project has received funding from the European Union’s
                Horizon 2020 research and innovation programme under grant
                agreement No 964537.
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-row">
              <AnimatedTooltip items={people} />
            </div>
            <span className="text-center text-sm md:text-current">
              {" "}
              © Developed by Pharmacoinformatics Group of{" "}
              <a
                href="https://phi.upf.edu/phi/"
                target="_blank"
                className="text-neutral-500  transition-colors duration-300 ease-in-out hover:text-neutral-700 font-semibold rounded-[50px] p-2 bg-neutral-100"
              >
                UPF
              </a>{" "}
            </span>
          </div>
        </footer>
      </Fade>
    </>
  );
}
