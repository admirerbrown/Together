import { useState, useEffect } from "react";
import CountUpAnimation from "../home/counterAnimation";

const ImpactStats = () => {
  const data = [
    {
      id: 1,
      figure: "1604",
      location: "West Africa",
      text: "Lorem ipsum dolor sit amet eiusmod inim",
    },
    {
      id: 2,
      figure: "3190",
      location: "East Africa",
      text: "Lorem ipsum dolor sit amet eiusmod inim",
    },
    {
      id: 3,
      figure: "2002",
      location: "South Africa",
      text: "Lorem ipsum dolor sit amet eiusmod inim",
    },
    {
      id: 4,
      figure: "1100",
      location: "Central Africa",
      text: "Lorem ipsum dolor sit amet eiusmod inim",
    },
  ];

  const [renderComponent, setRenderComponent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const componentToShow = document.getElementById("showStat");
      const componentPosition = componentToShow.getBoundingClientRect().top;

      if (componentPosition < window.innerHeight) {
        setRenderComponent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="showStat"
      className=" font-Open-Sans flex flex-col gap-10 lg:gap-14 mt-16 pb-20 lg:pb-28 lg:mt-20 2xl:w-full 2xl:items-center"
    >
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl xl:text-5xl">LIVES WE SAVED</h1>
        <h2 className="text-[15.5px] lg:text-xl xl:text-2xl">Our impacts is all over Africa</h2>
      </div>

      <div className="md:flex md:w-[50%] lg:w-full md:px-5 xl:px-20 2xl:justify-center 2xl:w-[70%] ">
        {data.map(
          (item) =>
            renderComponent && (
              <div key={item.id} className="flex flex-col gap-3 mb-5 md:mb-0 px-11 md:px-12 2xl:px-0">
                <h2 className="font-bold text-5xl lg:text-6xl xl:text-7xl text-[#84c54e]">
                  <CountUpAnimation duration={2000}>
                    {item.figure}
                  </CountUpAnimation>
                </h2>
                <p className="font-bold text-lg xl:text-xl 2xl:mt-5">{item.location}</p>
                <p className="text-zinc-500 text-sm md:text-xs xl:text-[14px] xl:leading-6 2xl:text-[17px] 2xl:pr-7">{item.text}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default ImpactStats;
