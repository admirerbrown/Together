/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const RenderData = ({ data }) => {
  const navigate = useNavigate();

  const handleBtnClick = ()=>{
    navigate('/donate');
  }

  return (
    <div className="flex flex-col flex-wrap gap-12 md:px-10 md:pl-[72px] md:flex-row lg:justify-start md:gap-12 lg:gap-16 lg:px-20 xl:px-0 xl:pl-0 xl:ml-0 2xl:gap-20 md:mt-10 xl:justify-center 2xl:w-[80%] ">
      {data.map((item, index) => (
        <div
          key={index+1}
          className="flex flex-col w-[350px] lg:w-[400px] xl:w-[320px] 2xl:w-[340px] items-center "
        >
          <div className="w-[240px] object-cover md:w-[320px] lg:w-[400px] xl:w-[300px] 2xl:w-[340px]">
            <img
              src={item.image}
              className="w-full h-full rounded"
              alt="banner"
            />
          </div>

          <div className=" justify-center items-center md:px-10 lg:px-0 xl:pl-2 2xl:pl-0 flex flex-col gap-7 mt-6">
            <p className="pl-14 md:pl-0 text-[18px] md:text-[22px] xl:text-[25px] font-bold text-[#84c54e] text-start w-full md:px-0 hover:text-[#ff6900]">
              {item.title}
            </p>
            <p className="px-14 text-[12.5px] md:text-[14px] xl:text-[16px] leading-[1.4rem] xl:leading-[1.6rem] md:px-0 text-left text-zinc-500">
              {item.description}
            </p>

            <div>
              <p className="text-[14px] xl:text-[16px] font-bold mb-2">
                <span className="text-[#84c54e] font-bold">${item.amount_raised}</span>{" "}
                of ${item.target} raised
              </p>
              <div className="w-[240px] md:w-[310px] lg:w-[400px] xl:w-[300px] 2xl:w-[340px] h-5 bg-[#eee] rounded-full mb-5 md:mb-8">
                <div
                  style={{ width: `${item.progress}%` }}
                  className="h-full text-center text-xs text-white bg-[#ff6900] rounded-full"
                ></div>
              </div>
              <div onClick={() => handleBtnClick()} className="mb-0 cursor-pointer flex items-center justify-center font-bold btn-sm h-[44px] w-[100px] bg-[#ffe400] hover:bg-[#84c54e] hover:text-white mr-2.5 border-none rounded">
                Donate
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderData;
