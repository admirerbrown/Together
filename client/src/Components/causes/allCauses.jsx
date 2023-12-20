import { useSelector } from "react-redux";
import RenderData from '../shared/causeRender'



const Causes = () => {
    const causeData = useSelector((state) => state.cause.data);

    return (
        <div >
            <h2 className='text-2xl mt-10 mb-14 md:mt-14 lg:mt-20 font-Open-Sans text-[#84c54e] text-center md:text-start capitalize md:mb-10 md:text-[2.5rem] lg:text-[3rem] xl:text-[3.8rem] 2xl:text-7xl md:pl-20 xl:pl-[6rem] 2xl:px-[22rem]'>our causes</h2>

            <div className='bg-[#ffffff] flex flex-col font-Open-Sans items-center justify-center pb-20'>
                <RenderData data={causeData}></RenderData>
            </div>

        </div>
    )
}


export default Causes;