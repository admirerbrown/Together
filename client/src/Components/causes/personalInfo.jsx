/* eslint-disable react/prop-types */
import { FaXTwitter, FaFacebookF, FaPinterestP } from "react-icons/fa6";

const InfoForm = ({ userAmount }) => {
    const handleSubmit =()=>{
        console.log('call backend api');
    }

    return (
        <div>
            <form action="#" id="donations" className="flex flex-col px-10 mb-40">
                <p
                    id="title"
                    className="text-[#8a8a8a] text-start tracking-wider italic text-[15px] font-semibold mb-2"
                >
                    Personal Info (optional)
                </p>

                <hr className="h-2 w-full"/>

                <div className=" flex flex-col mt-5">
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
                            className=" input mt-2 mb-4 placeholder:text-sm placeholder:font-semibold focus:border-l-2 focus:border-r-0 focus:border-b-0 focus:border-t-2 focus:border-solid focus:outline-none focus:ring-transparent md:placeholder:text-lg  xl:placeholder:text-lg rounded-[0.35rem] bg-[#eee] border-none h-[45px] w-[290px] md:w-[200px] lg:w-[300px] xl:w-[320px] 2xl:w-[420px]"
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
                            className=" input mt-2 mb-4 placeholder:text-sm placeholder:font-semibold focus:border-l-2 focus:border-r-0 focus:border-b-0 focus:border-t-2 focus:border-solid focus:outline-none focus:ring-transparent md:placeholder:text-lg  xl:placeholder:text-lg rounded-[0.35rem] bg-[#eee] border-none h-[45px] w-[290px] md:w-[200px] lg:w-[300px] xl:w-[320px] 2xl:w-[420px]"
                        />
                    </div>
                </div>

                <div className="flex flex-col">
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
                        className=" input mt-2 mb-4 placeholder:text-sm placeholder:font-semibold focus:border-l-2 focus:border-r-0 focus:border-b-0 focus:border-t-2 focus:border-solid focus:outline-none focus:ring-transparent md:placeholder:text-lg  xl:placeholder:text-lg rounded-[0.35rem] bg-[#eee] border-none h-[45px] w-[290px] md:w-[200px] lg:w-[300px] xl:w-[320px] 2xl:w-[420px]"
                    />
                </div>

                <div className="flex flex-col w-full items-end pr-3">
                    <p className="text-[18px] italic font-Open-Sans font-semibold text-[#8a8a8a]">
                        Donation Total:
                    </p>
                    <p className="text-[#8a8a8a] mt-3 mb-4 font-semibold text-[18px]">
                        ${userAmount !== " " || "" ? `${userAmount}.00` : "0.00"}
                    </p>

                    <button
                        type="Submit"
                        onClick={handleSubmit}
                        className="mb-0 cursor-pointer flex items-center justify-center font-bold btn-sm h-[40px] w-[100px] hover:bg-[#ff6900] bg-[#ffe400] hover:text-white text-black border-none rounded"
                    >
                        Donation
                    </button>


                    <div className="lg:flex gap-8 items-center mt-10 ">
                        <ul className="socials flex gap-2.5">
                            <li className="flex justify-center rounded-full md:h-10 h-9 w-9 md:w-10 bg-[#55acee] items-center hover:border-2 text-white hover:border-[#55acee] hover:bg-transparent hover:text-[#55acee]" ><FaXTwitter className="text-lg "></FaXTwitter></li>
                            <li className="flex justify-center rounded-full md:h-10 h-9 w-9 md:w-10 bg-[#3b5998] items-center hover:border-2 text-white hover:border-[#3b5998] hover:bg-transparent hover:text-[#3b5998]"><FaFacebookF className="text-lg "></FaFacebookF></li>
                            <li className="flex justify-center rounded-full md:h-10 h-9 w-9 md:w-10 text-white bg-[#55acee] items-center hover:border-2 hover:border-[#55acee]  hover:bg-transparent hover:text-[#55acee]"><FaPinterestP className="text-lg "></FaPinterestP></li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default InfoForm;
