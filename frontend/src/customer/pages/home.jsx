import introPic from '../assets/images/introPic.png';
// import mvPic from '../assets/images/mvPic.png';
import mvPic from '../assets/images/catering.png';
import soupHome from '../assets/images/soupHome.png';
import mainEntreeHome from '../assets/images/mainEntreeHome.png';
import dessertHome from '../assets/images/dessertHome.png';
import { MdRestaurantMenu } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const home = () => {
	return (
		<div className="home flex flex-col items-center pb-32">

			{/* intro */}
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
						<button className="px-14 py-2 bg-[#383635]  text-[#f2f1ed] font-medium hover:border-[#c7b391] rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
							Request Now
						</button>
						<button className="px-14 py-2 border-2 border-[#4a4745] text-[#4a4745] bg-transparent rounded-lg shadow-lg hover:bg-[#a08c63] hover:text-[#f2f1ed] hover:shadow-xl hover:scale-105 transition-transform duration-300">
							Contact Us
						</button>
					</div>
				</div>

				<div className="w-[19rem] lg:w-[25rem] h-auto hidden md:block">
					<img className="size-full object-cover" src={introPic}></img>
				</div>

			</div>
			{/* intro */}

			{/* Mission Vission */}
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
							<p className='bg-[#ffffff33] shadow-sm p-2 pt-4 text-justify w-[20rem] font-roboto text-sm md:text-base h-[200px] md:w-[490px] rounded-lg'>At our catering service, we are driven by a clear mission: to craft unforgettable culinary experiences that delight our clients and their guests. We envision ourselves as more than just a catering company; we aim to be the trusted partner that turns every occasion into a cherished memory. With a passion for culinary excellence and a commitment to impeccable service, we strive to exceed expectations at every event we cater.</p>
						</div>
						<div className="vision">
							<div className="relative inline-block">
								<h1 className="w-[30rem] text-4xl lg:text-5xl font-sail font-normal text-[#222222]">
									<span className="text-[#a57c00]">V</span>ission
								</h1>
								<div className="absolute bottom-0 translate-y-[-23px] bg-gradient-to-l from-[#e9e9e9] to-[#a57c00] h-[2px] w-[63%] right-0"></div>
							</div>
							<p className='bg-[#ffffff33] shadow-sm p-2 pt-4 text-justify text-[#361f10] font-roboto w-[20rem] text-sm md:text-base h-[200px] md:w-[490px] rounded-lg'>At our catering service, we are driven by a clear mission: to craft unforgettable culinary experiences that delight our clients and their guests. We envision ourselves as more than just a catering company; we aim to be the trusted partner that turns every occasion into a cherished memory. With a passion for culinary excellence and a commitment to impeccable service, we strive to exceed expectations at every event we cater.</p>
						</div>
					</div>
				</div>

			</div>
			{/* Mission Vission */}

			{/* Our Menu */}
			<div className="relative home-menu text-lg flex flex-col items-center justify-center mt-32 w-[65rem] p-10 py-16 rounded-lg">
				<h1 className="relative pl-1 text-4xl translate-y-[-29px] lg:text-[3.3rem] 
				font-sail translate-x-[-8px] text-[#222222] z-10 ">Menu</h1>
				<div className="absolute top-0 translate-y-14 left-0 bg-gradient-to-r from-[#f6edd8] to-[#39221c] h-[2px] w-[40%]"></div>
				<div className="absolute top-0 translate-y-14 right-0 bg-gradient-to-l from-[#f6edd8] to-[#39221c] h-[2px] w-[40%]"></div>

				<div className="font-roboto mt-4 gap-16 text-center flex w-full justify-center">
					<div className="relative w-[16rem] h-full bg-[#fffff9] flex flex-col justify-center shadow-lg items-center rounded-[2.5rem]">
						<div className="h-[14.5rem]">
							<img className="size-full object-cover" src={soupHome}></img>
						</div>
						<p className='relative text-[#896229] mt-7 font-sail text-4xl bg-[#fffff9] w-24 text-center z-40'>Soup</p>
						<div className="absolute translate-y-3 bg-black h-[1px] w-full"></div>
						<div className="px-7 py-5 h-[15rem] flex">
							<label className='text-[#361f10] md:leading-[1.1rem] font-roboto text-sm md:text-sm rounded-lg'>“Warm your soul with our savory
								soups! Made with fresh ingredients
								and bursting with flavor, our soups
								are the perfect comfort food for
								any occasion. From creamy classics
								to hearty broths, indulge in a bowl
								of deliciousness today!”</label>
						</div>
						<button className="bottom-0 absolute text-base translate-y-[-9px] px-14 py-[0.4rem] bg-[#383635] text-[#f2f1ed] font-medium hover:border-[#c7b391] rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
							View
						</button>
					</div>

					<div className="relative w-[16rem] h-full bg-[#fffff9] flex flex-col justify-center shadow-lg items-center rounded-[2.5rem]">
						<div className="h-[14.5rem]">
							<img className="size-full object-cover" src={mainEntreeHome}></img>
						</div>
						<p className='relative text-[#896229] mt-7 font-sail text-4xl bg-[#fffff9] w-52 text-center z-40'>Main Entree</p>
						<div className="absolute bg-black h-[1px] w-full translate-y-3"></div>
						<div className="px-7 py-5 h-[15rem] flex">
							<label className='text-[#361f10] md:leading-[1.1rem] font-roboto text-sm md:text-sm rounded-lg'>"Elevate your dining experience with our
								mouthwatering main entrees! From succulent
								steaks to gourmet seafood dishes, each entree
								is crafted with care and precision to deliver an
								unforgettable culinary journey. Explore our menu
								and savor the flavors of excellence tonight!"</label>
						</div>
						<button className="bottom-0 absolute text-base translate-y-[-9px] px-14 py-[0.4rem] bg-[#383635] text-[#f2f1ed] font-medium hover:border-[#c7b391] rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
							View
						</button>
					</div>

					<div className="relative w-[16rem] h-full bg-[#fffff9] flex flex-col justify-center shadow-lg items-center rounded-[2.5rem]">
						<div className="h-[14.5rem]">
							<img className="size-full object-cover" src={dessertHome}></img>
						</div>
						<p className='relative mt-7 text-[#896229] font-sail text-4xl bg-[#fffff9] w-36 text-center z-40'>Dessert</p>
						<div className="absolute bg-black h-[1px] w-full translate-y-3"></div>
						<div className="px-7 py-5 h-[15rem] flex">
							<label className='text-[#361f10] md:leading-[1.1rem] font-roboto text-sm md:text-sm rounded-lg'>"Satisfy your sweet cravings with our
								irresistible desserts! Indulge in decadent cakes, heavenly pastries,
								and creamy delightsthat will tantalize your taste buds. Whether
								it's a special celebration or a sweet treat for yourself, our
								desserts are sure to delight!"</label>
						</div>
						<button className="bottom-0 absolute text-base translate-y-[-9px] px-14 py-[0.4rem] bg-[#383635] text-[#f2f1ed] font-medium hover:border-[#c7b391] rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
							View
						</button>
					</div>

				</div>

			</div>
			{/* Our Menu */}


		</div>
	)
}

export default home