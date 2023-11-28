import { motion } from 'framer-motion';
import CountUpAnimation from './counterAnimation';


const BarStats = () => {
    const list = [
        {
            level: 85,
            text: 'Education and Prevention',
            duration: 2.5,
            speed: 2500
        },
        {
            level: 75,
            text: 'Trauma Care for Children',
            duration: 1.5,
            speed: 2000

        },
        {
            level: 80,
            text: 'Research and Advocacy',
            duration: 2,
            speed: 2300

        },
        {
            level: 73,
            text: 'Fundraising',
            duration: 1,
            speed: 2000,

        },

        {
            level: 92,
            text: 'Culture and Community',
            duration: 2.9,
            speed: 3000

        },
    ]

    return (
        <div className='flex gap-5 lg:gap-8 xl:gap-12 2xl:gap-16 md:pt-20'>
            {list.map((item, index) => (
                <motion.div key={index + 1} className="relative bg-[#84c54e] h-[410px] w-[40px] md:w-[68px] lg:w-[74px] mb-3 md:mb-8 pb-5 overflow-hidden">
                    <motion.div className='h-[570px] border-transparent border-none'>
                        <motion.div
                            className=" bottom-0 text-center text-xs text-white bg-[#f6f5f2] pb-3 pt-5 flex items-end justify-center overflow-hidden"
                            style={{ height: `${100 - item.level}%` }}
                            initial={{ height: '100%' }}
                            animate={{ height: `${100 - item.level}%` }}
                            transition={{ delay: 0.6, duration: item.duration }}
                        >

                            <p className='text-[#84c54e] text-xl md:text-[32px] lg:text-4xl font-bold mt-5'><CountUpAnimation duration={item.speed}>{item.level}</CountUpAnimation>%</p>
                        </motion.div>

                        <p className='text-[14px] absolute upside text-white w-full flex items-center justify-start bottom-0 mb-5'>{item.text}</p>
                    </motion.div>
                </motion.div>
            ))}

        </div>
    );
};

const Summary = () => {
    return (
        <div className=' flex gap-12 w-full flex-col md:flex-row items-center mt-10 pb-20 '>
            <div className='flex flex-col font-Open-Sans md:w-[420px] gap-5 pt-5 mt-5 w-full pl-[3.8rem]'>
                <div>
                    <h1 className='text-2xl lg:text-5xl font-Open-Sans font-extrabold md:leading-[3.5rem] w-[200px] mb-4'>WHERE THE MONEY GOES</h1>
                    <p className='text-[15px] md:text-[22px] w-[250px]'>Current operation and program spending breakdown</p>
                </div>

                <ul className='flex flex-col gap-3 text-sm text-[#ff6900] font-bold list-disc md:text-lg pl-5'>
                    <li className=''>Education and Prevention</li>
                    <li className=''>Trauma Care for Children</li>
                    <li className=''>Fundraising</li>
                    <li className=''>Research and Advocacy</li>
                    <li className=''>Culture and Community</li>
                </ul>
            </div>

            <BarStats></BarStats>
        </div>

    )

}

export default Summary;
