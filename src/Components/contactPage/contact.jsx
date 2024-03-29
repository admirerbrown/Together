import contact1 from "../../assets/contact1.jpg";
import { FaXTwitter, FaFacebookF, FaPinterestP } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
import ContactForm from "../contactPage/contactForm";

const ContactPage = () => {
  return (
    <div >
      <div className="object-cover  mb-20 lg:mb-24">
        <img
          src={contact1}
          alt="volunteer banner"
          className="w-full md:h-[450px] lg:h-[550px] xl:h-[650px] 2xl:h-[700px]"
        />
      </div>

      <div className="px-10 md:px-14 lg:px-0 xl:px-20 font-Open-Sans text-zinc-400 md:flex md:w-full md:justify-center md:gap-8">
        <div className="flex flex-col gap-4 md:gap-6 md:w-[40%] xl:w-[37%] 2xl:w-[27%]">
          <div>
            <h2 className="font-bold text-lg mb-4 xl:text-2xl  text-[#424242]">
              Contact Info
            </h2>
            <p className="text-xs md:text-[14px] mb-2 xl:text-[16px]">
              <span className="font-bold text-sm xl:text-[16px] text-[#424242]">
                Address:
              </span>{" "}
              No.1 Abbey Road, London, W1 ECH, UK
            </p>
            <p className="text-xs md:text-[14px] mb-2 xl:text-[16px]">
              <span className="font-bold text-sm xl:text-[16px] text-[#424242]">
                We Are Open:
              </span>{" "}
              Open House on the 24th, – 12 mid day to 5 pm.
            </p>
            <p className="text-xs text-[#84c54e] md:text-[14px] mb-2 xl:text-[16px]">
              <span className="font-bold text-sm xl:text-[16px] text-[#424242]">
                Call:
              </span>{" "}
              +233 (0) 800 123 4567
            </p>
            <p className="text-xs text-[#84c54e] md:text-[14px] mb-2 xl:text-[16px]">
              <span className="font-bold text-sm xl:text-[16px] text-[#424242]">
                Email:
              </span>{" "}
              hr@together.com
            </p>
          </div>
          <div>
            <h2 className="font-bold font-Open-Sans text-lg xl:text-2xl mb-4 text-[#424242] ">
              Information
            </h2>
            <p className="text-[13px] md:text-[14.5px] xl:text-[16.5px] md:leading-6 text-zinc-400">
              I am text block. Click edit button to change this text. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="">
            <h2 className="font-bold font-Open-Sans text-lg xl:text-2xl mb-4 text-[#424242]">
              Stay Social
            </h2>
            <ul className="socials flex gap-2.5">
              <li className="flex justify-center rounded-full h-8 w-8 xl:h-10 xl:w-10 bg-[#55acee] items-center text-white hover:border-2 hover:border-[#55acee] hover:bg-transparent hover:text-[#55acee]">
                <FaXTwitter className="text-sm xl:text-lg"></FaXTwitter>
              </li>
              <li className="flex justify-center rounded-full h-8 w-8 xl:h-10 xl:w-10 bg-[#3b5998] items-center text-white hover:border-2 hover:border-[#3b5998] hover:bg-transparent hover:text-[#3b5998]">
                <FaFacebookF className="text-sm xl:text-lg"></FaFacebookF>
              </li>
              <li className="flex justify-center rounded-full h-8 w-8 xl:h-10 xl:w-10 bg-[#e52d27] items-center text-white hover:border-2 hover:border-[#e52d27] hover:bg-transparent hover:text-[#e52d27]">
                <TfiYoutube className="text-sm xl:text-lg"></TfiYoutube>
              </li>
              <li className="flex justify-center rounded-full h-8 w-8 xl:h-10 xl:w-10 border-2 text-[#acb4b6]  border-[#acb4b6] items-center hover:border-2 hover:border-[#84c54e] hover:bg-transparent hover:text-[#84c54e]">
                <FaPinterestP className="text-sm xl:text-lg "></FaPinterestP>
              </li>
            </ul>
          </div>
        </div>

        <div className="md:w-[50%] 2xl:w-[40%]">
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
