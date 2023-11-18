import { motion } from 'framer-motion';
import { RiArrowRightCircleFill } from "react-icons/ri";
import { useState, useEffect } from 'react';

const HomePage = () => {
  return (
    <div>
      <Carousel></Carousel>
    </div>
    // <motion.div className="text-right mr-24">
    //     <motion.h1
    //         initial={{ opacity: 0, y: 50 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ delay: 0.5, duration: 1 }}
    //         className="text-2xl"
    //     >
    //         community foundation
    //     </motion.h1>
    //     <motion.h2
    //         initial={{ opacity: 0, y: 50 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ delay: 1.2, duration: 1 }}
    //         className="text-9xl font-bold"
    //     >
    //         give a little.
    //     </motion.h2>
    //     <motion.h2
    //         initial={{ opacity: 0, y: 50 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ delay: 1.8, duration: 1 }}
    //         className="text-8xl font-bold"
    //     >
    //         change a lot
    //     </motion.h2>
    // </motion.div>
  );
}

const Carousel = () => {
  const data = [
    {
      category: 'community foundation',
      image: 'https://img.freepik.com/free-photo/portrait-sad-child_23-2150761628.jpg?size=626&ext=jpg&ga=GA1.1.865150467.1694076383&semt=ais',
      text: 'Feed Street Children ',


    },
    {
      category: 'orphan foundation',
      image: 'https://img.freepik.com/free-photo/african-children-standing-head-head_23-2148852701.jpg?size=626&ext=jpg&ga=GA1.1.865150467.1694076383&semt=ais',
      text: 'Give a Little. Change a Lot.',


    },
    {
      category: 'community foundation',
      image: 'https://img.freepik.com/free-photo/portrait-sad-woman_23-2150761634.jpg?size=626&ext=jpg&ga=GA1.1.865150467.1694076383&semt=ais',
      text: 'Help Senior Citizens',


    },
    {
      category: 'volunteer foundation',
      image: 'https://img.freepik.com/free-photo/successful-businessmen-seal-deal-with-firm-handshake-generated-by-ai_188544-40065.jpg?size=626&ext=jpg&ga=GA1.1.865150467.1694076383&semt=aiss',
      text: 'Why work for a Charity',


    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const changeActiveSlide = (newIndex) => {
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    // Set up auto-changing active slide interval (adjust the duration as needed)
    const intervalId = setInterval(() => {
      const nextIndex = (activeIndex + 1) % data.length;
      changeActiveSlide(nextIndex);
    }, 5000);

    // Clear the interval when the component is unmounted or when data changes
    return () => clearInterval(intervalId);
  }, [activeIndex, data]);



  return (
    <div className="carousel w-full h-[773px]">
      {data.map((info, index) => (
        <div key={index} id={`slide${index + 1}`} className={`flex items-center carousel-item relative w-full ${index === activeIndex ? 'block' : 'hidden'}`}>
          <img src={info.image} className="w-full h-[773px]" alt={`Slide ${index + 1}`} />
          <div className="z-20 absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${index}`} className="btn btn-circle">❮</a>
            <a href={`#slide${index + 2}`} className="btn btn-circle">❯</a>
          </div>

          <motion.div className="absolute flex flex-col w-full transform  pl-[325px] justify-start">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              exit={{ opacity: 0, y: 50 }}
              className="text-2xl text-white font-bold font-Open-Sans"
            >
              {info.category}
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-white text-[100px] leading-[1.2] font-[800] w-[45%] font-Open-Sans"
            >
              {info.text}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 1 }}
              className="bg-[#ff6900] mt-10 flex items-center justify-center font-bold btn-sm h-[85px] w-[350px] text-white hover:bg-[#84c54e] mr-2 border-none rounded-[0.2rem] text-[26px]"
            >
              How You Can Help? <RiArrowRightCircleFill className="ml-4 text-4xl" />
            </motion.div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default HomePage;