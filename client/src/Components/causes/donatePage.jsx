/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import {useParams,  useNavigate} from 'react-router-dom'
import DonateForm from "./donateValues";

const Donate = () => {
  const causeData = useSelector((state) => state.cause.data);
  const navigate = useNavigate();
   const { id } = useParams();
   const numericId = parseInt(id, 10);

  const item = causeData.find((item) => item.cause_id === numericId);
  console.log({item,causeData})

 


  const verifyEmail = () => {
    console.log("coming soon");
  };


  

  return (
    <div>
      <div className="object-cover  mb-20 lg:mb-24">
        <img src={item.image} alt="" className="w-full md:h-[450px] lg:h-[550px] xl:h-[650px] 2xl:h-[700px]"/>
      </div>

      <div className="flex flex-col md:flex-row text-[#8a8a8a] xl:justify-center md:px-8 lg:px-0 xl:px-20 2xl:px-0 xl:gap-8">
        <div>
          <CauseCard item={item}></CauseCard>

          <div className="pl-12 xl:pl-10">
            <p className=" mb-2 md:pl-0 text-[22px] md:text-[22px] xl:text-[35px] font-bold text-[#333] text-start w-full md:px-0 ">
              My Donations
            </p>

            <p className="mb-3 pr-[2rem] md:w-[70%] xl:w-[90%] text-[12.5px] md:text-[14px] xl:text-[16px] leading-[1.4rem] xl:leading-[1.6rem] md:px-0 text-left text-zinc-500">
              Here you can view your donations made to support our projects.
            </p>

            <p className="mb-3 pr-[5rem]  md:w-[70%] xl:w-[90%] md:pr-0 text-[12.5px] md:text-[14px] xl:text-[16px] leading-[1.4rem] xl:leading-[1.6rem] md:px-0 text-left text-zinc-500">
              Please verify your email to access your donation history.
            </p>
            <div>
              <form action="#">
                <label
                  htmlFor="donationEmail"
                  className="text-[#8a8a8a] text-[15px] font-bold"
                >
                  Donation Email:
                </label>
                <br></br>
                <input
                  type="text"
                  id="donationEmail"
                  name="donationEmail"
                  placeholder="Email Address"
                  className=" input mt-2 mb-4 placeholder:text-xs focus:border-l-2 focus:border-r-0 focus:border-b-0 focus:border-t-2 focus:border-solid focus:outline-none focus:ring-transparent md:placeholder:text-sm xl:placeholder:text-lg rounded-[0.35rem] bg-[#eee] border-none h-[35px] xl:h-[40px] w-[280px] md:w-[260px] lg:w-[300px] xl:w-[320px] 2xl:w-[420px]"
                />

                <button
                  type="button"
                  onClick={verifyEmail}
                  className="mb-0 cursor-pointer flex items-center justify-center font-bold btn-sm h-[40px] w-[120px] hover:bg-[#ff6900] bg-[#84c54e] text-white mr-2.5 border-none rounded"
                >
                  Verify Email
                </button>
              </form>
            </div>
          </div>
        </div>

        <div>
          <DonateForm item={item}></DonateForm>
        </div>
      </div>
    </div>
  );
};

const CauseCard = ({ item }) => {

  
  return (
    <>
      <div className="flex flex-col md:mx-10 xl: 2xl:w-[350px] items-center xl:justify-center md:items-start mt-10">
        <div className="w-[285px] object-cover md:w-[260px] lg:w-[300px] xl:w-[350px] 2xl:w-[340px]">
          <img
            src={item.image}
            className="w-full h-full rounded"
            alt="banner"
          />
        </div>

        <div className=" justify-center items-center w-full lg:px-0 xl:pl-0 2xl:pl-0 flex flex-col gap-2 mt-6">
          <p className="pl-11 md:pl-0 text-[22px] md:text-[28px] xl:text-[35px] font-bold text-[#333] text-start w-full md:px-0">
            Our Goal
          </p>
          <p className="px-11 mb-1.5 pr-[5rem] md:pr-0 text-[12.5px] md:text-[14px] xl:text-[15.5px] xl:w-full leading-[1.4rem] xl:leading-[1.6rem] md:px-0 text-left text-zinc-500">
            Below is the progress of our charity campaign to support local
            projects related to ecology and human rights.
          </p>

          <div className="md:w-full">
            <p className="text-[13px] xl:text-[16px] text-[#333] font-bold mb-2">
              <span className="text-[#84c54e] font-bold">
                ${item.amount_raised}
              </span>{" "}
              of ${item.target} raised
            </p>
            <div className="w-[282px] md:w-[260px] lg:w-[300px] xl:w-[335px] 2xl:w-[340px] h-5 bg-[#eee] rounded-full mb-5 md:mb-8">
              <div
                style={{ width: `${item.progress}%` }}
                className="h-full text-center text-xs text-white bg-[#ff6900] rounded-full"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};





export default Donate;
