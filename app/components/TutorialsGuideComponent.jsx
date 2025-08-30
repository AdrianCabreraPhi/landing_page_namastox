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
    <div className="rounded-md border hover:border-neutral-100 transition-all duration-300 ease-in-out border-neutral-50 gap-12 p-10 flex flex-col w-3/4  overflow-hidden">
  

      <div className="flex flex-row flex-wrap gap-10 justify-center">
        {guide.map((element, index) => (
          <button
          key={index}
            onClick={() => setActive(index)}
            className="cursor-pointer group flex flex-row gap-1.5 h-[30px] items-end"
          >
            <span
              className={`${
                active == index ? "text-gray-900" : "text-gray-300"
              } self-start  transition-all duration-300 ease-in-out group-hover:text-gray-900`}
            >
              {index > 0 && index}
            </span>{" "}
            {element.title}
          </button>
        ))}
      </div>
      <div className="flex flex-row items-center gap-5 justify-center">

      <button onClick={()=> {(active-1) >= 0 ? setActive(active-1) : ""}}  className="group cursor-pointer">
        <span className="text-4xl duration-300 ease-in-out transition-all group-hover:text-black text-gray-200">
          {"<"}
        </span>
        </button>

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

        <button onClick={()=> {(active+1) < guide.length ? setActive(active+1) : ""}} className="group cursor-pointer">
        <span className="text-4xl duration-300 ease-in-out transition-all group-hover:text-black text-gray-200">
          {">"}
        </span>
        </button>

      </div>

    </div>
  );
}

export default TutorialsGuideComponent;
