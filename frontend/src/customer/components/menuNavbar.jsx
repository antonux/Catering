import React, { useState, useEffect } from 'react';

const SideNavbar = ({ setSelectedFilter, passFilter }) => {

  const [activeFilter, setActiveFilter] = useState("all");

  const activeCategory = (category) =>
    `${category == activeFilter
      ? "text-[#fff82b]" // Active styles
      : "text-[#ffffff] hover:text-[#dcdcdc] transition duration-300"
    }`;

  const handleFilterChange = (filterId) => {
    setSelectedFilter(filterId);
    setActiveFilter(filterId);
    activeCategory(filterId);
  };

  useEffect(() => {
    handleFilterChange(passFilter)
  },[passFilter]);

  return (
    <div className="font-roboto font-normal nav-container relative p-10">
      <div className="z-30 fixed bg-[#333333] translate-y-[-11.5rem] h-full rounded-sm p-0 pb-7 pt-[13rem]">
        <nav className="flex z-30 flex-col items-start gap-4 relative translate-y-[-4rem] px-10 py-7 text-[#ffffff]">
          {/* <div class="z-0 absolute top-[-15.5rem] w-[2px] h-[14rem] bg-[#bd9566] transform"></div>
          <div class="z-0 absolute top-[-2.4rem] left-[-7px] w-[1rem] h-[1rem] rounded-full bg-[#b89374] transform"></div>
          <div class="z-0 absolute top-[-15.5rem] right-0 w-[2px] h-[14rem] bg-[#bd9566] transform"></div>
          <div class="z-0 absolute top-[-2.4rem] right-[-7px] w-[1rem] h-[1rem] rounded-full bg-[#b89374] transform"></div> */}
          <button className={`${activeCategory("all")}`} onClick={() => handleFilterChange("all")}>All</button>
          <button className={`${activeCategory("main-entree")}`} onClick={() => handleFilterChange("main-entree")}>Main Entree</button>
          <div className="flex flex-col items-start gap-3 pl-5">
            <button className={`${activeCategory("pork")}`} onClick={() => handleFilterChange("pork")}>Pork Dishes</button>
            <button className={`${activeCategory("poultry")}`} onClick={() => handleFilterChange("poultry")}>Poultry Dishes</button>
            <button className={`${activeCategory("beef")}`} onClick={() => handleFilterChange("beef")}>Beef Dishes</button>
            <button className={`${activeCategory("vegetable")}`} onClick={() => handleFilterChange("vegetable")}>Vegetable Dishes</button>
          </div>
          <button className={`${activeCategory("soup")}`} onClick={() => handleFilterChange("soup")}>Soup Dishes</button>
          <button className={`${activeCategory("dessert")}`} onClick={() => handleFilterChange("dessert")}>Dessert Dishes</button>
        </nav>

      </div>
    </div>
  );
}

export default SideNavbar;