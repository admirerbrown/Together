import about3 from "../../assets/about4.jpg";
import ImpactStats from "./aboutStats";
import AdComponent from "../home/adComponent";
import RenderTeam from "./team";

const AboutUsPage = () => {
  const image =
    "https://charity-is-hope.themerex.net/wp-content/uploads/2016/09/bg-3.jpg?id=325";
  const title = "HELP CINDY WITH HER HEART SURGERY ";
  const btnText = "Donate Now";
  const text =
    "We still have a few more charitable rounds to go before little Cindy can return to normal. In the meantime, we are so grateful to everyone who participated in the fundraiser.";

  return (
    <div>
      <div className="flex flex-col items-center md:flex-row pt-20 md:pt-0 pb-28 gap-5 md:gap-8 md:px-0 md:justify-center px-11 2xl:w-full 2xl:px-0 lg:px-8 bg-[#f6f5f2] 2xl:pl-[17.5rem]">
        <div className=" w-[280px] h-[160px] md:w-[340px] md:h-[200px] lg:w-[450px] lg:pt-16 lg:h-[320px] 2xl:w-[550px] 2xl:h-[365px] overflow-hidden">
          <img
            className="rounded-[0.4rem] w-full h-full"
            src={about3}
            alt="people"
          />
        </div>
        <div className="flex flex-col gap-4 md:w-[38%] lg:w-[50%] xl:w-[45%] 2xl:w-[57%]">
          <h1 className="font-extrabold text-2xl md:text-[28px] lg:text-[33px] xl:text-5xl md:mt-16 lg:mt-4 xl:mt-16 2xl:mt-5 font-Open-Sans">
            WHO WE ARE
          </h1>
          <h2 className="text-[15.5px] md:text-[17px] lg:text-[20px] xl:text-2xl xl:mt-3">
            We are here not for income, but for outcome
          </h2>
          <p className="text-[13px] md:text-[14px] lg:text-[14.5px] xl:text-[17px] xl:leading-7 text-zinc-500 leading-6 2xl:w-[60%]">
            Laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irurereprehderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteuraecatl cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim torum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem.
          </p>
        </div>
      </div>
      <ImpactStats></ImpactStats>
      <AdComponent
        image={image}
        title={title}
        text={text}
        btnText={btnText}
      ></AdComponent>
      <RenderTeam></RenderTeam>
    </div>
  );
};

export default AboutUsPage;
