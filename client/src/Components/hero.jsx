/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { RiArrowRightCircleFill } from "react-icons/ri";
import { useState, useEffect } from 'react';
import { carouselData } from '../db/carouselData';

const HeroSection = () => {
  return (
    <>
      <Carousel data={carouselData}></Carousel>
    </>
  );
}


const Carousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [refreshKey, setRefreshKey] = useState(0);

  const changeActiveSlide = (newIndex) => {
    setActiveIndex(newIndex);
    setRefreshKey((prevKey) => prevKey + 1);

  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (activeIndex + 1) % data.length;
      changeActiveSlide(nextIndex);
    }, 7000);

    // Clear the interval when the component is unmounted or when data changes
    return () => clearInterval(intervalId);
  }, [activeIndex, data]);



  return (
    <div className=" carousel w-full h-[600px] md:h-[500px] lg:h-[565px] xl:h-[640px] 2xl:h-[773px]">
      {data.map((info, index) => (
        <div key={index} id={`slide${index + 1}`} className={`flex object-cover items-center carousel-item relative w-full h-full ${index === activeIndex ? 'block' : 'hidden'}`}>
          <div className=" object-cover w-full h-full">
            <img src={info.image} className='w-full h-full' alt={`Slide ${index + 1}`} />

          </div>

          <motion.div className="absolute  pl-3 flex flex-col w-full transform md:pl-[100px] 2xl:pl-[325px] items-center md:items-start 2xl:justify-start" key={refreshKey}>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              exit={{ opacity: 0, y: 50 }}
              className=" text-xl md:text-lg xl:text-2xl 2xl:text-2xl text-white font-bold font-Open-Sans capitalize"
            >
              {info.category}
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-white text-[52px] md:text-[58px] xl:text-[80px] 2xl:text-[100px] w-full leading-[1.2] font-[800] md:w-[55%] lg:w-[50%] 2xl:w-[45%] font-Open-Sans"
            >
              {info.text}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 1 }}
              className="bg-[#ff6900] mt-10 flex items-center justify-center font-bold btn-sm h-[75px] md:w-[250px] md:h-[60px]  xl:h-[85px] w-[280px] xl:w-[350px] text-white hover:bg-[#84c54e] mr-2 border-none rounded-[0.2rem] md:text-[16px] text-[20px] xl:text-[22px] 2xl:text-[26px]"
            >
              How You Can Help? <RiArrowRightCircleFill className="ml-4 text-2xl xl:text-4xl " />
            </motion.div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default HeroSection;