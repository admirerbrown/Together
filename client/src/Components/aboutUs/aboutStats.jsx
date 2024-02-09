import { useState, useEffect } from 'react';
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
      figure: "4590",
      location: "East Africa",
      text: "Lorem ipsum dolor sit amet eiusmod inim",
    },
    {
      id: 3,
      figure: "4292",
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
    <div id='showStat' className=" font-Open-Sans flex flex-col gap-10 mt-16 pb-20">
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-extrabold text-2xl ">LIVES WE SAVED</h1>
        <h2 className="text-[15.5px]">Our impacts is all over Africa</h2>
      </div>

      {data.map(
        (item) =>
          renderComponent && (
            <div key={item.id} className="flex flex-col gap-3 px-11">
              <h2 className="font-bold text-5xl text-[#84c54e]">
                <CountUpAnimation duration={2000}>{item.figure}</CountUpAnimation>
              </h2>
              <p className="font-bold text-lg">{item.location}</p>
              <p className="text-zinc-500 text-sm">{item.text}</p>
            </div>
          )
      )}
    </div>
  );
};

export default ImpactStats;