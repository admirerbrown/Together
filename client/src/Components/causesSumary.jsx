import cause_1 from '../assets/cause_1.jpg'
import cause_2 from '../assets/cause_2.jpg'


const HomeCauses = () => {
    const data = [
        {
            img: cause_2,
            title: 'Education for Everyone',
            text: 'In the XXI century, there are still plenty of countries where education is forbidden to women.',
            target: '$9000',
            raised: '$22,333',
            progress: '100%'
        },
        
        {
            img: 'https://img.freepik.com/free-photo/closeup-shot-boy-doctor-wearing-sanitary-masks_181624-41864.jpg?size=626&ext=jpg&ga=GA1.1.865150467.1694076383&semt=ais',
            title: 'Surgery for  children',
            text: 'Our organization stands for the right to education for every child and person on this planet.',
            target: '$9000',
            raised: '$10,640 ',
            progress: '100%'
        },
        {
            img: cause_1,
            title: 'Feed every street child',
            text: 'This cause is meant to raise funds to build a chain of schools in Malawi, Burundi,…',
            target: '$9000',
            raised: '$398,207',
            progress: '100%'
        },

    ]

    return (
        <div className='bg-[#ffffff] flex flex-col font-Open-Sans'>
            <div className="flex flex-col items-center mt-7">
                <h2 className='text-2xl font-extrabold uppercase mb-3 md:text-3xl xl:text-5xl'>our causes</h2>
                <p className='px-10 text-center md:text-[20px] font-normal lg:text-[22px] xl:text-[24px] xl:mt-4 mb-6'>You can help lots of people by donating little. <span className='text-[#84c54e]'><a href='#'>See our causes.</a></span></p>
            </div>

            <div className='flex flex-col flex-wrap md:flex-row md:pl-10 lg:pl-20  lg:gap-16'>
                {data.map((item, index) => (
                    <div key={index} className='flex flex-col w-[400px] items-center gap-5 '>
                        <div className='w-[240px] object-cover md:w-[320px] lg:w-[400px]'>
                            <img src={item.img} className='w-full h-full rounded' alt="" />
                        </div>

                        <div className='px-20 md:px-10 lg:px-0 flex flex-col gap-7'>
                            <p className='text-[18px] md:text-[22px] font-bold text-[#84c54e] text-start w-full md:px-0  hover:text-[#ff6900]'>
                                {item.title}
                            </p>
                            <p className='text-[12.5px] md:text-[14px] leading-[1.4rem] md:px-0 text-left text-zinc-500'>
                                {item.text}
                            </p>

                            <div>
                                <p className='text-[14px] font-bold mb-2'>
                                    <span className='text-[#84c54e] font-bold'>{item.raised}</span> of {item.target} raised
                                </p>
                                <div className="w-[240px] md:w-[310px] lg:w-[400px] h-5 bg-[#eee] rounded-full mb-5 md:mb-8">
                                    <div style={{ width: `${item.progress}` }} className="h-full text-center text-xs text-white bg-[#ff6900] rounded-full">
                                    </div>
                                </div>
                                <div className="mb-10 flex items-center justify-center font-bold btn-sm h-[44px] w-[100px] bg-[#ffe400] hover:bg-[#84c54e] hover:text-white mr-2.5 border-none rounded">
                                    Donate
                                </div>
                            </div>
                        </div>



                    </div>
                ))}
            </div>


        </div>
    )
}





export default HomeCauses;