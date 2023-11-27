import { RiArrowRightCircleFill } from "react-icons/ri";
import CountUpAnimation from "./counterAnimation";


const StatsComp = () => {
	const image = 'https://img.freepik.com/free-photo/back-view-crowd-fans-watching-live-concert-performance-3_1562-629.jpg?size=626&ext=jpg&ga=GA1.1.865150467.1694076383&semt=ais'

	const data = [
		{
			id: 1,
			figure: '12755',
			title: 'Numbers of Volunteers',
			text: 'We are more than ten thousand volunteers in different countries.',
			btnText: 'Give Monthly',
		},
		{
			id: 2,
			figure: '100',
			title: 'Number of Projects',
			text: 'Our primary objectives are philanthropy and social well-being.',
			btnText: 'Fundraise',

		},
		{
			id: 3,
			figure: '1560300',
			title: 'Numbers of Volunteer Hours',
			text: 'Volunteers are a valuable resource to support the planet.',
			btnText: 'Partner With Us',

		},

	]

	return (

		<div className="bg-white w-full h-[1350px] md:h-[800px] lg:h-[750px] xl:h-[900px] 2xl:h-[900px]">
			<div className={`flex items-start relative w-full h-full xl:items-center`}>
				<div className=" object-cover w-full h-full">
					<img src={image} className='w-full h-full' />
				</div>

				<div className="absolute flex flex-col items-center w-full font-Open-Sans pt-[9rem] gap-16 md:pl-5 lg:pl-0 xl:pl-0 xl:pt-0 ">
					<p className='text-white uppercase font-[800] text-[60px] leading-[4.5rem] w-[300px] md:text-start md:pl-16 lg:pl-8 xl:pl-[8rem] 2xl:pl-[25rem] md:w-full'>How You can help</p>
					<div className='xl:px-0'>
						<div className='flex flex-col md:flex-row md:gap-8 w-full md:w-[85%] lg:w-full items-center px-7 md:px-0 '>
							<div className=' xl:px-24 2xl:px-0 md:flex xl:gap-8 md:gap-10'>
								{data.map((item, index) => (
									<div key={index + 1} className=''>
										<div className='w-full flex flex-col text-white gap-3'>
											<h1 className='text-[2.8rem] text-[#ffe400] lg:text-[4rem] font-bold flex'><CountUpAnimation duration={2000}>{item.figure}</CountUpAnimation></h1>
											<h2 className='font-bold md:text-[18px] xl:text-[22px] 2xl:text-[24px]'>{item.title}</h2>
											<p className='text-[13px] md:text-[15px] xl:text-[16px] leading-5 text-zinc-100 w-[270px] md:w-[180px] lg:w-[260px] 2xl:w-[350px] 2xl:leading-7'>{item.text}</p>
											<div className={`mb-10 md:mb-0 mt-7 md:mt-20 flex items-center justify-center pl-12 md:pl-5 font-bold btn-sm w-[280px] lg:w-[290px] md:w-[220px] 2xl:w-[350px] h-[55px] md:h-[60px] lg:h-[70px] xl:w-[310px] xl:h-[85px] text-white border-none rounded-[0.2rem] text-[16px] xl:text-[24px] ${item.id === 1 ? 'bg-[#e41c26] hover:bg-[#ff6900]' : item.id === 2 ? 'bg-[#ff6900] hover:bg-[#84c54e]' : 'bg-[#84c54e] hover:bg-[#ff6900]'}`}>
												{item.btnText} <RiArrowRightCircleFill className="ml-16 md:ml-5 lg:ml-10 2xl:ml-10 text-2xl lg:text-3xl xl:text-4xl" />
											</div>
										</div>
									</div>
								))}
							</div>

						</div>
					</div>

				</div>
			</div>
		</div >
	);
}



export default StatsComp;


//TODO:CLEAN CODE AND ENSURE THE STATS ANIMATION RUNS ONLY WHEN THE COMPONENT IS REACHED ON THE FIRST TIME