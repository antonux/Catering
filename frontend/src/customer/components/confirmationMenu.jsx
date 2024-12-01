
import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

const ConfirmationMenu = () => {
  const [selected, setSelected] = useState([]);

  const menuItems = [
    { id: 1, desc: "Braised pork belly dish with sweet-savory soy-vinegar sauce dadadad ada da da d ad ad ad adadadad", name: "Pork Humba", category: ["main-entree", "pork"], image: "/assets/customer/images/menuHumba.jpg" },
    { id: 2, desc: "Braised pork belly dish with sweet-savory soy-vinegar sauce", name: "Pork Humba", category: ["main-entree", "pork"], image: "/assets/customer/images/menuHumba.jpg" },
    { id: 3, desc: "Braised pork belly dish with sweet-savory soy-vinegar sauce", name: "Pork Humba", category: ["main-entree", "pork"], image: "/assets/customer/images/menuHumba.jpg" },
    { id: 4, desc: "Braised pork belly dish with sweet-savory soy-vinegar sauce", name: "Pork Humba", category: ["main-entree", "pork"], image: "/assets/customer/images/menuHumba.jpg" },
    { id: 5, desc: "Braised pork belly dish with sweet-savory soy-vinegar sauce", name: "Pork Humba", category: ["main-entree", "pork"], image: "/assets/customer/images/menuHumba.jpg" },
    { id: 6, desc: "Braised pork belly dish with sweet-savory soy-vinegar sauce", name: "Pork Humba", category: ["main-entree", "pork"], image: "/assets/customer/images/menuHumba.jpg" },
    { id: 7, desc: "Braised pork belly dish with sweet-savory soy-vinegar sauce", name: "Pork Humba", category: ["main-entree", "pork"], image: "/assets/customer/images/menuHumba.jpg" },
    { id: 8, desc: "Braised pork belly dish with sweet-savory soy-vinegar sauce", name: "Pork Humba", category: ["main-entree", "pork"], image: "/assets/customer/images/menuHumba.jpg" },
    { id: 9, desc: "Braised pork belly dish with sweet-savory soy-vinegar sauce", name: "Pork Humba", category: ["main-entree", "pork"], image: "/assets/customer/images/menuHumba.jpg" },
  ];

  const [activeFilter, setActiveFilter] = useState("all");

  const activeCategory = (category) =>
    `${category == activeFilter
      ? "px-6 rounded-full py-[3.5px]  text-white bg-[#4f4d4d]"
      : "px-6 rounded-full text-[#4f4d4d] bg-[#ebecee] hover:bg-[#ded3d3]"
    }`;

  const handleFilterChange = (filterId) => {
    // setSelectedFilter(filterId);
    setActiveFilter(filterId);
    activeCategory(filterId);
  };

  return (
    <div className="w-full p-14 space-y-4">
      <h1 className="font-roboto text-5xl font-bold text-[#222222] tracking-wide">Confirmation Menu</h1>
      <p className="italic">*Select and Add a Dish to include to Your Order.</p>

      <div className="flex flex-col gap-7">
        <div className="div flex flex-col gap-4">
          {/* <pre>{JSON.stringify(selected)}</pre> */}
          <TagsInput
            value={selected}
            onChange={setSelected}
            name="Soup"
            placeHolder="Soup"
          />
          <div className="flex flex-col gap-2 w-full h-[27rem] bg-[#f5f5f5] pt-7 pb-3">
            <div className="flex pl-8 gap-6 text-[#4f4d4d]">
              <button className={`${activeCategory("all")}`} onClick={() => handleFilterChange("all")}>All</button>
              <button className={`${activeCategory("pork")}`} onClick={() => handleFilterChange("pork")}>Pork</button>
              <button className={`${activeCategory("poultry")}`} onClick={() => handleFilterChange("poultry")}>Poultry</button>
              <button className={`${activeCategory("beef")}`} onClick={() => handleFilterChange("beef")}>Beef</button>
              <button className={`${activeCategory("vegetables")}`} onClick={() => handleFilterChange("vegetables")}>Vegetables</button>
            </div>
            <div className="flex gap-10 w-full pt-5 pb-6 px-6 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-sm">
              {menuItems.map((item) => (
                <div key={item.id} className="bg-[#313131] w-[12rem] h-[14.5rem] cursor-pointer rounded-b-md border-[#d3d3d3] border-[1.3px] flex-shrink-0 hover:scale-105 transition-transform duration-300">
                  <img className="h-[8rem] w-[12rem] object-cover" src={item.image} alt={item.name} />
                  <div className="mt-5 pb-2 px-4 menuNavBg text-white">
                    <h1 className="text-start text-[#ffffff] font-roboto h-[32px] text-[17px] font-normal">
                      {item.name}
                    </h1>
                    <p className="text-start h-[2.5rem] overflow-hidden font-roboto font-light text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="div w-full items-center justify-center flex mt-3">
              <button className="text-base w-[8rem] py-2 bg-[#618b60] text-[#f2f1ed] font-light hover:border-[#c7b391] rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="div flex flex-col gap-4">
          {/* <pre>{JSON.stringify(selected)}</pre> */}
          <TagsInput
            value={selected}
            onChange={setSelected}
            name="MainEntree"
            placeHolder="Main Entree"
          />
          <div className="flex flex-col gap-2 w-full h-[27rem] bg-[#f5f5f5] pt-7 pb-3">
            <div className="flex pl-8 gap-6 text-[#4f4d4d]">
              <button className={`${activeCategory("all")}`} onClick={() => handleFilterChange("all")}>All</button>
              <button className={`${activeCategory("pork")}`} onClick={() => handleFilterChange("pork")}>Pork</button>
              <button className={`${activeCategory("poultry")}`} onClick={() => handleFilterChange("poultry")}>Poultry</button>
              <button className={`${activeCategory("beef")}`} onClick={() => handleFilterChange("beef")}>Beef</button>
              <button className={`${activeCategory("vegetables")}`} onClick={() => handleFilterChange("vegetables")}>Vegetables</button>
            </div>
            <div className="flex gap-10 w-full pt-5 pb-6 px-6 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-sm">
              {menuItems.map((item) => (
                <div key={item.id} className="bg-[#313131] w-[12rem] h-[14.5rem] cursor-pointer rounded-b-md border-[#d3d3d3] border-[1.3px] flex-shrink-0 hover:scale-105 transition-transform duration-300">
                  <img className="h-[8rem] w-[12rem] object-cover" src={item.image} alt={item.name} />
                  <div className="mt-5 pb-2 px-4 menuNavBg text-white">
                    <h1 className="text-start text-[#ffffff] font-roboto h-[32px] text-[17px] font-normal">
                      {item.name}
                    </h1>
                    <p className="text-start h-[2.5rem] overflow-hidden font-roboto font-light text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="div w-full items-center justify-center flex mt-3">
              <button className="text-base w-[8rem] py-2 bg-[#618b60] text-[#f2f1ed] font-light hover:border-[#c7b391] rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
                Add
              </button>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default ConfirmationMenu
