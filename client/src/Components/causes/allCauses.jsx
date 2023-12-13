import cause_1 from '../../assets/cause_1.jpg'
import cause_2 from '../../assets/cause_2.jpg'
import RenderData from '../shared/causeRender'


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

const Causes = () => {
    return (
        <div >
            <h2 className='text-2xl mt-10 mb-14 md:mt-14 lg:mt-20   font-Open-Sans text-[#84c54e] text-center md:text-start capitalize md:mb-10 md:text-[2.5rem] lg:text-[3rem] xl:text-5xl 2xl:text-7xl md:pl-20 xl:px-[22rem]'>our causes</h2>

            <div className='bg-[#ffffff] flex flex-col font-Open-Sans items-center justify-center pb-20'>
                <RenderData data={data}></RenderData>
            </div>

        </div>
    )
}


export default Causes;