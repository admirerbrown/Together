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
            text: 'This cause is meant to raise funds to build a chain of schools in Malawi, Burundi and West-Africa.',
            target: '$9000',
            raised: '$398,207',
            progress: '100%'
        },

    ]

    return (
        <div className='bg-[#ffffff] flex flex-col font-Open-Sans items-center justify-center pb-20'>
            <div className="flex flex-col items-center mt-10 lg:mt-10 xl:mt-14 mb-5 md:mb-0">
                <h2 className='text-2xl font-extrabold uppercase mb-4 md:text-3xl xl:text-5xl'>our causes</h2>
                <p className='px-10 text-center md:text-[19px] font-normal lg:text-[22px] xl:text-[24px] xl:mt-4 mb-6'>You can help lots of people by donating little. <span className='text-[#84c54e]'><a href='#'>See our causes.</a></span></p>
            </div>

            <div className='flex flex-col flex-wrap gap-12 md:px-10 md:pl-[72px] md:flex-row lg:justify-start md:gap-12 lg:gap-16 lg:px-20 xl:px-0 xl:pl-0 xl:ml-5 xl:gap-16 md:mt-10 xl:justify-center '>
                {data.map((item, index) => (
                    <div key={index} className='flex flex-col w-[350px] lg:w-[400px] xl:w-[320px] 2xl:w-[340px] items-center '>
                        <div className='w-[240px] object-cover md:w-[320px] lg:w-[400px] xl:w-[300px] 2xl:w-[340px]'>
                            <img src={item.img} className='w-full h-full rounded' alt="banner" />
                        </div>

                        <div className=' justify-center items-center md:px-10 lg:px-0 xl:pl-2 2xl:pl-0 flex flex-col gap-7 mt-6'>
                            <p className='pl-14 md:pl-0 text-[18px] md:text-[22px] xl:text-[25px] font-bold text-[#84c54e] text-start w-full md:px-0 hover:text-[#ff6900]'>
                                {item.title}
                            </p>
                            <p className='px-14 text-[12.5px] md:text-[14px] xl:text-[16px] leading-[1.4rem] xl:leading-[1.6rem] md:px-0 text-left text-zinc-500'>
                                {item.text}
                            </p>

                            <div>
                                <p className='text-[14px] font-bold mb-2'>
                                    <span className='text-[#84c54e] font-bold'>{item.raised}</span> of {item.target} raised
                                </p>
                                <div className="w-[240px] md:w-[310px] lg:w-[400px] xl:w-[300px] 2xl:w-[340px] h-5 bg-[#eee] rounded-full mb-5 md:mb-8">
                                    <div style={{ width: `${item.progress}` }} className="h-full text-center text-xs text-white bg-[#ff6900] rounded-full">
                                    </div>
                                </div>
                                <div className="mb-0 flex items-center justify-center font-bold btn-sm h-[44px] w-[100px] bg-[#ffe400] hover:bg-[#84c54e] hover:text-white mr-2.5 border-none rounded">
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