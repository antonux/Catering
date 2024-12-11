import { motion } from "framer-motion";
import React from "react";
import { useState, useEffect, useRef } from "react";

const Menu = ({selectedFilter}) => {

  // Sample menu data
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/menu"); // Replace <PORT> with the correct port
        const data = await response.json();
        setMenuItems(data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };
    fetchMenuItems();
  }, []);

  // Filter logic
  const filteredMenu =
    selectedFilter === "all"
      ? menuItems
      : menuItems.filter(item => item.category.includes(selectedFilter));

  // Reusable function to render sections
  const renderSection = (title, category) => (
    <div className="mb-[5rem]">
      <p className="ml-4 mb-2 mt-8 font-roboto tracking-wide font-normal text-sm">{title}</p>
      <div className="grid grid-cols-3 gap-y-[2rem] gap-x-8 w-auto h-auto">
        {filteredMenu
          .filter(item => item.category.includes(category))
          .map(item => (
            <motion.div
              key={item.id}
              className="bg-[#333333] w-[18rem] h-[20.5rem] rounded-b-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              <div key={item.id} className="bg-[#333333] w-[18rem] h-[20.5rem] rounded-b-md">
                <img className="h-[13rem] w-[18rem] object-cover" src={`http://localhost:4000${item.image}`} alt={item.name} />
                <div className="mt-5 pb-2 pl-5 menuNavBg text-white">
                  <h1 className="text-start text-[#fff82b] font-roboto h-[32px] text-[17px] font-normal">{item.name}</h1>
                  <p className=" text-start h-[2.5rem] overflow-hidden font-roboto font-light text-sm">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );

  const renderCategory = (categoryName) => {
    return filteredMenu.some(item => item.category.includes(categoryName)) && renderSection(`${[categoryName[0].toUpperCase(), ...categoryName.slice(1)].join('')} Dishes`, categoryName);
  };

  return (

    <div className="mb-[5rem] text-5xl font-sail font-normal">
      {/* Main Entree Section */}
      <div className={`${filteredMenu.some(item => item.category.some(cat => ["pork", "poultry", "beef", "vegetable"].includes(cat))) ? "" : "hidden"}`}>
        <h1 className="relative  w-[58rem] text-4xl lg:text-5xl font-sail font-normal text-[#222222]">
          <span className="text-[#a57c00] relative">M</span>ain Entree
          <div className="absolute translate-y-[-23px] bg-gradient-to-l from-[#e9e9e9] to-[#a57c00] h-[2px] w-[70%] right-0"></div>
        </h1>
        {renderCategory("pork")}
        {renderCategory("poultry")}
        {renderCategory("beef")}
        {renderCategory("vegetable")}
      </div>

      {/* Soup Section */}
      <div className={`${filteredMenu.some(item => item.category.includes("soup")) ? "" : "hidden"}`}>
        <h1 className="relative  w-[58rem] text-4xl lg:text-5xl font-sail font-normal text-[#222222]">
          <span className="text-[#a57c00] relative">S</span>oup
          <div className="absolute translate-y-[-23px] bg-gradient-to-l from-[#e9e9e9] to-[#a57c00] h-[2px] w-[86%] right-0"></div>
        </h1>
        {renderSection("", "soup")}
      </div>

      {/* Dessert Section */}
      <div className={`${filteredMenu.some(item => item.category.includes("dessert")) ? "" : "hidden"}`}>
        <h1 className="relative  w-[58rem] text-4xl lg:text-5xl font-sail font-normal text-[#222222]">
          <span className="text-[#a57c00] relative">D</span>essert/Salad
          <div className="absolute translate-y-[-23px] bg-gradient-to-l from-[#e9e9e9] to-[#a57c00] h-[2px] w-[66%] right-0"></div>
        </h1>
        {renderSection("", "dessert")}
      </div>

    </div>

  )
}

export default Menu