import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Message Sent. THANK YOU! ", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    const redirectTimer = setTimeout(() => {
      window.location.href = "/";
    }, 2000);

    // Clean up the timer when the component unmounts or when updateSuccess changes
    return () => clearTimeout(redirectTimer);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action="#"
        id="contact"
        className="flex flex-col mt-10 md:mt-0 mb-48"
      >
        <input
          type="text"
          id="Name"
          name="Name"
          placeholder="Name*"
          required
          className=" input mt-2 mb-4 placeholder:text-sm focus:border-l-2 focus:border-r-0 focus:border-b-0 focus:border-t-2 focus:border-solid focus:outline-none focus:ring-transparent   rounded-[0.35rem] bg-[#eee] border-none h-[45px] w-[290px] md:w-full lg:w-[299px] xl:w-[306px] 2xl:w-[325px]"
        />

        <input
          type="text"
          id="email_address"
          name="Email Address"
          placeholder="Email*"
          required
          className=" input mt-2 mb-4 placeholder:text-sm focus:border-l-2 focus:border-r-0 focus:border-b-0 focus:border-t-2 focus:border-solid focus:outline-none focus:ring-transparent rounded-[0.35rem] bg-[#eee] border-none h-[45px] w-[290px] md:w-full"
        />

        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Subject"
          className=" input mt-2 mb-4 placeholder:text-sm focus:border-l-2 focus:border-r-0 focus:border-b-0 focus:border-t-2 focus:border-solid focus:outline-none focus:ring-transparent  rounded-[0.35rem] bg-[#eee] border-none h-[45px] w-[290px] md:w-full lg:w-[300px] xl:w-[307px] 2xl:w-[325px]"
        />

        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
          className="input mt-2 mb-4 placeholder:text-sm placeholder:pt-4 focus:border-l-2 focus:border-r-0 focus:border-b-0 focus:border-t-2 focus:border-solid focus:outline-none focus:ring-transparent rounded-[0.35rem] bg-[#eee] border-none h-[200px] w-[290px] md:w-full lg:w-[300px] xl:w-[307px] 2xl:w-[325px]"
        ></textarea>

        <div className="flex flex-col w-full mt-2 pr-3 xl:pr-2 2xl:pr-0 2xl:w-[100%]">
          <button
            type="submit"
            className="mb-0 cursor-pointer flex items-center justify-center btn-sm h-[40px] md:h-[45px] w-[150px] md:w-[135px] hover:bg-[#ff6900] bg-[#84c54e] text-white font-bold border-none rounded"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
