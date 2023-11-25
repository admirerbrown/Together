import HeroSection from "./hero"
import Missions from "./mission"
import HomeCauses from "./causesSumary"
import StatsComp from './statsSection'

const HomePage =()=>{
  return (
    <div className="bg-[#f6f5f2]">
      <HeroSection></HeroSection>
      <Missions></Missions>
      <HomeCauses></HomeCauses>
      <StatsComp></StatsComp>
    </div>
  )
}

export default HomePage