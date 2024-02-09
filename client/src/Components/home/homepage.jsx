import HeroSection from "./hero"
import Missions from "./mission"
import HomeCauses from "./causesSumary"
import StatsComp from './statsSection'
import Summary from "./bars";
import AdComponent from './adComponent'
import HomeBlog from "./Homeblog";
import DonateSection from './donate';

const HomePage = () => {
  const image =
    "https://charity-is-hope.themerex.net/wp-content/uploads/2016/09/bg-3.jpg?id=325";
  const title = "HELP CINDY WITH HER HEART SURGERY ";
  const btnText = "Donate Now";
  const text =
    "We still have a few more charitable rounds to go before little Cindy can return to normal. In the meantime, we are so grateful to everyone who participated in the fundraiser.";

  return (
    <div className="bg-[#f6f5f2]">
      <HeroSection />
      <Missions />
      <HomeCauses />
      <StatsComp />
      <AdComponent text={text} title={title} image={image} btnText={btnText} />
      <Summary />
      <HomeBlog />
      <DonateSection />

    </div>
  );
};

export default HomePage;
