import HeroSection from "./hero"
import Missions from "./mission"
import HomeCauses from "./causesSumary"
import StatsComp from './statsSection'
import BarStats from './bars';
import Summary from "./bars";

const HomePage =()=>{
  return (
    <div className="bg-[#f6f5f2]">
      <HeroSection></HeroSection>
      <Missions></Missions>
      <HomeCauses></HomeCauses>
      <StatsComp></StatsComp>
      {/* <BarStats></BarStats> */}
      <Summary></Summary>

    </div>
  )
}

export default HomePage