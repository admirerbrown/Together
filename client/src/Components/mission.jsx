import heart from '../assets/mission_1.png'
import globe from '../assets/mission_2.png'
import palm from '../assets/mission_3.png'
import { RiArrowRightCircleFill } from "react-icons/ri";



const Missions = () => {
    const data = [
        {
            icon: heart,
            text: 'Promoting the rights and wellbeing of every child, in everything we do'
        },
        {
            icon: globe,
            text: 'Supporting Hope programs for children in more than 150 countries and territories.'
        },
        {
            icon: palm,
            text: 'Focus on reaching the most vulnerable children, to benefit all children, everywhere.'
        }
    ]


    return (
        <div className="bg-[#f6f5f2] flex flex-col items-center gap-8 font-Open-Sans h-full">
            <div className="flex flex-col items-center mt-16">
                <h2 className='text-2xl font-extrabold uppercase mb-3 md:text-3xl xl:text-5xl'>our mission</h2>
                <p className='px-10 text-center md:text-[20px] font-normal lg:text-[22px] xl:text-[24px] xl:mt-4'>Protecting the rights and wellbeing of EVERY child</p>
            </div>

            <div className='md:w-60% xl:px-[90px] 2xl:px-[300px]'>
                <div className=' md:px-[80px] lg:px-[20px] lg:justify-between w-full flex flex-col md:flex-row text-center mt-5 gap-7 xl:gap-0'>
                    {data.map((item, index) => (
                        <div key={index} className='flex flex-col items-center gap-8 lg:gap-14 px-[50px] md:px-[15px] lg:px-[28px] xl:px-[40px] 2xl:px-[48px]'>
                            <img src={item.icon} alt="heart" className='w-[100px] md:w-[80px] lg:w-[110px] xl:w-[115px] 2xl:w-[130px]' />
                            <p className='text-[#84c54e] hover:text-[#ff6900] font-bold text-[15.5px] md:text-[15px] lg:text-[16px] xl:text-[18px]'>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>



            <div className="bg-[#84c54e] mb-20 mt-3 md:mt-8 flex items-center justify-center font-bold btn-sm w-[300px] h-[55px] md:h-[60px] xl:w-[370px] xl:h-[85px] text-white hover:bg-[#ff6900] border-none rounded-[0.2rem] text-[16px] xl:text-[24px]">
                Learn more about Us? <RiArrowRightCircleFill className="ml-4 text-3xl xl:text-4xl" />
            </div>
        </div>
    )
}

export default Missions;