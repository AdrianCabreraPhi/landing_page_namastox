"use client";
import Image from "next/image";
import { TbBrowserShare, TbBrandGithub } from "react-icons/tb";
import { FaRegFilePdf } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import aspa from "./assets/aspa.png";
import horizonte from "./assets/horizonte.png";
import TutorialsGuideComponent from "./components/TutorialsGuideComponent";
import guide from "./storage/ListTutorials";
export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleValueHeroText = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0.5, 0]
  );

  const opacityHeroText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      {/* home */}
      <Fade cascade delay={300}>
        <div
          id="home"
          className="h-screen flex-wrap   w-full flex items-center justify-around   flex-col  md:flex-row gap-2"
        >
          <motion.div
            style={{ scale: scaleValueHeroText }}
            className="flex flex-col hero-text items-center mt-20 gap-2"
          >
            <span className="text-6xl flex flex-row md:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[#4E4384] to-[#CE5D69] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
              Namastox
            </span>
            <span className="text-[#7E7E7E] w-full text-center ">
              A computational tool supporting the use of NGRA workflows
            </span>
            <div className="flex flex-row items-center gap-4 mb-[20vh]">
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
            className="preview-software    flex items-center justify-center"
          >
            <video
              className="w-[1000px]   rounded shadow-2xl shadow-[#4E4384]"
              autoPlay
              muted
              loop
            >
              <source src="/namastox_video.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </Fade>
      <Fade>
        <div className="more-about-namastox mask w-full flex flex-col  items-center  rounded    justify-center main gap-4 px-5 pt-64 pb-32 ">
          <Fade>
            <section className="card-information max-w-7xl transition-all    duration-300 ease-in-out hover:shadow-2xl bg-white flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.12)]   p-10 min-h-96">
              <span className="text-balance text-md md:text-xl/relaxed mb-5">
                <a
                  href="https://namastox.upf.edu"
                  target="_blank"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E4384] to-[#CE5D69]"
                >
                  NAMASTOX
                </a>
                <span className="text-[#7E7E7E] ">
                  {" "}
                  is an online software with a web-based graphical interface,
                  developed for supporting the application of the ASPA workflow
                  in practice.
                </span>
              </span>
              <hr className="border-neutral-100 mb-5" />

              <span className="text-md text-balance md:text-xl/relaxed mb-5">
                {" "}
                <span className="text-[#7E7E7E]">The</span>{" "}
                <a
                  href="https://www.risk-hunt3r.eu/aspa/"
                  target="_blank"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E4384] to-[#CE5D69]"
                >
                  ASPA workflow{" "}
                </a>{" "}
                <span className="text-[#7E7E7E]">developed by the</span>{" "}
                <a
                  href="https://aspis-cluster.eu/"
                  target="_blank"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E4384] to-[#CE5D69]"
                >
                  ASPIS cluster,
                </a>{" "}
                <span className="text-[#7E7E7E]">
                  is the interactive NGRA (New Generation Risk Assessment)
                  workflow that guides users through all steps and decisions of
                  the risk assessment process.
                </span>{" "}
              </span>
              <hr className="border-neutral-100 mb-5" />

              <span className="text-md md:text-xl/relaxed text-balance text-[#7E7E7E]">
                {" "}
                <a
                  href="https://namastox.upf.edu"
                  target="_blank"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E4384] to-[#CE5D69]"
                >
                  NAMASTOX
                </a>{" "}
                was developed by one of the ASPIS cluster projects{" "}
                <a
                  href="https://phi.upf.edu/phi/index.php/projects/risk-hunt3r/"
                  target="_blank"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E4384] to-[#CE5D69]"
                >
                  (RISK-HUNT3R)
                </a>{" "}
                specifically aiming to support the ASPA workflow and facilitate
                its application.
              </span>
            </section>
          </Fade>
          <Fade>
            <section className="card-information min-h-96 flex max-w-7xl transition-all duration-300 ease-in-out flex-col hover:shadow-2xl bg-white  rounded shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-10">
              <span className="text-md   text-balance md:text-xl/relaxed text-[#7E7E7E] mb-5">
                <a
                  href="https://namastox.upf.edu"
                  target="_blank"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E4384] to-[#CE5D69]"
                >
                  NAMASTOX
                </a>{" "}
                is open source, accesible{" "}
                <a
                  href="https://namastox.upf.edu"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E4384] to-[#CE5D69] "
                  target="_blank"
                >
                  here
                </a>{" "}
                , and can be installed in a private server, or locally on a
                desktop computer, allowing its application to sensitive data.
              </span>
              <hr className="border-neutral-100 mb-5" />
              <span className="text-md text-balance  md:text-xl/relaxed mb-5 text-[#7E7E7E] ">
                It works in most operative systems and environments, from an AWS
                cloud environment to a Windows laptop. Moreover, risk
                assessments conducted with{" "}
                <a
                  href="https://namastox.upf.edu"
                  target="_blank"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E4384] to-[#CE5D69]"
                >
                  {" "}
                  NAMASTOX
                </a>{" "}
                can be easily exported and shared.
              </span>
            </section>
          </Fade>
        </div>
      </Fade>
      <div id="about" className="flex flex-row w-full bg-gray-50  mt-32">
        <div className="main flex flex-row w-full justify-around">
          <div className="flex flex-col">
            <Fade>
              <div className="flex flex-col items-center justify-center mx-auto  w-full rounded    ">
                <Fade delay={200}>
                  <div className="mb-24 mt-10">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E4384] to-[#CE5D69]  text-xl">
                      Features
                    </span>
                  </div>
                </Fade>
                <Fade cascade delay={400}>
                  <div className="flex flex-col gap-3 w-[90vw] md:max-w-7xl md:grid md:grid-cols-6 md:grid-rows-6 md:gap-10 p-10 rounded-xl">
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
                        <span className="text-md text-gray-600 mt-3">
                          NAMASTOX allows navigating the workflow step-by-step
                        </span>
                        <span className="text-md text-gray-600 mt-3">
                          The interface shows a simplified view of the workflow
                          including only the visited nodes and the next tasks or
                          decisions, organized in blocks.
                        </span>
                      </div>
                      <Image
                        quality={100}
                        className="w-[550px] mt-[10%]"
                        src={aspa}
                        alt="workflow"
                      />
                    </div>

                    <div className="col-span-2 row-span-3 col-start-3 md:w-[350px] 2xl:w-[400px] transition-all duration-300 ease-in-out group hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] border bg-white pt-3 px-3 pb-3 rounded-lg">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-300 transition-colors duration-300 ease-in-out group-hover:text-gray-400">
                          02
                        </span>
                        <div className="flex flex-row gap-1 items-center justify-center border-b pb-1 border-gray-100">
                          <div className="flex flex-row gap-2">
                            <span className="titlecard text-lg font-medium tracking-tight text-gray-950">
                              Results
                            </span>
                          </div>
                        </div>
                        <span className="text-md text-gray-600 mt-3">
                          NAMs results can be entered in different formats and
                          levels of detail, attaching also files.
                        </span>
                        <span className="text-md text-gray-600 mt-3">
                          Decisions are documented to improve the ASPA workflow
                          transparency and reproducibility.
                        </span>
                        <span className="text-md text-gray-600 mt-3">
                          NAM results can be consulted from a centralized
                          repository.
                        </span>
                      </div>
                    </div>

                    <div className="col-span-2 row-span-3 col-start-3 row-start-4 md:w-[350px] 2xl:w-[400px] transition-all duration-300 ease-in-out group hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] border bg-white pt-3 px-3 pb-3 rounded-lg">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-300 transition-colors duration-300 ease-in-out group-hover:text-gray-400">
                          03
                        </span>
                        <div className="flex flex-row gap-1 items-center justify-center border-b pb-1 border-gray-100">
                          <div className="flex flex-row gap-2">
                            <span className="titlecard text-lg font-medium tracking-tight text-gray-950">
                              Running In silico tools
                            </span>
                          </div>
                        </div>
                        <span className="text-md text-gray-600 mt-3">
                          In silico tools (e.g., models for predicting hazard or
                          ADME properties) can be run directly from NAMASTOX.
                          The results are automatically collected.
                        </span>
                        <span className="text-md text-gray-600 mt-3">
                          QSAR Models developed in Flame can be imported
                          directly from the interface.
                        </span>
                      </div>
                    </div>

                    <div className="col-span-2 row-span-3 col-start-5 row-start-1 md:w-[350px] 2xl:w-[400px] transition-all duration-300 ease-in-out group hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] border bg-white pt-3 px-3 pb-3   md:rounded-r-3xl rounded-xl">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-300 transition-colors duration-300 ease-in-out group-hover:text-gray-400">
                          04
                        </span>
                        <div className="flex flex-row gap-1 items-center justify-center border-b pb-1 border-gray-100">
                          <div className="flex flex-row gap-2">
                            <span className="titlecard text-lg font-medium tracking-tight text-gray-950">
                              Reporting
                            </span>
                          </div>
                        </div>
                        <span className="text-md text-gray-600 mt-3">
                          At any point of the assessment NAMASTOX can generate a
                          report in standard formats like Word or Excel,
                          presenting all the results in a clear and organized
                          way.
                        </span>
                        <span className="text-md text-gray-600 mt-3">
                          This report contains live links to attached files and
                          documents.
                        </span>
                      </div>
                    </div>

                    <div className="col-span-2 row-span-3 col-start-5 row-start-4 md:w-[350px] 2xl:w-[400px] transition-all duration-300 ease-in-out group hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] border bg-white pt-3 px-3 pb-3 md:rounded-r-3xl rounded-xl">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-300 transition-colors duration-300 ease-in-out group-hover:text-gray-400">
                          05
                        </span>
                        <div className="flex flex-row gap-1 items-center justify-center border-b pb-1 border-gray-100">
                          <span className="titlecard text-lg font-medium tracking-tight text-gray-950">
                            Uncertainty management
                          </span>
                        </div>
                        <span className="text-md text-gray-600 mt-3">
                          NAMASTOX can be installed as a freely accessible tool
                          on the Internet, in a private server, or locally on a
                          desktop computer.
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
          <div className="w-full flex flex-col items-center justify-center  mb-10">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4E4384] to-[#CE5D69]  text-xl">
              Documentation
            </span>
          </div>
        </Fade>
        <div
          onClick={() => {
            window.open("/quickstarting.pdf", "_blank");
          }}
          className=" justify-center mb-10 cursor-pointer group transition-all ease-in-out duration-300 hover:bg-gray-50 p-2 rounded flex flex-row gap-1 items-center"
        >
          <FaRegFilePdf
            className="text-red-400 transition-all duration-300 ease-in-out group-hover:text-red-500"
            size={30}
          />
          <span className="text-sm text-gray-400 transition-all duration-300 ease-in-out group-hover:text-neutral-700 ">
            quickstarting.pdf
          </span>
        </div>

        <TutorialsGuideComponent guide={guide} />
      </div>
      <Fade triggerOnce>
        <footer className=" w-full  border-t border-dashed flex flex-col md:flex-row items-center justify-around text-neutral-600 py-3">
          <div className="flex flex-row gap-2">
            <Image
              className="w-[250px]  rounded-r"
              src={horizonte}
              alt="horizonte 2020"
            />
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
              <span className="text-sm text-balance">
                This project has received funding from the European Union’s
                Horizon 2020 research and innovation programme under grant
                agreement No 964537.
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className=" md:text-center text-sm md:text-current mt-2 md:mt-0">
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
