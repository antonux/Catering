import mvPic from '../assets/images/catering.png';
import { motion } from "framer-motion";

const missionVisionHome = () => {

  return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			transition={{ duration: .5 }}
		>
			<div className="flex items-center gap-28 justify-center mt-40">

				<div className="w-[19rem] lg:w-[25rem] h-auto hidden md:block">
					<img className="size-full object-cover" src={mvPic}></img>
				</div>

				<div className="flex flex-col">
					<div className="ml-[1.5rem] flex flex-col mt-3 gap-14">
						<div className="vision">
							<div className="relative inline-block">
								<h1 className="w-[30rem] text-4xl lg:text-5xl font-sail font-normal text-[#222222]">
									<span className="text-[#a57c00]">M</span>ission
								</h1>
								<div className="absolute bottom-0 translate-y-[-23px] bg-gradient-to-l from-[#e9e9e9] to-[#a57c00] h-[2px] w-[60%] right-0"></div>
							</div>
							<p className='bg-[#ffffff33] shadow-sm p-2 pt-4 text-justify w-[20rem] font-roboto font-light text-sm md:text-base h-[200px] md:w-[490px] rounded-lg'>At our catering service, we are driven by a clear mission: to craft unforgettable culinary experiences that delight our clients and their guests. We envision ourselves as more than just a catering company; we aim to be the trusted partner that turns every occasion into a cherished memory. With a passion for culinary excellence and a commitment to impeccable service, we strive to exceed expectations at every event we cater.</p>
						</div>
						<div className="vision">
							<div className="relative inline-block">
								<h1 className="w-[30rem] text-4xl lg:text-5xl font-sail font-normal text-[#222222]">
									<span className="text-[#a57c00]">V</span>ission
								</h1>
								<div className="absolute bottom-0 translate-y-[-23px] bg-gradient-to-l from-[#e9e9e9] to-[#a57c00] h-[2px] w-[63%] right-0"></div>
							</div>
							<p className='bg-[#ffffff33] shadow-sm p-2 pt-4 text-justify text-[#361f10] font-roboto font-light w-[20rem] text-sm md:text-base h-[200px] md:w-[490px] rounded-lg'>At our catering service, we are driven by a clear mission: to craft unforgettable culinary experiences that delight our clients and their guests. We envision ourselves as more than just a catering company; we aim to be the trusted partner that turns every occasion into a cherished memory. With a passion for culinary excellence and a commitment to impeccable service, we strive to exceed expectations at every event we cater.</p>
						</div>
					</div>
				</div>

			</div>
</motion.div>

  )

}

export default missionVisionHome