import introPic from '../assets/images/introPic.png';
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

const introHome = () => {

	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			transition={{ duration: .5 }}
		>
			<div className="flex items-center gap-28 justify-center mt-14">

				<div className="flex flex-col items-center">
					<h1
						className="text-center text-5xl leading-[3.5rem] lg:text-7xl 
						font-sail font-normal lg:leading-[5rem] text-transparent bg-clip-text 
						bg-gradient-to-r from-[#a57c00] to-[#222222]"
					>
						Cuisine<br />Crafted<br />With Care
					</h1>
					<div className="ml-[1.5rem] flex items-center mt-3">
						<div className="border-l-[2px] border-[#e6af2e] h-8 w-3 ml-[-1.5rem]"></div>
						<p className="font-roboto tracking-widest text-sm">Savor every moment, we’ll handle the feast!</p>
					</div>
					<div className="font-roboto flex mt-4 w-full text-sm gap-3 flex-col lg:w-auto lg:text-base lg:flex-row lg:gap-5 text-nowrap lg:mt-8">
            <NavLink to="/request">
							<button className="px-14 py-2 bg-[#383635] border-2 border-[#383635]  text-[#f2f1ed] font-medium rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
								Request Now
							</button>
            </NavLink>
            <NavLink to="/contacts">
						<button className="px-14 py-2 border-2 border-[#4a4745] text-[#4a4745] bg-transparent rounded-lg shadow-lg hover:bg-[#a08c63] hover:text-[#f2f1ed] hover:shadow-xl hover:scale-105 transition-transform duration-300">
							Contact Us
						</button>
            </NavLink>
					</div>
				</div>

				<div className="w-[19rem] lg:w-[25rem] h-auto hidden md:block">
					<img className="size-full object-cover" src={introPic}></img>
				</div>

			</div>
		</motion.div>
	)
}

export default introHome