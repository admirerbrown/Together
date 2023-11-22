import cause_1 from '../assets/cause_1.jpg'
import cause_2 from '../assets/cause_2.jpg'


const HomeCauses = () => {
    const data = [
        {
            img:cause_2,
            title: 'Education for Everyone',
            text: 'In the XXI century, there are still plenty of countries where education is forbidden to women.',
            target: '$9000',
            raised: '$22,333',
            progress: '100%'
        },
         {
            img:cause_1,
            title: 'Feed every street child',
            text: 'This cause is meant to raise funds to build a chain of schools in Malawi, Burundi,…',
            target: '$9000',
            raised: '$398,207',
            progress: '50%'
        },
         {
            img:'https://img.freepik.com/free-photo/closeup-shot-boy-doctor-wearing-sanitary-masks_181624-41864.jpg?size=626&ext=jpg&ga=GA1.1.865150467.1694076383&semt=ais',
            title: 'Surgery for  children',
            text: 'Our organization stands for the right to education for every child and person on this planet.',
            target: '$9000',
            raised: '$10,640 ',
            progress: '100%'
        }

    ]
    return (
        <div className='bg-[#ffffff] flex flex-col gap-5 font-Open-Sans'>
            <div className="flex flex-col items-center mt-7">
                <h2 className='text-2xl font-extrabold uppercase mb-3 md:text-3xl xl:text-5xl'>our causes</h2>
                <p className='px-10 text-center md:text-[20px] font-normal lg:text-[22px] xl:text-[24px] xl:mt-4 mb-6'>You can help lots of people by donating little. <span className='text-[#84c54e]'><a href='#'>See our causes.</a></span></p>
            </div>

            {data.map((item, index) => (
                <div key={index} className='flex flex-col items-center gap-5'>
                    <div className='w-[240px] object-cover'>
                        <img src={item.img} className='w-full h-full rounded' alt="" />
                    </div>
                    <p className='text-[18px] font-bold text-[#84c54e] text-start w-full pl-[76px] pr-[84px] hover:text-[#ff6900]'>
                        {item.title}
                    </p>
                    <p className='text-[12.5px] leading-[1.4rem] pl-[76px] pr-[85px] text-left text-zinc-500'>
                        {item.text}
                    </p>

                    <div>
                        <p className='text-[14px] font-bold mb-2'>
                            <span className='text-[#84c54e] font-bold'>{item.raised}</span> of {item.target} raised
                        </p>
                        <div className="w-[240px] h-5 bg-[#eee] rounded-full mb-5">
                            <div style={{ width: `${item.progress}` }} className="h-full text-center text-xs text-white bg-[#ff6900] rounded-full">
                            </div>
                        </div>
                        <div className="mb-10 flex items-center justify-center font-bold btn-sm h-[44px] w-[100px]  bg-[#ffe400] hover:bg-[#84c54e] hover:text-white mr-2.5 border-none rounded">
                            Donate
                        </div>
                    </div>
                </div>
            ))}



        </div>
    )
}





export default HomeCauses;