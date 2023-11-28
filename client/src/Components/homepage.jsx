import HeroSection from "./hero"
import Missions from "./mission"
import HomeCauses from "./causesSumary"
import StatsComp from './statsSection'
import Summary from "./bars";

// const HomePage =()=>{
//   return (
//     <div className="bg-[#f6f5f2]">
//       <HeroSection></HeroSection>
//       <Missions></Missions>
//       <HomeCauses></HomeCauses>
//       <StatsComp></StatsComp>
//       <Summary></Summary>
//     </div>
//   )
// }

// export default HomePage


// import { useState, useEffect } from 'react';

const HomePage = () => {
  // const [showSummary, setShowSummary] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Get the position of StatsComp
  //     const statsComp = document.getElementById('StatsComp');
  //     const statsCompPosition = statsComp.getBoundingClientRect().top;

  //     // Check if StatsComp is in the viewport
  //     if (statsCompPosition < window.innerHeight) {
  //       setShowSummary(true);
  //     }
  //   };

  //   // Attach the scroll event listener
  //   window.addEventListener('scroll', handleScroll);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className="bg-[#f6f5f2]">
      <HeroSection />
      <Missions />
      <HomeCauses />
      <StatsComp />
      <Summary />
      {/* {showSummary && <Summary />} */}
    </div>
  );
};

export default HomePage;
