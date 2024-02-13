import teamMember1 from "../../assets/team1.jpg";
import teamMember2 from "../../assets/team2.jpg";
import teamMember3 from "../../assets/team3.jpg";
import teamMember4 from "../../assets/team5.jpg";

import { FaXTwitter, FaFacebookF } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";

const RenderTeam = () => {
  const teamData = [
    {
      image: teamMember1,
      name: "Marie Moore",
      title: "Social Worker",
    },
    {
      image: teamMember2,
      name: "Barry Gild",
      title: "Volunteer",
    },
    {
      image: teamMember3,
      name: "Derek Ewald",
      title: "Project Officer",
    },
    {
      image: teamMember4 ,
      name: "Theresa Tulip",
      title: "Social Worker",
    },
  ];
  const bgImage =
    "https://charity-is-hope.themerex.net/wp-content/uploads/2016/09/bg-5.jpg";

    
  return (
    <div
      className="bg-cover bg-center flex flex-col items-center px-11 font-Open-Sans py-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="font-extrabold text-2xl md:text-3xl mb-2 xl:mt-14 xl:text-5xl">OUR TEAM</h1>
      <h2 className="text-[15.5px] md:text-[20px] xl:text-2xl text-center mb-9 xl:mt-5 xl:mb-12">
        These wonderful people make it all possible
      </h2>
      <div className="md:flex md:gap-8">
        {teamData.map((member, index) => (
          <div key={index} className="flex flex-col items-center mb-8">
            <div className="w-[280px] h-[260px] object-cover md:w-[150px] md:h-[150px] lg:w-[200px] xl:w-[230px] xl:h-[230px] 2xl:w-[260px] 2xl:h-[260px]">
              <img
                src={member.image}
                className="w-full h-full rounded"
                alt={member.name}
              />
            </div>
            <div className="flex flex-col items-center mt-5">
              <h3 className="font-bold xl:text-2xl xl:mt-3">{member.name}</h3>
              <p className="text-[#84c54e] font-bold text-[13.5px] xl:text-base mt-1 mb-2">
                {member.title}
              </p>
              <ul className="socials flex gap-2.5 xl:mt-3">
                <li className="flex justify-center rounded-full h-8 w-8 xl:h-10 xl:w-10 bg-[#55acee] items-center text-white hover:border-2 hover:border-[#55acee] hover:bg-transparent hover:text-[#55acee]">
                  <FaXTwitter className="text-sm xl:text-lg" />
                </li>
                <li className="flex justify-center rounded-full h-8 w-8 xl:h-10 xl:w-10 bg-[#3b5998] items-center text-white hover:border-2 hover:border-[#3b5998] hover:bg-transparent hover:text-[#3b5998]">
                  <FaFacebookF className="text-sm xl:text-lg" />
                </li>
                <li className="flex justify-center rounded-full h-8 w-8 xl:h-10 xl:w-10 bg-[#e52d27] items-center text-white hover:border-2 hover:border-[#e52d27] hover:bg-transparent hover:text-[#e52d27]">
                  <TfiYoutube className="text-sm xl:text-lg" />
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenderTeam;
