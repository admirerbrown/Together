/* eslint-disable react/prop-types */
import { FaXTwitter, FaFacebookF, FaPinterestP } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateCauseData } from "../../Redux/formAction";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InfoForm = ({ userAmount }) => {
  const [updateSuccess, setUpdateSuccess] = useState(null);

  const dispatch = useDispatch();
  const { id } = useParams();
  const numericId = parseInt(id, 10);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userAmount.trim() === "") {
      toast.error("donation cannot be empty", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (userAmount.trim() !== "") {
      const cleanAmount = parseInt(userAmount, 10);
      const payload = {
        cause_id: numericId,
        amount: cleanAmount,
      };

      dispatch(updateCauseData(payload));
    }
  };
  const updateStatus = useSelector((state) => state.donation.response);

  useEffect(() => {
    if (Object.keys(updateStatus).length > 0) {
      setUpdateSuccess(updateStatus.updatedCause.success);
    }
  }, [updateStatus]);

  useEffect(() => {
    if (updateSuccess === true) {
      toast.success("THANK YOU FOR YOUR DONATION!!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (updateSuccess === false) {
      toast.error("donation failed, please try again", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [updateSuccess]);

  useEffect(() => {
    if (updateSuccess === true) {
      const redirectTimer = setTimeout(() => {
        window.location.href = "/";
      }, 2000);

      // Clean up the timer when the component unmounts or when updateSuccess changes
      return () => clearTimeout(redirectTimer);
    }
  }, [updateSuccess]);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action="#"
        id="donations"
        className="flex flex-col px-10 mb-40 lg:px-0 lg:pr-8"
      >
        <p
          id="title"
          className="text-[#8a8a8a] text-start tracking-wider italic text-[15px] font-semibold mb-2"
        >
          Personal Info (optional)
        </p>

        <hr className="h-2 w-[100%]" />

        <div className=" flex flex-col mt-5 md:flex-row md:gap-3">
          <div className="flex flex-col">
            <label
              htmlFor="FirstName"
              className="text-[#8a8a8a] text-[15px] font-semibold"
            >
              First Name:
            </label>
            <input
              type="text"
              id="FirstName"
              name="FirstName"
              placeholder="First Name"
              className=" input mt-2 mb-4 placeholder:text-sm placeholder:font-semibold focus:border-l-2 focus:border-r-0 focus:border-b-0 focus:border-t-2 focus:border-solid focus:outline-none focus:ring-transparent   rounded-[0.35rem] bg-[#eee] border-none h-[45px] w-[290px] md:w-[200px] lg:w-[299px] xl:w-[306px] 2xl:w-[325px]"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="LastName"
              className="text-[#8a8a8a] text-[15px] font-semibold"
            >
              Last Name:
            </label>
            <input
              type="text"
              id="LastName"
              name="LastName"
              placeholder="Last Name"
              className=" input mt-2 mb-4 placeholder:text-sm placeholder:font-semibold focus:border-l-2 focus:border-r-0 focus:border-b-0 focus:border-t-2 focus:border-solid focus:outline-none focus:ring-transparent  rounded-[0.35rem] bg-[#eee] border-none h-[45px] w-[290px] md:w-[200px] lg:w-[300px] xl:w-[307px] 2xl:w-[325px]"
            />
          </div>
        </div>

        <div className="flex flex-col md:w-full">
          <label
            htmlFor="email_address"
            className="text-[#8a8a8a] text-[15px] font-semibold"
          >
            Email Address:
          </label>
          <input
            type="text"
            id="email_address"
            name="Email Address"
            placeholder="Email Address"
            className=" input mt-2 mb-4 placeholder:text-sm placeholder:font-semibold focus:border-l-2 focus:border-r-0 focus:border-b-0 focus:border-t-2 focus:border-solid focus:outline-none focus:ring-transparent rounded-[0.35rem] bg-[#eee] border-none h-[45px] w-[290px] md:w-full"
          />
        </div>

        <div className="flex flex-col w-full items-end pr-3 xl:pr-2 2xl:pr-0 2xl:w-[100%]">
          <div className="flex flex-col xl:flex-row items-center gap-3">
            <p className="text-[18px] italic font-Open-Sans font-semibold text-[#8a8a8a]">
              Donation Total:
            </p>
            <p className="text-[#8a8a8a] mt-3  mb-4 font-semibold text-[18px]">
              ${userAmount !== " " || "" ? `${userAmount}.00` : "0.00"}
            </p>
          </div>

          <button
            type="submit"
            className="mb-0 cursor-pointer flex items-center justify-center font-bold btn-sm h-[40px] w-[100px] hover:bg-[#ff6900] bg-[#ffe400] hover:text-white text-black border-none rounded"
          >
            Donation
          </button>

          <div className="lg:flex gap-8 items-center mt-10  ">
            <ul className="socials flex gap-2.5">
              <li className="flex justify-center rounded-full md:h-10 h-9 w-9 md:w-10 bg-[#55acee] items-center hover:border-2 text-white hover:border-[#55acee] hover:bg-transparent hover:text-[#55acee]">
                <FaXTwitter className="text-lg "></FaXTwitter>
              </li>
              <li className="flex justify-center rounded-full md:h-10 h-9 w-9 md:w-10 bg-[#3b5998] items-center hover:border-2 text-white hover:border-[#3b5998] hover:bg-transparent hover:text-[#3b5998]">
                <FaFacebookF className="text-lg "></FaFacebookF>
              </li>
              <li className="flex justify-center rounded-full md:h-10 h-9 w-9 md:w-10 text-white bg-[#55acee] items-center hover:border-2 hover:border-[#55acee]  hover:bg-transparent hover:text-[#55acee]">
                <FaPinterestP className="text-lg "></FaPinterestP>
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InfoForm;
