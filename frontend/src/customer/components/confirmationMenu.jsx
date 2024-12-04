
import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";

const ConfirmationMenu = () => {
  const [selectedSoup, setSelectedSoup] = useState([]);
  const [selectedMain, setSelectedMain] = useState([]);
  const [selectedDessert, setSelectedDessert] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedCard, setSelectedCard] = useState(null);

  const [activeFilter, setActiveFilter] = useState("all");

  const menuItems = menu();

  const activeCategory = (category) =>
    `${category == activeFilter
      ? "px-6 rounded-full py-[3.5px]  text-white bg-[#4f4d4d]"
      : "px-6 rounded-full text-[#4f4d4d] bg-[#ebecee] hover:bg-[#ded3d3]"
    }`;

  const handleFilterChange = (filterId) => {
    setSelectedFilter(filterId);
    setActiveFilter(filterId);
    activeCategory(filterId);
  };

  const filteredMenu =
    selectedFilter === "all"
      ? menuItems.filter(item => item.category.includes("main-entree"))
      : menuItems.filter(item => item.category.includes(selectedFilter));


  const handleCardClick = (item) => {
    if (item.name == selectedCard) {
      setSelectedCard("");
      return
    }
    setSelectedCard(item.name);
    console.log("Selected Card Name:", item.name);
  };

  const renderCards = (categoryName) => {
    const cards = categoryName
      ? menuItems.filter(item => item.category.includes(categoryName))
      : filteredMenu;


    return (
      <div className="relative flex gap-10 w-full pt-5 pb-6 px-6 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-sm">
        {cards.map((item) => (
          <div key={item.id} onClick={() => handleCardClick(item)} className={`bg-[#313131] w-[12rem] h-[14.5rem] cursor-pointer rounded-b-md border-[1.3px] flex-shrink-0 hover:scale-105 transition-transform duration-300 
            ${selectedCard === item.name ? 'border-[#585858] scale-105' : 'border-[#d3d3d3]'}`}>
            <div className={`absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded duration-300 ease-in-out ${selectedCard === item.name ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
              Selected
            </div>
            <img className="h-[8rem] w-[12rem] object-cover" src={item.image} alt={item.name} />
            <div className="mt-5 pb-2 px-4 menuNavBg text-white w-full">
              <h1 className="text-start text-[#ffffff] font-roboto h-[32px] text-[15px] overflow-hidden font-normal">
                {item.name}
              </h1>
              <p className="text-start h-[2.5rem] overflow-hidden font-roboto font-light text-sm">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    )
  };

  return (
    <div className="w-full p-10 space-y-4">
      <h1 className="font-roboto text-5xl font-bold text-[#222222] tracking-wide">Confirmation Menu</h1>
      <p className="italic">*Select and Add a Dish to include to Your Order.</p>

      <div className="flex flex-col gap-7">
        {/* Soup ------------------- */}
        <div className="div flex flex-col gap-4">
          {/* <pre>{JSON.stringify(selected)}</pre> */}
          <TagsInput
            value={selectedSoup}
            onChange={setSelectedSoup}
            name="Soup"
            placeHolder="Soup"
          />
          <div className="flex flex-col gap-2 w-full h-[27rem] bg-[#f5f5f5] pt-7 pb-3">
            <div className="flex pl-8 gap-6 text-[#4f4d4d]">
              <div className="px-6 rounded-full text-white bg-[#4f4d4d] py-[3.5px]">Soup</div>
            </div>
            {renderCards("soup")}
            <div className="div w-full items-center justify-center flex mt-3">
              <button className="text-base w-[8rem] py-2 bg-[#618b60] text-[#f2f1ed] font-light hover:border-[#c7b391] rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Main ------------------- */}
        <div className="div flex flex-col gap-4">
          {/* <pre>{JSON.stringify(selected)}</pre> */}
          <TagsInput
            value={selectedMain}
            onChange={setSelectedMain}
            name="MainEntree"
            placeHolder="Main Entree"
          />
          <div className="flex flex-col gap-2 w-full h-[27rem] bg-[#f5f5f5] pt-7 pb-3">
            <div className="flex pl-8 gap-6 text-[#4f4d4d]">
              <button className={`${activeCategory("all")}`} onClick={() => handleFilterChange("all")}>All</button>
              <button className={`${activeCategory("pork")}`} onClick={() => handleFilterChange("pork")}>Pork</button>
              <button className={`${activeCategory("poultry")}`} onClick={() => handleFilterChange("poultry")}>Poultry</button>
              <button className={`${activeCategory("beef")}`} onClick={() => handleFilterChange("beef")}>Beef</button>
              <button className={`${activeCategory("vegetable")}`} onClick={() => handleFilterChange("vegetable")}>Vegetables</button>
            </div>
            {renderCards()}
            <div className="div w-full items-center justify-center flex mt-3">
              <button className="text-base w-[8rem] py-2 bg-[#618b60] text-[#f2f1ed] font-light hover:border-[#c7b391] rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="div flex flex-col gap-4">
          {/* <pre>{JSON.stringify(selected)}</pre>*/}
          <TagsInput
            value={selectedDessert}
            onChange={setSelectedDessert}
            name="Dessert"
            placeHolder="Dessert"
          />
          <div className="flex flex-col gap-2 w-full h-[27rem] bg-[#f5f5f5] pt-7 pb-3">
            <div className="flex pl-8 gap-6 text-[#4f4d4d]">
              <div className="px-6 rounded-full text-white bg-[#4f4d4d] py-[3.5px]">Dessert</div>
            </div>
            {renderCards("dessert")}
            <div className="div w-full items-center justify-center flex mt-3">
              <button className="text-base w-[8rem] py-2 bg-[#618b60] text-[#f2f1ed] font-light hover:border-[#c7b391] rounded-3xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300">
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          <label
            htmlFor="optional-message-request"
            className="block text-center text-3xl font-medium text-gray-700 mb-1 font-roboto"
          >
            Special Instructions:
          </label>
          <textarea
            id="optional-message-request"
            rows="3"
            placeholder="Give a message"
            className="placeholder-[#797575] w-full p-2 bg-[#ebecee] h-[12rem]"
          ></textarea>
        </div>

      </div>


    </div>
  )
}

const menu = () =>{
  const menuItems = [
    { id: 1, desc: "Braised pork belly dish with sweet-savory soy-vinegar sauce", name: "Pork Humba1", category: ["main-entree", "pork"], image: "/assets/customer/images/menuHumba.jpg" },
    { id: 2, desc: "Braised pork belly dish with sweet-savory soy-vinegar sauce", name: "Pork Humba2", category: ["main-entree", "pork"], image: "/assets/customer/images/menuHumba.jpg" },
    { id: 3, desc: "Braised pork belly dish with sweet-savory soy-vinegar sauce", name: "Pork Humba3", category: ["main-entree", "pork"], image: "/assets/customer/images/menuHumba.jpg" },
    { id: 4, desc: "Beef stewed in tomato with potato, carrot, olives, bell peppers, and liver spread.", name: "Beef Caldereta1", category: ["main-entree", "beef"], image: "/assets/customer/images/menuCaldereta.jpg" },
    { id: 5, desc: "Stir-fried vegetable dish that is cooked with meats such as chicken and pork.", name: "Chopsuey1", category: ["main-entree", "vegetable"], image: "/assets/customer/images/menuChopsuey.jpg" },
    { id: 6, desc: "Thick soup prepared with milk or cream, a roux, and seafood or vegetables.", name: "Seafood Chowder1", category: ["soup"], image: "/assets/customer/images/menuChowder.jpg" },
    { id: 7, desc: "Thick soup prepared with milk or cream, a roux, and seafood or vegetables.", name: "Seafood Chowder2", category: ["soup"], image: "/assets/customer/images/menuChowder.jpg" },
    { id: 8, desc: "Thick soup prepared with milk or cream, a roux, and seafood or vegetables.", name: "Seafood Chowder3", category: ["soup"], image: "/assets/customer/images/menuChowder.jpg" },
    { id: 9, desc: "Graham crackers, sweetened whipped cream, and ripe mango.", name: "Mango Float1", category: ["dessert"], image: "/assets/customer/images/menuMango.jpg" },
    { id: 10, desc: "Stir-fried vegetable dish that is cooked with meats such as chicken and pork.", name: "Chopsuey2", category: ["main-entree", "vegetable"], image: "/assets/customer/images/menuChopsuey.jpg" },
    { id: 11, desc: "Thick soup prepared with milk or cream, a roux, and seafood or vegetables.", name: "Seafood Chowder4", category: ["soup"], image: "/assets/customer/images/menuChowder.jpg" },
    { id: 12, desc: "Graham crackers, sweetened whipped cream, and ripe mango.", name: "Mango Float2", category: ["dessert"], image: "/assets/customer/images/menuMango.jpg" },
    { id: 13, desc: "Graham crackers, sweetened whipped cream, and ripe mango.", name: "Mango Float3", category: ["dessert"], image: "/assets/customer/images/menuMango.jpg" },
    { id: 14, desc: "Graham crackers, sweetened whipped cream, and ripe mango.", name: "Mango Float4", category: ["dessert"], image: "/assets/customer/images/menuMango.jpg" },
    { id: 15, desc: "Graham crackers, sweetened whipped cream, and ripe mango.", name: "Mango Float5", category: ["dessert"], image: "/assets/customer/images/menuMango.jpg" },
    { id: 16, desc: "Crispy breadcrumb-crusted chicken breasts wrapped around ham or prosciutto and melted cheese", name: "Chicken Cordon Blue1", category: ["main-entree", "poultry"], image: "/assets/customer/images/menuCordon.jpg" },
    { id: 17, desc: "Stir-fried vegetable dish that is cooked with meats such as chicken and pork.", name: "Chopsuey3", category: ["main-entree", "vegetable"], image: "/assets/customer/images/menuChopsuey.jpg" },
    { id: 18, desc: "Thick soup prepared with milk or cream, a roux, and seafood or vegetables.", name: "Seafood Chowder5", category: ["soup"], image: "/assets/customer/images/menuChowder.jpg" },
    { id: 19, desc: "Crispy breadcrumb-crusted chicken breasts wrapped around ham or prosciutto and melted cheese", name: "Chicken Cordon Blue2", category: ["main-entree", "poultry"], image: "/assets/customer/images/menuCordon.jpg" },
    { id: 20, desc: "Beef stewed in tomato with potato, carrot, olives, bell peppers, and liver spread.", name: "Beef Caldereta2", category: ["main-entree", "beef"], image: "/assets/customer/images/menuCaldereta.jpg" },
    { id: 21, desc: "Graham crackers, sweetened whipped cream, and ripe mango.", name: "Mango Float6", category: ["dessert"], image: "/assets/customer/images/menuMango.jpg" },
    { id: 22, desc: "Crispy breadcrumb-crusted chicken breasts wrapped around ham or prosciutto and melted cheese", name: "Chicken Cordon Blue3", category: ["main-entree", "poultry"], image: "/assets/customer/images/menuCordon.jpg" },
    { id: 23, desc: "Beef stewed in tomato with potato, carrot, olives, bell peppers, and liver spread.", name: "Beef Caldereta3", category: ["main-entree", "beef"], image: "/assets/customer/images/menuCaldereta.jpg" },
  ];
  return menuItems
}

export default ConfirmationMenu
