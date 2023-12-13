/* eslint-disable react/prop-types */
import cause_1 from '../../assets/cause_1.jpg'
import cause_2 from '../../assets/cause_2.jpg'
import RenderData from '../shared/causeRender'


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

            <RenderData data={data}></RenderData>
        </div>
    )
}


export default HomeCauses;