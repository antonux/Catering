import { Pen, Upload } from "lucide-react";
import React from "react";
import { useState, useEffect } from "react";

function Menu() { 

    const menuItems = [
        { id: 1, desc: "Braised pork belly dish with sweet-savory soy-vinegar sauce", name: "Pork Humba", category: ["main-entree", "pork"], image: "/assets/customer/images/menuHumba.jpg" },
        { id: 2, desc: "Braised pork belly dish with sweet-savory soy-vinegar sauce", name: "Pork Humba", category: ["main-entree", "pork"], image: "/assets/customer/images/menuHumba.jpg" },
        { id: 3, desc: "Braised pork belly dish with sweet-savory soy-vinegar sauce", name: "Pork Humba", category: ["main-entree", "pork"], image: "/assets/customer/images/menuHumba.jpg" },
        { id: 9, desc: "dadadadad", name: "Beef Caldereta", category: ["main-entree", "beef"], image: "/assets/customer/images/menuCaldereta.jpg" },
        { id: 10, desc: "dadadadad", name: "Chopsuey", category: ["main-entree", "vegetable"], image: "/assets/customer/images/menuChopsuey.jpg" },
        { id: 11, desc: "dadadadad", name: "Seafood Chowder", category: ["soup"], image: "/assets/customer/images/menuChowder.jpg" },
        { id: 12, desc: "dadadadad", name: "Mango Float", category: ["dessert"], image: "/assets/customer/images/menuMango.jpg" },
        { id: 15, desc: "dadadadad", name: "Chopsuey", category: ["main-entree", "vegetable"], image: "/assets/customer/images/menuChopsuey.jpg" },
        { id: 16, desc: "dadadadad", name: "Seafood Chowder", category: ["soup"], image: "/assets/customer/images/menuChowder.jpg" },
        { id: 17, desc: "dadadadad", name: "Mango Float", category: ["dessert"], image: "/assets/customer/images/menuMango.jpg" },
        { id: 18, desc: "dadadadad", name: "Chicken Cordon Blue", category: ["main-entree", "poultry"], image: "/assets/customer/images/menuCordon.jpg" },
        { id: 20, desc: "dadadadad", name: "Chopsuey", category: ["main-entree", "vegetable"], image: "/assets/customer/images/menuChopsuey.jpg" },
        { id: 21, desc: "dadadadad", name: "Seafood Chowder", category: ["soup"], image: "/assets/customer/images/menuChowder.jpg" },
        { id: 23, desc: "dadadadad", name: "Chicken Cordon Blue", category: ["main-entree", "poultry"], image: "/assets/customer/images/menuCordon.jpg" },
        { id: 24, desc: "dadadadad", name: "Beef Caldereta", category: ["main-entree", "beef"], image: "/assets/customer/images/menuCaldereta.jpg" },
        { id: 27, desc: "dadadadad", name: "Mango Float", category: ["dessert"], image: "/assets/customer/images/menuMango.jpg" },
        { id: 28, desc: "dadadadad", name: "Chicken Cordon Blue", category: ["main-entree", "poultry"], image: "/assets/customer/images/menuCordon.jpg" },
        { id: 29, desc: "dadadadad", name: "Beef Caldereta", category: ["main-entree", "beef"], image: "/assets/customer/images/menuCaldereta.jpg" },
      ];

    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedSubcategory, setSelectedSubcategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredItems = menuItems.filter((menu) =>
        (selectedCategory === "all" || menu.category.includes(selectedCategory)) &&
        (selectedSubcategory === "all" || menu.category.includes(selectedSubcategory)) &&
        menu.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleCategoryClick = (category) => {
        setSelectedCategory((prevCategory) => (prevCategory === category ? "all" : category));
        if (category !== "main-entree") {
          setSelectedSubcategory("all"); //Reset subcategory
        }
      };

    // FILTER BUTTONS
    const FilterButton = () => (
        <>
            <button
                className={`m-5 flex items-center border w-[200px] shadow-md rounded-lg ${
                selectedCategory === "soup" ? "bg-gray-400" : "bg-white"
                }`}
                onClick={() => handleCategoryClick("soup")}
            >
                <h1 className="p-2 mx-auto text-[18px] font-medium">SOUP</h1>
            </button>
            <button
                className={`m-5 flex items-center border w-[200px] shadow-md rounded-lg ${
                selectedCategory === "main-entree" ? "bg-gray-400" : "bg-white"
                }`}
                onClick={() => handleCategoryClick("main-entree")}
            >
                <h1 className="p-2 mx-auto text-[18px] font-medium">MAINS</h1>
            </button>
            <button
                className={`m-5 flex items-center border w-[200px] shadow-md rounded-lg ${
                selectedCategory === "dessert" ? "bg-gray-400" : "bg-white"
                }`}
                onClick={() => handleCategoryClick("dessert")}
            >
                <h1 className="p-2 mx-auto text-[18px] font-medium">DESSERTS</h1>
            </button>
        </>
    )

    const MenuDisplay = (
        <div className="flex flex-1 bg-white">
            <div className="flex-col h-full w-full">
                <h1 className="p-4 font-medium text-[24px]">Menu Items</h1>
                <hr className=" mx-auto w-[98%] border-t border-gray-950"/>
                <div className="flex flex-1 ">
                    {/* 1st PANEL */}
                    <div className="flex flex-col w-[70%] overflow-hidden">
                        {/* SEARCHBAR */}
                        <div className="flex flex-1">
                            <div className="relative border m-5 p-3 w-[280px] rounded-lg">
                                <input
                                className="w-full focus:outline-none"
                                type="text"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                                />
                            </div>
                            <FilterButton/>
                        </div>
                        {/* Subcategory Dropdown */}
                        {selectedCategory === "main-entree" && (
                            <SubcategoryDropdown
                                selectedSubcategory={selectedSubcategory}
                                setSelectedSubcategory={setSelectedSubcategory}
                            />
                        )}
                        {/* MENU ITEMS CONTAINER */}
                        <div className="flex flex-wrap overflow-y-auto h-[800px]">
                        {filteredItems.length > 0 ? (
                            filteredItems.map((menu, index) => (
                            <MenuItem
                                key={menu.id} 
                                Image={menu.image} 
                                DishName={menu.name}
                                DishDesc={menu.desc}
                                onClick={() => console.log(`Clicked on ${menu.name}`)} 
                            />
                            ))
                        ) : (
                            <p className="mx-auto mt-4 text-gray-500">No menu items available.</p>
                        )}
                        </div>
                    </div>
                    <div className="flex flex-col m-5 w-[30%] h-[100%]">
                        <h1 className="mx-auto font-semibold">Dish Detail</h1>
                        <input type="text" placeholder="Dish Name" className="focus:outline-none border m-5 p-2 rounded-lg" disabled={true}/>
                        <button className="m-5 h-[300px] border">
                            <img src="/assets/customer/images/menuCaldereta.jpg" className="w-full h-full object-cover rounded-lg"/>
                        </button>
                        <textarea type="text" placeholder="Dish Decription" className="m-5 p-2 focus:outline-none border h-[150px]" disabled={true}/>
                            <Pen className="border m-5 p-1 rounded-sm w-[40px] h-[40px]"></Pen>
                    </div>
                </div>
            </div>
        </div>
    )

    return MenuDisplay
}

const MenuItem = ({ Image, DishName, DishDesc, onClick }) => (
    <button
      className="m-5 w-[270px] h-[300px] border-[2px] rounded-lg shadow-lg flex flex-col"
      onClick={onClick}
    >
      <img className="w-full h-[150px] object-cover rounded-t-lg" src={Image} alt={DishName} />
      <h1 className="mx-auto mt-2 text-lg font-semibold">{DishName}</h1>
      <p className="ml-4 mt-1 text-sm text-gray-700">{DishDesc}</p>
    </button>
)

const SubcategoryDropdown = ({ selectedSubcategory, setSelectedSubcategory }) => (
    <div className="relative">
      <div className="absolute right-10 bg-white border rounded-lg shadow-md p-3 z-10">
        <button
          className={`block px-4 py-2 w-full text-left ${
            selectedSubcategory === "all" ? "bg-gray-200" : ""
          }`}
          onClick={() => setSelectedSubcategory("all")}
        >
          All
        </button>
        <button
          className={`block px-4 py-2 w-full text-left ${
            selectedSubcategory === "pork" ? "bg-gray-200" : ""
          }`}
          onClick={() => setSelectedSubcategory("pork")}
        >
          Pork
        </button>
        <button
          className={`block px-4 py-2 w-full text-left ${
            selectedSubcategory === "beef" ? "bg-gray-200" : ""
          }`}
          onClick={() => setSelectedSubcategory("beef")}
        >
          Beef
        </button>
        <button
          className={`block px-4 py-2 w-full text-left ${
            selectedSubcategory === "chicken" ? "bg-gray-200" : ""
          }`}
          onClick={() => setSelectedSubcategory("chicken")}
        >
          Chicken
        </button>
      </div>
    </div>
  );

export default Menu