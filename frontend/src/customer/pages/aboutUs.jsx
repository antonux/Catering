import teamPic from '../assets/images/teamPic.png'
import teamPic2 from '../assets/images/teamPic2.png'
import ourArt from '../assets/images/ourArt.png'

const aboutUs = () => {
	return (
		<div className="flex flex-col items-center mt-16">
			{/* team */}
			<div className="team flex gap-10 items-center justify-center">
				<div className="relative pr-[11.5rem]">
					<img className="z-40 relative" src={teamPic}></img>
					<img className="z-10 absolute h-[14rem] top-14 right-0" src={teamPic2}></img>
				</div>
				<div className="relative teamtext">
					<h1 className="relative text-4xl pl-14 lg:text-6xl font-sail font-normal text-[#222222]">
						The team
					</h1>
					<div className="absolute w-[2px] h-12 top-2 left-9 bg-black"></div>
					<p className='bg-[#ffffff33] shadow-md p-5 pt-4 text-justify text-[#361f10]
					 font-roboto font-light w-[20rem] text-sm md:text-lg h-auto md:leading-7 md:w-[28rem] rounded-lg'>
						At Virtucio Caterers, we are more than
						just a catering company - we are a team
						dedicated to crafting unforgettable
						culinary experiences. With a passion for
						excellence and a commitment to exceeding
						expectations, our team brings together
						a blend of creativity, expertise, and
						dedication to every event we cater.
					</p>
				</div>
			</div>
			{/* team */}

			{/* mission */}
			<div className="font-roboto flex flex-col text-[#222222] items-center gap-2 text-center mt-24">
				<p className='text-base'>OUR MISSION</p>
				<h1 className='text-3xl font-bold'>Delivering Culinary Perfection, One Event at a Time</h1>
				<p className='text-lg font-light tracking-wide w-[30rem] text-[#222222]'>
					With years of experience and a passion for culinary
					innovation, our chefs artfully blend flavors, textures, and
					presentation to create unforgettable dining experiences.
					Every ingredient is thoughtfully selected, every recipe
					perfected, ensuring that each bite delights the senses and
					leaves a lasting impression.
				</p>
			</div>
			{/* mission */}

			{/* our art */}
			<div className="flex flex-col h-auto my-20 w-auto pr-[20rem] mb-36">
				<div className="bg-[#f6eeee] relative h-[26rem] px-11 py-8 rounded-2xl w-[37rem]">
					<p className='font-roboto leading-[35px] text-base'>OUR ART</p>
					<h1 className='font-roboto text-3xl font-bold tracking-wide text-[#222222]'>
						Elevating events with <br />
						exceptional cuisine
					</h1>
					<p className='pt-4 text-justify flex items-start text-[#361f10]
					 font-roboto leading-7 text-lg h-[15rem] relative w-[25rem] tracking-wide font-light'>
						our commitment to transforming ordinary gatherings into extraordinary experiences through
						the power of food. At Virtucio Caterers, we believe that cuisine plays a pivotal role in
						the success of any event. Our dedication to culinary excellence means that every
						dish we create is thoughtfully crafted with precision, passion, and creativity.
					</p>
					<img className="z-10 absolute h-[18rem] top-[6rem] right-[-20rem] pl-20" src={ourArt}></img>
				</div>

			</div>
			{/* our art */}
		</div>
	)
}

export default aboutUs