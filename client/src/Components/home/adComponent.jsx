import { RiArrowRightCircleFill } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
const AdComponent = ({ image, title, text, btnText }) => {

  return (
    <div className="w-full h-[460px] md:h-[800px] lg:h-[750px] xl:h-[850px] 2xl:h-full">
      <div className="flex items-start relative w-full h-full xl:items-center">
        <div className="object-cover w-full h-full overflow-hidden">
          <img
            src={image}
            className="w-full h-full transform scale-x-150 scale-y-125"
            alt="featured add"
          />
        </div>

        <div className="absolute flex flex-col items-end md:pr-[2rem] lg:pr-0 xl:pr-[5rem] 2xl:pr-[20rem] w-full font-Open-Sans pt-[6rem] md:pt-[9rem] gap-16 md:pl-5 lg:pl-0 xl:pl-0 xl:pt-0 ">
          <div className="xl:px-0">
            <div className="flex flex-col md:flex-row md:gap-8 w-full md:w-[85%] lg:w-full items-center px-7 md:px-0 ">
              <div className=" xl:px-24 2xl:px-0 md:flex xl:gap-8 md:gap-10">
                <div className="pl-[10rem] md:pl-0">
                  <div className="w-full flex flex-col text-white gap-3">
                    <h1 className="text-[29px] md:text-[3.5rem] font-extrabold leading-[2.2rem] md:leading-[4.5rem] flex md:w-[350px] lg:w-[450px] xl:w-[400px] 2xl:w-[600px] ">
                      {title}
                    </h1>
                    <p className="text-[13px] md:text-[15px] xl:text-[16px] leading-5 text-zinc-100 w-[300px] md:w-[180px] lg:w-[260px] xl:w-[300px] 2xl:w-[450px] 2xl:leading-7 ">
                      {text}
                    </p>
                    <div className="mb-10 md:mb-0 bg-[#ffe400] hover:bg-[#ff6900] hover:text-white mt-7 md:mt-5 flex items-center justify-center pl-2 md:pl-3 font-bold btn-sm w-[170px] h-[47px] md:w-[160px] lg:w-[210px] 2xl:w-[250px] md:h-[45px] lg:h-[65px] text-[#333] border-none rounded-[0.2rem] text-[16px] md:text-[15px] lg:text-[22px] 2xl:text-[24px] ">
                      {btnText}
                      <RiArrowRightCircleFill className="ml-2 md:ml-2 text-2xl md:text-[22px] lg:text-[32px] 2xl:text-[38px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default AdComponent;
