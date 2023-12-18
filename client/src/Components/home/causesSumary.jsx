import RenderData from "../shared/causeRender";
import { useSelector } from "react-redux";

const HomeCauses = () => {
    const causeData = useSelector((state) => state.cause.data);
    const filteredCauses = causeData.filter(cause => [3, 5, 7].includes(cause.cause_id));


    return (
        <div className="bg-[#ffffff] flex flex-col font-Open-Sans items-center justify-center pb-20">
            <div className="flex flex-col items-center mt-10 lg:mt-10 xl:mt-14 mb-5 md:mb-0">
                <h2 className="text-2xl font-extrabold uppercase mb-4 md:text-3xl xl:text-5xl">
                    our causes
                </h2>
                <p className="px-10 text-center md:text-[19px] font-normal lg:text-[22px] xl:text-[24px] xl:mt-4 mb-6">
                    You can help lots of people by donating little.{" "}
                    <span className="text-[#84c54e]">
                        <a href="#">See our causes.</a>
                    </span>
                </p>
            </div>

            <RenderData data={filteredCauses}></RenderData>
        </div>
    );
};

export default HomeCauses;
