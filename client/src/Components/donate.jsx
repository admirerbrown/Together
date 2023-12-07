import flower from '../assets/flower.png';


const DonateSection = () => {
    return (
        <div className='md:px-4 bg-[#424242] lg:pr-10 lg:pl-0 xl:px-24 2xl:px-0'>
            <div className=" flex flex-col md:flex-row gap-8  px-14 lg:pl-8 pt-7 xl:justify-center md:pt-14 font-Open-Sans">
                <h3 className="text-white md:text-[18px] font-bold leading-[1.2rem] lg:text-[20px] xl:text-[24px] 2xl:text-[30px] lg:leading-[1.7rem] xl:pr-8 2xl:w-[28%] 2xl:leading-[2.3rem]">Donate Today to Save Children From the Trauma of Abuse</h3>
                <div className='flex gap-3 xl:pr-5 xl:gap-5'>
                    <div className='h-[80px] md:h-[100px] lg:h-[110px] md:w-14 mt-16 md:mt-0'>
                        <img src={flower} className='h-full w-full' alt="call to action" />
                    </div>
                    <div className='flex flex-col gap-3 xl:gap-5 mb-10 md:flex-row'>
                        <div className='flex items-center justify-center w-[158px] h-[43px] lg:h-[55px] xl:h-[65px] 2xl:h-[70px] 2xl:text-[24px] xl:w-[210px] 2xl:w-[240px]  lg:w-[190px] md:w-[160px] font-bold rounded-[0.2rem] xl:text-[22px] lg:text-[18px] text-[16px] bg-[#ffe400] border-none hover:bg-[#ff6900] hover:text-white'> Single Donation</div>
                        <div className='flex items-center justify-center text-[16px] font-bold rounded-[0.2rem] md:text-[17px] xl:h-[65px] 2xl:h-[70px] lg:text-[18px] 2xl:text-[24px] bg-[#84c54e] xl:text-[22px] xl:w-[230px] 2xl:w-[260px] lg:h-[55px] h-[43px] md:w-[180px] lg:w-[200px] border-none hover:bg-[#ff6900] hover:text-white'> Regular Donation</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default DonateSection;