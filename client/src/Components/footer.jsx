import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaXTwitter, FaFacebookF, FaPinterestP } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import partner1 from '../assets/partner-1.png'
import partner2 from '../assets/partner-2.png'
import partner3 from '../assets/partner-3.png'
import partner4 from '../assets/partner-4.png'
import partner5 from '../assets/partner-5.png'

const Footer = () => {
  return (
    <div>
      <div className="bg-[#333] flex flex-col md:flex-row py-24 md:items-center md:justify-center gap-14">
        <div className="flex flex-col gap-6 2xl:w-[28%] px-12 md:px-0 text-[12.7px] 2xl:text-[15px] 2xl:mr-5">
          <img src="" alt="logo" />
          <p className="text-[#8a8a8a] leading-[1.5rem] pr-12 md:pr-0">
            Every member of together strongly believes that we can help a lot by
            donating just a little. We are committed to doing what is necessary,
            not only what is considered politically feasible, to preserve
            rainforests, protect the climate, and uphold human rights.
          </p>
          <p className="text-[#8a8a8a] pr-12">
            The number of people who have taken action with us on our campaigns is
            enormous. So join us, too!
          </p>
          <p className="text-[#84c54e]">hr@togetherfoundation.org</p>
        </div>

        <div className=" flex flex-col gap-14 font-Open-Sans font-semibold text-lg px-12">
          <div>
            <h1 className="text-[#e0e0e0] mb-7 font-bold">OUR PARTNERS</h1>
            <PartnerSlider></PartnerSlider>
          </div>
          <div>
            <h1 className="text-[#e0e0e0] mb-7 font-bold">NEWSLETTER SIGN-UP</h1>
            <div className="join ">
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered placeholder:text-xs rounded-[0.2rem] bg-[#464646] border focus:border-[#999] h-[35px]  w-[170px] 2xl:w-[420px]"
              />
              <button className="2xl:btn  2xl:btn-md ml-3 rounded-[0.2rem] h-[35px] w-[90px] border-none  font-bold text-[12px] 2xl:text-[18px] bg-[#84c54e] hover:bg-[#ff6900] text-white">Subscribe</button>
            </div>
          </div>
          <div>
            <h1 className="text-[#e0e0e0] mb-5 font-bold">CONNECT WITH US</h1>
            <ul className="socials flex text-[#acb4b6] ">
              <li className="flex justify-center  h-10 w-10  items-center   hover:text-[#84c54e]" ><FaXTwitter className="text-xl 2xl:text-3xl "></FaXTwitter></li>
              <li className="flex justify-center  h-10 w-10  items-center   hover:text-[#84c54e]"><FaFacebookF className="text-sm 2xl:text-2xl "></FaFacebookF></li>
              <li className="flex justify-center  h-10 w-10  items-center   hover:text-[#84c54e]"><TfiYoutube className="text-lg 2xl:text-2xl "></TfiYoutube></li>
              <li className="flex justify-center  h-10 w-10  items-center  hover:bg-transparent hover:text-[#84c54e]"><FaPinterestP className="text-lg 2xl:text-3xl "></FaPinterestP></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[8rem] flex items-center justify-center bg-[#0f0f0f]">
        <p className="text-[#8a8a8a] text-xs 2xl:text-sm">Built by <span className="text-[#84c54e]">Submarine-Tech</span> © 2023 All Rights Reserved.</p>
      </div>
    </div>

  );
};

const PartnerSlider = () => {
  const data = [partner2, partner1, partner3, partner4, partner5,];
  const [activeIndex, setActiveIndex] = useState(0);
  const [refreshKey, setRefreshKey] = useState(0);
  const [prevIndex, setPreviousIndex] = useState(data.length - 1);

  const changeActiveSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % data.length);
    setPreviousIndex(activeIndex);
    setRefreshKey((prevKey) => prevKey + 1);
    return refreshKey;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      changeActiveSlide();
    }, 7000);

    return () => clearInterval(intervalId);
  }, [refreshKey]);

  const filteredData = [
    ...data.slice(prevIndex + 1),
    ...data.slice(0, prevIndex + 1),
  ];

  return (
    <div>
      <div className="carousel carousel-end flex gap-5">
        {filteredData.map((item, index) => (
          <motion.div
            key={`${index}-${refreshKey}`}
            className={`carousel-item h-22 w-22 ${index === activeIndex ? "active" : ""
              }`}
            initial={{ opacity: 1, x: "100%" }}
            animate={{ opacity: 1, x: "-0%" }}
            exit={{ opacity: 1, x: "-100%", transition: { duration: 2 } }}
            transition={{ type: "spring", duration: 2 }}
          >
            <motion.img src={item} alt="Drink" className="w-full h-full" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
