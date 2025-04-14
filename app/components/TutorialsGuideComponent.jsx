import { useState } from "react";


function TutorialsGuideComponent({ guide }) {
  const [active, setActive] = useState(0);
  const lenghtArrayVideos = guide.length;

  const nextVideo = () => {
    if((active+1) == lenghtArrayVideos  ) return 
    let nextVideo = active+1
    setActive(nextVideo)
  }
  
  return (
    <div className="rounded-md border border-gray-200 gap-12 p-10 flex flex-col w-2/3  overflow-hidden">
  

      <div className="flex flex-row gap-10 justify-center">
        {guide.map((element, index) => (
          <button
            onClick={() => setActive(index)}
            className="cursor-pointer group flex flex-row gap-1.5 h-[30px] items-end"
          >
            <span
              className={`${
                active == index ? "text-gray-900" : "text-gray-300"
              } self-start  transition-all duration-300 ease-in-out group-hover:text-gray-900`}
            >
              {index}
            </span>{" "}
            {element.title}
          </button>
        ))}
      </div>
      <div className="flex flex-row items-center justify-around">
        <video
          quality={100}
          className="rounded  shadow-md "
          src={guide[active].video}
          controls
          poster={`${active}.png`}
          preload="none"
          width={650}
          height={365} 
        ></video>

        <div className="steps flex flex-col gap-5 rounded border w-3xl min-w-[48rem] border-gray-100 h-96 overflow-y-auto p-7 ">
          {guide[active].steps.map((step,index) => (
            <span
              key={index}
              className="step p-2 transition-all duration-300 ease-in-out hover:bg-neutral-50 rounded"
            >
              {step}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center border-t border-dashed border-neutral-100">
         <button onClick={nextVideo} className="text-gray-500 mt-4 transition-all duration-300 cursor-pointer ease-in-out hover:text-black">Next</button>
        </div>
    </div>
  );
}

export default TutorialsGuideComponent;
