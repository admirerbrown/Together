import HeroSection from "./hero"
import Missions from "./mission"
import HomeCauses from "./causesSumary"
import StatsComp from './statsSection'
import Summary from "./bars";
import AdComponent from './adComponent'
import HomeBlog from "./Homeblog";
import DonateSection from './donate';

const HomePage = () => {
  return (
    <div className="bg-[#f6f5f2]">
      <HeroSection />
      <Missions />
      <HomeCauses />
      <StatsComp />
      <AdComponent />
      <Summary />
      <HomeBlog />
      <DonateSection />

    </div>
  );
};

export default HomePage;
