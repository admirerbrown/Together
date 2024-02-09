import about3 from "../../assets/about4.jpg";
import ImpactStats from "./aboutStats";
import AdComponent from "../home/adComponent";
import RenderTeam from "./team";

const AboutUsPage = () => {
  const image =
    "https://charity-is-hope.themerex.net/wp-content/uploads/2016/09/bg-2.jpg";
  const title = "Donate Blood & Save a Life";
  const btnText = "Register Now";
  const text =
    "Pellentesque lacinia urna eget luctus faucibus. Suspendisse potenti. Morbi accumsan, arcu et feugiat hen drerit, odio quam egestas risus, tincidunt gravida est risus ut enim.";

  return (
    <div>
      <div className="flex flex-col items-center pt-20 pb-28 gap-5 px-11 bg-[#f6f5f2]">
        <div className=" w-[280px] h-[160px] md:w-[350px] lg:w-full 2xl:w-[550px] overflow-hidden">
          <img
            className="rounded-[0.4rem] w-full h-full"
            src={about3}
            alt="people"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-extrabold text-2xl font-Open-Sans">WHO WE ARE</h1>
          <h2 className="text-[15.5px]">
            We are here not for income, but for outcome
          </h2>
          <p className="text-[13px] text-zinc-500 leading-6">
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
