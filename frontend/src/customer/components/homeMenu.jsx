import { Link } from 'react-router-dom';

import soupHome from '../assets/images/soupHome.png';
import mainEntreeHome from '../assets/images/mainEntreeHome.png';
import dessertHome from '../assets/images/dessertHome.png';

const menuHome = () => {

  return (
    <div className="relative home-menu text-lg flex flex-col items-center justify-center mt-32 w-[65rem] p-10 py-16 rounded-lg">
      <h1 className="relative pl-1 text-4xl translate-y-[-29px] lg:text-[3.3rem] 
				font-sail translate-x-[-8px] text-[#222222] z-10 ">Menu</h1>
      <div className="absolute top-0 translate-y-14 left-0 bg-gradient-to-r from-[#f6edd8] to-[#39221c] h-[2px] w-[40%]"></div>
      <div className="absolute top-0 translate-y-14 right-0 bg-gradient-to-l from-[#f6edd8] to-[#39221c] h-[2px] w-[40%]"></div>

      <div className="font-roboto font-light mt-4 gap-16 text-center flex w-full justify-center">
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
          <Link
            to={"/menu"}
            state={{ filter: 'soup' }}
            className="absolute bottom-0 translate-y-[-9px] text-base px-14 py-[0.4rem] bg-[#383635] text-[#f2f1ed] font-medium hover:border-[#c7b391] rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            View
          </Link>
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
          <Link
            to={"/menu"}
            state={{ filter: 'main-entree' }}
            className="absolute bottom-0 translate-y-[-9px] text-base px-14 py-[0.4rem] bg-[#383635] text-[#f2f1ed] font-medium hover:border-[#c7b391] rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            View
          </Link>
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
          <Link
            to={"/menu"}
            state={{ filter: 'dessert' }}
            className="absolute bottom-0 translate-y-[-9px] text-base px-14 py-[0.4rem] bg-[#383635] text-[#f2f1ed] font-medium hover:border-[#c7b391] rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            View
          </Link>
        </div>

      </div>

    </div>
  )
}

export default menuHome