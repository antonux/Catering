import React, { useState } from 'react';
import SideNavbar from '../components/menuNavbar'

const Menu = () => {

  // Sample menu data
  const menuItems = [
    { id: 1, desc: "Braised pork belly dish with sweet-savory soy-vinegar sauce ddddddddddddddddddddddddddddddddddd", name: "Pork Humba", category: ["main-entree", "pork"], image: "/assets/customer/images/menuHumba.jpg" },
    { id: 2, desc: "dadadadad", name: "Chicken Cordon Blue", category: ["main-entree", "poultry"], image: "/assets/customer/images/menuCordon.jpg" },
    { id: 3, desc: "dadadadad", name: "Beef Caldereta", category: ["main-entree", "beef"], image: "/assets/customer/images/menuCaldereta.jpg" },
    { id: 4, desc: "dadadadad", name: "Chopsuey", category: ["main-entree", "vegetable"], image: "/assets/customer/images/menuChopsuey.jpg" },
    { id: 5, desc: "dadadadad", name: "Seafood Chowder", category: ["soup"], image: "/assets/customer/images/menuChowder.jpg" },
    { id: 6, desc: "dadadadad", name: "Mango Float", category: ["dessert"], image: "/assets/customer/images/menuMango.jpg" },
    { id: 7, desc: "dadadadad", name: "Chicken Cordon Blue", category: ["main-entree", "poultry"], image: "/assets/customer/images/menuCordon.jpg" },
    { id: 8, desc: "dadadadad", name: "Beef Caldereta", category: ["main-entree", "beef"], image: "/assets/customer/images/menuCaldereta.jpg" },
    { id: 9, desc: "dadadadad", name: "Chopsuey", category: ["main-entree", "vegetable"], image: "/assets/customer/images/menuChopsuey.jpg" },
    { id: 10, desc: "dadadadad", name: "Seafood Chowder", category: ["soup"], image: "/assets/customer/images/menuChowder.jpg" },
    { id: 11, desc: "dadadadad", name: "Mango Float", category: ["dessert"], image: "/assets/customer/images/menuMango.jpg" },
    { id: 12, desc: "dadadadad", name: "Chicken Cordon Blue", category: ["main-entree", "poultry"], image: "/assets/customer/images/menuCordon.jpg" },
    { id: 13, desc: "dadadadad", name: "Beef Caldereta", category: ["main-entree", "beef"], image: "/assets/customer/images/menuCaldereta.jpg" },
    { id: 14, desc: "dadadadad", name: "Chopsuey", category: ["main-entree", "vegetable"], image: "/assets/customer/images/menuChopsuey.jpg" },
    { id: 15, desc: "dadadadad", name: "Seafood Chowder", category: ["soup"], image: "/assets/customer/images/menuChowder.jpg" },
    { id: 16, desc: "dadadadad", name: "Mango Float", category: ["dessert"], image: "/assets/customer/images/menuMango.jpg" },
    { id: 17, desc: "dadadadad", name: "Chicken Cordon Blue", category: ["main-entree", "poultry"], image: "/assets/customer/images/menuCordon.jpg" },
    { id: 18, desc: "dadadadad", name: "Beef Caldereta", category: ["main-entree", "beef"], image: "/assets/customer/images/menuCaldereta.jpg" },
    { id: 19, desc: "dadadadad", name: "Chopsuey", category: ["main-entree", "vegetable"], image: "/assets/customer/images/menuChopsuey.jpg" },
    { id: 20, desc: "dadadadad", name: "Seafood Chowder", category: ["soup"], image: "/assets/customer/images/menuChowder.jpg" },
    { id: 21, desc: "dadadadad", name: "Mango Float", category: ["dessert"], image: "/assets/customer/images/menuMango.jpg" },
    { id: 22, desc: "dadadadad", name: "Chicken Cordon Blue", category: ["main-entree", "poultry"], image: "/assets/customer/images/menuCordon.jpg" },
    { id: 23, desc: "dadadadad", name: "Beef Caldereta", category: ["main-entree", "beef"], image: "/assets/customer/images/menuCaldereta.jpg" },
    { id: 24, desc: "dadadadad", name: "Chopsuey", category: ["main-entree", "vegetable"], image: "/assets/customer/images/menuChopsuey.jpg" },
    { id: 25, desc: "dadadadad", name: "Seafood Chowder", category: ["soup"], image: "/assets/customer/images/menuChowder.jpg" },
    { id: 26, desc: "dadadadad", name: "Mango Float", category: ["dessert"], image: "/assets/customer/images/menuMango.jpg" },
  ];

  // State for selected filter
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Filter logic
  const filteredMenu =
    selectedFilter === "all"
      ? menuItems
      : menuItems.filter(item => item.category.includes(selectedFilter));


  // Reusable function to render sections
  const renderSection = (title, category) => (
    <div className="mb-[5rem]">
      <p className="ml-4 mb-2 mt-8 font-roboto tracking-wide font-medium text-base">{title}</p>
      <div className="grid grid-cols-3 gap-y-[2rem] gap-x-8 w-auto h-auto">
        {filteredMenu
          .filter(item => item.category.includes(category))
          .map(item => (
            <div key={item.id} className="bg-[#f6edd8] w-[18rem] h-[20.5rem] rounded-b-md">
              <img className="h-[13rem] w-[18rem] object-cover" src={item.image} alt={item.name} />
              <div className="p-4 pl-5">
                <h1 className="text-start font-roboto text-[16px] font-normal">{item.name}</h1>
                <p className="text-start h-[2.5rem] overflow-hidden font-roboto font-light text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );

  const renderCategory = (categoryName) => {
    return filteredMenu.some(item => item.category.includes(categoryName)) && renderSection(`-${[categoryName[0].toUpperCase(), ...categoryName.slice(1)].join('')} Dishes`, categoryName);
};



  return (
    <div className="font-roboto menu flex justify-center gap-[18rem] mt-20">

      {/* side navbar */}
      <SideNavbar setSelectedFilter={setSelectedFilter} />
      {/* side navbar */}

      <div className="mb-[5rem] text-4xl font-roboto font-bold">

        {/* Main Entree Section */}
        <div className={`${filteredMenu.some(item => item.category.some(cat => ["pork", "poultry", "beef", "vegetable"].includes(cat))) ? "" : "hidden"}`}>
          <h1 className='text-[#222222]' >Main Entree</h1>
          {renderCategory("pork")}
          {renderCategory("poultry")}
          {renderCategory("beef")}
          {renderCategory("vegetable")}
        </div>

        {/* Soup Section */}
        <div className={`${filteredMenu.some(item => item.category.includes("soup")) ? "" : "hidden"}`}>
          <h1 className='text-[#222222]' >Soup</h1>
          {renderCategory("pork")}
          {renderSection("", "soup")}
        </div>

        {/* Dessert Section */}
        <div className={`${filteredMenu.some(item => item.category.includes("dessert")) ? "" : "hidden"}`}>
          <h1 className='text-[#222222]' >Dessert/Salad</h1>
          {renderSection("", "dessert")}
        </div>

      </div>



    </div >
  )
}

export default Menu