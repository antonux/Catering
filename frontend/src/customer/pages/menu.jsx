import React, { useState } from 'react';
import SideNavbar from '../components/menuNavbar'

const Menu = () => {

  // Menu data
  const menuItems = [
    { id: 1, name: "Pork Humba", category: ["main-entree", "pork"], image: "/assets/customer/images/menuHumba.jpg" },
    { id: 2, name: "Chicken Cordon Blue", category: ["main-entree", "poultry"], image: "/assets/customer/images/menuCordon.jpg"},
    { id: 3, name: "Soupy", category: ["soup"], image: "/assets/customer/images/menuHumba.jpg"},
    { id: 4, name: "Chocolate Cake", category: ["dessert"], image: "/assets/customer/images/menuHumba.jpg"},
    { id: 6, name: "Vegetable Stir Fry", category: ["main-entree", "vegetable"], image: "/assets/customer/images/menuHumba.jpg"},
    { id: 8, name: "Vegetable Stir Fry", category: ["main-entree", "vegetable"], image: "/assets/customer/images/menuHumba.jpg"},
    { id: 10, name: "Vegetable Stir Fry", category: ["main-entree", "vegetable"], image: "/assets/customer/images/menuHumba.jpg"},
    { id: 12, name: "Vegetable Stir Fry", category: ["main-entree", "vegetable"], image: "/assets/customer/images/menuHumba.jpg"},
    { id: 14, name: "Vegetable Stir Fry", category: ["main-entree", "vegetable"], image: "/assets/customer/images/menuHumba.jpg"},
    { id: 16, name: "Vegetable Stir Fry", category: ["main-entree", "vegetable"], image: "/assets/customer/images/menuHumba.jpg"},
    { id: 18, name: "Vegetable Stir Fry", category: ["main-entree", "vegetable"], image: "/assets/customer/images/menuHumba.jpg"},
    { id: 20, name: "Vegetable Stir Fry", category: ["main-entree", "vegetable"], image: "/assets/customer/images/menuHumba.jpg"},
    { id: 22, name: "Vegetable Stir Fry", category: ["main-entree", "vegetable"], image: "/assets/customer/images/menuHumba.jpg"},
    { id: 24, name: "Vegetable Stir Fry", category: ["main-entree", "vegetable"], image: "/assets/customer/images/menuHumba.jpg"},
    { id: 26, name: "Vegetable Stir Fry", category: ["main-entree", "vegetable"], image: "/assets/customer/images/menuHumba.jpg"},
    { id: 28, name: "Vegetable Stir Fry", category: ["main-entree", "vegetable"], image: "/assets/customer/images/menuHumba.jpg"},
  ];

  // State for selected filter
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Filter logic
  const filteredMenu = 
      selectedFilter === "all"
    ? menuItems
    : menuItems.filter(item => item.category.includes(selectedFilter));

  return (
    <div className="menu flex justify-center gap-[18rem] mt-10">

      {/* side navbar */}
      <SideNavbar setSelectedFilter={setSelectedFilter} />
      {/* side navbar */}

      <div className="mb-[5rem]">
        <div className="grid grid-cols-3 bg-red-400 grid-rows-3 gap-8 w-auto h-auto">
          {filteredMenu.map(item => (
            <div key={item.id} className="">
              <img className='h-[13rem]'  src={item.image} alt={item.name} />
              <h3 className='text-center'>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Menu