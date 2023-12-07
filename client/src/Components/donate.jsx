import flower from '../assets/flower.png';

const DonateSection = () => {
    return (
        <div className=" flex flex-col gap-8 bg-[#424242] px-14 pt-7 font-Open-Sans">
            <h3 className="text-white font-bold leading-[1.2rem]">Donate Today to Save Children From the Trauma of Abuse</h3>
            <div className='flex gap-3'>
                <div className='h-[80px] mt-16'>
                    <img src={flower} className='h-full w-full' alt="call to action" />
                </div>
                <div className='flex flex-col gap-3 mb-10'>
                    <div className='flex items-center justify-center w-[158px] h-[43px] font-bold rounded-[0.2rem] text-[16px] bg-[#ffe400] border-none hover:bg-[#ff6900] hover:text-white'> Single Donation</div>
                    <div className='btn btn-md rounded-[0.2rem] text-[17px] bg-[#84c54e] border-none hover:bg-[#ff6900] hover:text-white'> Regular Donation</div>
                </div>
            </div>
        </div>
    )
}

export default DonateSection;