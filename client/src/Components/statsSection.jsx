import { useEffect, useState } from 'react';
import { RiArrowRightCircleFill } from "react-icons/ri";


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

		<div className="bg-white w-full h-[1350px] md:h-[800px] lg:h-[750px] xl:h-[640px] 2xl:h-[800px]">
			<div className={`flex items-start relative w-full h-full`}>
				<div className=" object-cover w-full h-full">
					<img src={image} className='w-full h-full' />
				</div>

				<div className="absolute flex flex-col items-center w-full font-Open-Sans pt-[9rem] gap-16 md:pl-5 lg:pl-12">
					<p className='text-white uppercase font-[800] text-[60px] leading-[4.5rem] w-[300px] md:text-start md:pl-16 lg:pl-2 md:w-full'>How You can help</p>
					<div className='flex flex-col md:flex-row gap-14 md:gap-8 w-full md:w-[85%] lg:w-full items-center px-7 md:px-0 '>
						{data.map((item, index) => (
							<div key={index + 1} className=''>
								<div  className='w-full flex flex-col text-white gap-3'>
									<h1 className='text-[2.8rem] text-[#ffe400] lg:text-[4rem] font-bold flex'><CountUpAnimation>{item.figure}</CountUpAnimation></h1>
									<h2 className='font-bold md:text-[18px]'>{item.title}</h2>
									<p className='text-[13px] md:text-[15px] leading-5 text-zinc-100 w-[270px] md:w-[180px] lg:w-[260px]'>{item.text}</p>
									<div className={`mt-7 md:mt-20 flex items-center justify-center pl-12 md:pl-5 font-bold btn-sm w-[280px] lg:w-[290px] md:w-[220px] h-[55px] md:h-[60px] lg:h-[70px] xl:w-[370px] xl:h-[85px] text-white border-none rounded-[0.2rem] text-[16px] xl:text-[24px] ${item.id === 1 ? 'bg-[#e41c26] hover:bg-[#ff6900]' : item.id === 2 ? 'bg-[#ff6900] hover:bg-[#84c54e]' : 'bg-[#84c54e] hover:bg-[#ff6900]'}`}>
										{item.btnText} <RiArrowRightCircleFill className="ml-16 md:ml-5 text-2xl lg:text-4xl" />
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div >
	);
}

const easeOutQuad = t => t * (2 - t);
const frameDuration = 1000 / 60;

const CountUpAnimation = ({ children, duration = 2000 }) => {
	const countTo = parseInt(children, 10);
	const [count, setCount] = useState(0);

	useEffect(() => {
		let frame = 0;
		const totalFrames = Math.round(duration / frameDuration);
		const counter = setInterval(() => {
			frame++;
			const progress = easeOutQuad(frame / totalFrames);
			setCount(countTo * progress);

			if (frame === totalFrames) {
				clearInterval(counter);
			}
		}, frameDuration);

	}, [countTo, duration]);

	return Math.floor(count);
};

export default StatsComp;