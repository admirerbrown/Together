import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";

import { MdRemoveRedEye } from "react-icons/md";
import { FaComment, FaHeart, FaLink } from "react-icons/fa6";

const HomeBlog = () => {
    return (
        <div className="bg-[#ffffff] flex flex-col gap-10 md:gap-0 lg:gap-10 items-center justify-center pt-16 xl:pt-24 2xl:gap-0 font-Open-Sans pb-10">
            <h1 className="uppercase text-[22px] md:text-[2rem] xl:text-[3rem] xl:mb-3 2xl:mb-0 font-extrabold ">
                our blog
            </h1>
            <div className="px-[3.2rem] flex  items-center justify-center flex-col gap-14 2xl:gap-0 md:gap-8 md:flex-row md:px-20 lg:px-7 xl:px-28 w-full">
                <div className="flex flex-col gap-4 md:w-[50%] 2xl:w-[35%]">

                    <div className="relative group w-[270px] md:w-[350px] lg:w-full 2xl:w-[550px] overflow-hidden">
                        <img
                            className="rounded-[0.3rem] w-full h-full"
                            src={blog1}
                            alt=""
                        />
                        <div className=" flex items-center justify-center overlay absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-20">
                            <p className="text-white text-6xl"><FaLink /></p>
                        </div>
                    </div>

                    <h2 className="text-[19px] md:text-[30px] lg:text-[27px] xl:text-[32px] leading-[1.6rem] md:leading-[2.3rem] font-bold text-[#84c54e] hover:text-[#ff6900]">
                        How Does the Bible Define Poverty?
                    </h2>

                    <div>
                        <p></p>
                    </div>

                    <p className="text-sm text-zinc-500 flex items-center gap-2">
                        August 11, 2016 | <MdRemoveRedEye className="text-[#84c54e]" />
                        718 <FaComment className="text-[#84c54e]" />2{" "}
                        <FaHeart className="text-[#84c54e]" />3
                    </p>
                    <p className="text-[13px] leading-[1.4rem] pr-2 lg:text-[14px] xl:text-[17px] 2xl:text-[16px] xl:pr-0 lg:pr-0 md:pr-10 text-zinc-400">
                        We often inquire why all the disasters and atrocities, alongside
                        poverty are happening, and – for those who believe – are allowed by
                        higher powers. Poverty has been seen for a very long time and even
                        back...
                    </p>
                    <div className="mt-4 flex items-center justify-center font-bold btn-sm h-[42px] lg:h-[48px] xl:h-[56px] xl:w-[143px] text-[12px] lg:text-[15px] xl:text-[16px] md:text-[13px] w-[120px] hover:bg-[#ff6900] bg-[#84c54e] text-white mr-2.5 border-none rounded-[0.2rem]">
                        Learn More
                    </div>
                </div>

                <div className="flex flex-col gap-4 md:w-[50%] 2xl:w-[35%] md:pt-10 lg:pt-6 xl:pt-0 2xl:mt-14 mb-5">
                    <div className="relative group w-[270px] md:w-[350px] lg:w-full 2xl:w-[550px] overflow-hidden">
                        <img
                            className="rounded-[0.3rem] w-full h-full"
                            src={blog2}
                            alt=""
                        />
                        <div className=" flex items-center justify-center overlay absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-20">
                            <p className="text-white text-6xl"><FaLink /></p>
                        </div>
                    </div>
                    <h2 className="text-[19px] md:text-[30px] lg:text-[27px] xl:text-[32px] leading-[1.6rem] md:leading-[2.3rem] font-bold text-[#84c54e] hover:text-[#ff6900]">
                        Reflections on the Tropical Deforestation Crisis
                    </h2>
                    <p className="text-sm text-zinc-500 flex items-center gap-2">
                        August 11, 2016 | <MdRemoveRedEye className="text-[#84c54e]" />
                        718 <FaComment className="text-[#84c54e]" />2{" "}
                        <FaHeart className="text-[#84c54e]" />3
                    </p>
                    <p className="text-[13px] leading-[1.4rem] pr-2 lg:text-[14px] xl:text-[17px] xl:pr-0 lg:pr-0 md:pr-10 text-zinc-400">
                        We stand for preservation of forests, protection of the climate by
                        challenging corporate power and systemic injustice through frontline
                        partnerships and strategic campaigns. We’ll never stop fighting for
                        a greener...
                    </p>
                    <div className="mt-4 flex items-center justify-center font-bold btn-sm h-[42px] lg:h-[48px] xl:h-[56px] xl:w-[143px] text-[12px] lg:text-[15px] xl:text-[16px] md:text-[13px] w-[120px] hover:bg-[#ff6900] bg-[#84c54e] text-white mr-2.5 border-none rounded-[0.2rem]">
                        Learn More
                    </div>{" "}
                </div>
            </div>
        </div>
    );
};

export default HomeBlog;
