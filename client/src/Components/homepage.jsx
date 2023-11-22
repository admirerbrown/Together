import HeroSection from "./hero"
import Missions from "./mission"
import HomeCauses from "./causesSumary"

const HomePage =()=>{
  return (
    <div className="bg-[#f6f5f2]">
      <HeroSection></HeroSection>
      <Missions></Missions>
      <HomeCauses></HomeCauses>
    </div>
  )
}

export default HomePage