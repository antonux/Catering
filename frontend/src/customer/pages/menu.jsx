import React, { useState } from 'react';
import SideNavbar from '../components/menuNavbar'

const Menu = () => {

  // Sample menu data
  const menuItems = [
    { id: 1, desc: "Braised pork belly dish with sweet-savory soy-vinegar sauce", name: "Pork Humba", category: ["main-entree", "pork"], image: "/assets/customer/images/menuHumba.jpg" },
    { id: 2, desc: "dadadadad", name: "Chicken Cordon Blue", category: ["main-entree", "poultry"], image: "/assets/customer/images/menuCordon.jpg" },
    { id: 3, desc: "dadadadad", name: "Beef Caldereta", category: ["main-entree", "beef"], image: "/assets/customer/images/menuCaldereta.jpg" },
    { id: 4, desc: "dadadadad", name: "Chopsuey", category: ["main-entree", "vegetable"], image: "/assets/customer/images/menuChopsuey.jpg" },
    { id: 5, desc: "dadadadad", name: "Seafood Chowder", category: ["soup"], image: "/assets/customer/images/menuChowder.jpg" },
    { id: 6, desc: "dadadadad", name: "Mango Float", category: ["dessert"], image: "/assets/customer/images/menuMango.jpg" },
  ];

  // State for selected filter
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Filter logic
  const filteredMenu =
    selectedFilter === "all"
      ? menuItems
      : menuItems.filter(item => item.category.includes(selectedFilter));

  // Group menu items by category
  const groupedMenu = filteredMenu.reduce((acc, item) => {
    item.category.forEach(category => {
      if (!acc[category]) acc[category] = [];
      acc[category].push(item);
    });
    return acc;
  }, {});

  return (
    <div className="font-roboto menu flex justify-center gap-[18rem] mt-20">

      {/* side navbar */}
      <SideNavbar setSelectedFilter={setSelectedFilter} />
      {/* side navbar */}

      {/* to be updated */}
      <div className="mb-[5rem]">
        {Object.keys(groupedMenu).map(category => (
          <div key={category}>
            <h2 className="text-xl font-bold mt-8">{category}</h2>
            <div className="grid grid-cols-3 grid-rows-1 gap-y-[2rem] gap-x-8 w-auto h-auto">
              {groupedMenu[category].map(item => (
                <div key={item.id} className="bg-[#f6edd8] w-[18rem] h-[19.5rem]">
                  <img className='h-[13rem] w-[18rem] object-cover' src={item.image} alt={item.name} />
                  <div className="p-4 pl-5">
                    <h1 className='text-start text-[16px]'>{item.name}</h1>
                    <p className='text-start font-light text-sm'>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Menu