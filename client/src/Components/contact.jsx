import contact1 from "../assets/contact1.jpg";
import { FaXTwitter, FaFacebookF, FaPinterestP } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import ContactForm from "./contactForm";

const ContactPage = () => {
    return (
        <div className="">
            <div className="object-cover  mb-20 lg:mb-24">
                <img
                    src={contact1}
                    alt=""
                    className="w-full md:h-[450px] lg:h-[550px] xl:h-[650px] 2xl:h-[700px]"
                />
            </div>

            <div className="px-10 font-Open-Sans text-zinc-400">
                <div className="flex flex-col gap-4">
                    <div >
                        <h2 className="font-bold text-lg mb-4 text-[#424242]">Contact Info</h2>
                        <p className="text-xs">
                            <span className="font-bold text-sm text-[#424242]">Address:</span> No.1 Abbey Road, London, W1 ECH, UK
                        </p>
                        <p className="text-xs">
                            <span className="font-bold text-sm text-[#424242]">We Are Open:</span> Open House on the 24th, – 12 mid day to
                            5 pm.
                        </p>
                        <p className="text-xs text-[#84c54e]">
                            <span className="font-bold text-sm text-[#424242]">Call:</span> +233 (0) 800 123 4567
                        </p>
                        <p className="text-xs text-[#84c54e]">
                            <span className="font-bold text-sm text-[#424242]">Email:</span> hr@together.com
                        </p>
                    </div>
                    <div >
                        <h2 className="font-bold font-Open-Sans text-lg mb-4 text-[#424242]">Information</h2>
                        <p className="text-[13px] text-zinc-400">
                            I am text block. Click edit button to change this text. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
                            luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        </p>
                    </div>
                    <div className="form">
                        <h2 className="font-bold font-Open-Sans text-lg mb-4 text-[#424242]">Stay Social</h2>
                        <ul className="socials flex gap-2.5">
                            <li className="flex justify-center rounded-full h-8 w-8 bg-[#55acee] items-center text-white hover:border-2 hover:border-[#55acee] hover:bg-transparent hover:text-[#55acee]">
                                <FaXTwitter className="text-sm"></FaXTwitter>
                            </li>
                            <li className="flex justify-center rounded-full h-8 w-8 bg-[#3b5998] items-center text-white hover:border-2 hover:border-[#3b5998] hover:bg-transparent hover:text-[#3b5998]">
                                <FaFacebookF className="text-sm "></FaFacebookF>
                            </li>
                            <li className="flex justify-center rounded-full h-8 w-8 bg-[#e52d27] items-center text-white hover:border-2 hover:border-[#e52d27] hover:bg-transparent hover:text-[#e52d27]">
                                <TfiYoutube className="text-sm "></TfiYoutube>
                            </li>
                            <li className="flex justify-center rounded-full h-8 w-8 border-2 text-[#acb4b6]  border-[#acb4b6] items-center hover:border-2 hover:border-[#84c54e] hover:bg-transparent hover:text-[#84c54e]">
                                <FaPinterestP className="text-sm "></FaPinterestP>
                            </li>
                        </ul>
                    </div>
                </div>

                <div><ContactForm></ContactForm></div>
            </div>
        </div>
    );
};

export default ContactPage;
