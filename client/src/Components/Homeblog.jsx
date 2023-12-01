import blog1 from '../assets/blog1.jpg'
import { MdRemoveRedEye } from "react-icons/md";
import { FaComment, FaHeart } from "react-icons/fa6";

const HomeBlog = () => {
    return (
        <div className='bg-[#ffffff] flex flex-col gap-10 items-center pt-16 font-Open-Sans'>
            <h1 className='uppercase text-[22px] md:text-[3.5rem] font-extrabold '>our blog</h1>
            <div className='px-[3.2rem]'>
                <div className='flex flex-col gap-4 '>
                    <div className='w-[270px] 2xl:w-[550px]'>
                        <img className='rounded-[0.3rem] w-full h-full' src={blog1} alt="" />
                    </div>
                    <h2 className='text-[19px] leading-[1.6rem] font-bold text-[#84c54e]'>How Does the Bible Define Poverty?</h2>
                    
                    <div>
                        <p></p>
                    </div>
                    
                    <p className='text-sm text-zinc-500 flex items-center gap-2'>August 11, 2016 | <MdRemoveRedEye  className='text-[#84c54e]'/>718 <FaComment className='text-[#84c54e]'/>2 <FaHeart className='text-[#84c54e]'/>3</p>
                    <p className='text-[13px] leading-[1.4rem] pr-2 text-zinc-500'>
                        We often inquire why all the disasters and atrocities, alongside
                        poverty are happening, and – for those who believe – are allowed by
                        higher powers. Poverty has been seen for a very long time and even
                        back...
                        
                    </p>
                    <div className="mt-4 flex items-center justify-center font-bold btn-sm h-[42px] text-[12px] w-[120px] hover:bg-[#ff6900] bg-[#84c54e] text-white mr-2.5 border-none rounded-[0.2rem]">
                        Learn More
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeBlog;
