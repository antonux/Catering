import React from 'react';

const SideNavbar = ({ setSelectedFilter }) => {
  return (
    <div className="font-roboto font-light nav-container relative p-10">
      <div className="z-30 fixed bg-gradient-to-r from-[#e8d4c3] via-[#d4b59e] to-[#cea98e] shadow-xl rounded-sm p-10 pb-7 pt-14">
        <nav className="flex z-30 flex-col items-start gap-4 relative text-[#222222]">
          <div class="z-0 absolute top-[-15.5rem] w-[2px] h-[14rem] bg-[#e1c4a1] transform"></div>
          <div class="z-0 absolute top-[-2.4rem] left-[-7px] w-[1rem] h-[1rem] rounded-full bg-[#b89374] transform"></div>
          <div class="z-0 absolute top-[-15.5rem] right-0 w-[2px] h-[14rem] bg-[#e1c4a1] transform"></div>
          <div class="z-0 absolute top-[-2.4rem] right-[-7px] w-[1rem] h-[1rem] rounded-full bg-[#b89374] transform"></div>
          <button onClick={() => setSelectedFilter("all")}>All</button>
          <button onClick={() => setSelectedFilter("main-entree")}>Main Entree</button>
          <div className="flex flex-col items-start gap-3 pl-5">
            <button onClick={() => setSelectedFilter("pork")}>Pork Dishes</button>
            <button onClick={() => setSelectedFilter("poultry")}>Poultry Dishes</button>
            <button onClick={() => setSelectedFilter("beef")}>Beef Dishes</button>
            <button onClick={() => setSelectedFilter("vegetable")}>Vegetable Dishes</button>
          </div>
          <button onClick={() => setSelectedFilter("soup")}>Soup</button>
          <button onClick={() => setSelectedFilter("dessert")}>Dessert/Salad</button>
        </nav>

      </div>
    </div>
  );
}

export default SideNavbar;