
import React, { useState, useEffect } from "react";
import CustomTagInput from "./confirmationCustomTagInput";

const ConfirmationMenu = ({MenuData}) => {
  const [selectedSoup, setSelectedSoup] = useState([]);
  const [selectedMain, setSelectedMain] = useState([]);
  const [selectedDessert, setSelectedDessert] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedCard, setSelectedCard] = useState(null);

  const [activeFilter, setActiveFilter] = useState("all");

  const menuItems = menu();

  useEffect(() => {
    const updatedSelectedItems = [
      ...selectedSoup,
      ...selectedMain,
      ...selectedDessert
    ];
    setSelectedItems(updatedSelectedItems);
  }, [selectedSoup, selectedMain, selectedDessert]);

  useEffect(() => {
    MenuData(selectedItems); 
  }, [selectedItems, MenuData]);

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
      setSelectedCard(null);
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
          <div
            key={item._id}
            onClick={() => {
              if (!selectedItems.includes(item.name)) {
                handleCardClick(item);
              }
            }}
            className={`bg-[#313131] w-[12rem] h-[14.5rem] cursor-pointer rounded-b-md border-[1.3px] flex-shrink-0 ${!selectedItems.includes(item.name) ? "hover:scale-105" : "opacity-80"}  transition-transform duration-300 
            ${(selectedCard === item.name && !selectedItems.includes(item.name)) ? 'border-[#585858] scale-105' : 'border-[#d3d3d3]'}`}>
            <div className={`absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded duration-300 ease-in-out ${(selectedCard === item.name && !selectedItems.includes(item.name)) ? 'opacity-100 scale-105' : 'opacity-0 scale-0'}`}>
              Selected
            </div>
            <div className={`absolute bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded duration-300 ease-in-out ${selectedItems.includes(item.name) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
              Added
            </div>
            <img className="h-[8rem] w-[12rem] object-cover" src={`http://localhost:4000${item.image}`} alt={item.name} />
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

  const handleSoupAdd = () => {
    if (selectedCard && !selectedSoup.includes(selectedCard)) {
      setSelectedSoup((prev) => [...prev, selectedCard]);
      setSelectedCard(null);
    }
    if (selectedSoup.includes(selectedCard)) {
      alert(selectedCard + " already added.")
    }
  };

  const handleMainAdd = () => {
    if (selectedCard && !selectedMain.includes(selectedCard)) {
      setSelectedMain((prev) => [...prev, selectedCard]);
      setSelectedCard(null);
    }
    if (selectedMain.includes(selectedCard)) {
      alert(selectedCard + " already added.")
    }
  };

  const handleDessertAdd = () => {
    if (selectedCard && !selectedDessert.includes(selectedCard)) {
      setSelectedDessert((prev) => [...prev, selectedCard]);
      setSelectedCard(null);
    }
    if (selectedDessert.includes(selectedCard)) {
      alert(selectedCard + " already added.")
    }
  };

  return (
    <div className="w-full p-10 space-y-4">
      <h1 className="font-roboto text-5xl font-bold text-[#222222] tracking-wide">Confirmation Menu</h1>
      <p className="italic">*Select and Add a Dish to include to Your Order.</p>

      <div className="flex flex-col gap-7">
        {/* Soup ------------------- */}
        <div className="div flex flex-col gap-4">
          {/* <pre>{JSON.stringify(selectedItems)}</pre> */}
          <CustomTagInput
            tags={selectedSoup}
            setTags={setSelectedSoup}
          />

          <div className="flex flex-col gap-2 w-full h-[27rem] bg-[#f5f5f5] pt-7 pb-3">
            <div className="flex pl-8 gap-6 text-[#4f4d4d]">
              <div className="px-6 rounded-full text-white bg-[#4f4d4d] py-[3.5px]">Soup</div>
            </div>
            {renderCards("soup")}
            <div className="div w-full items-center justify-center flex mt-3">
              <button type="button" onClick={handleSoupAdd} className={`text-base w-[8rem] py-2  text-[#f2f1ed] font-light ${menuItems
                .filter(item => item.category.includes("soup"))  // Filter for items with category "soup"
                .some(item => item.name.includes(selectedCard)) ? "hover:scale-105 hover:shadow-xl hover:border-[#c7b391] bg-[#618b60]" : "bg-gray-300 pointer-events-none"}  rounded-3xl shadow-md transition-transform duration-300`}>
                Add
              </button>
            </div>
          </div>
        </div>

        {/* Main ------------------- */}
        <div className="div flex flex-col gap-4">
          {/* <pre>{JSON.stringify(selected)}</pre> */}
          <CustomTagInput
            tags={selectedMain}
            setTags={setSelectedMain}
          />
          <div className="flex flex-col gap-2 w-full h-[27rem] bg-[#f5f5f5] pt-7 pb-3">
            <div className="flex pl-8 gap-6 text-[#4f4d4d]">
              <button type="button" className={`${activeCategory("all")}`} onClick={() => handleFilterChange("all")}>All</button>
              <button type="button" className={`${activeCategory("pork")}`} onClick={() => handleFilterChange("pork")}>Pork</button>
              <button type="button" className={`${activeCategory("poultry")}`} onClick={() => handleFilterChange("poultry")}>Poultry</button>
              <button type="button" className={`${activeCategory("beef")}`} onClick={() => handleFilterChange("beef")}>Beef</button>
              <button type="button" className={`${activeCategory("vegetable")}`} onClick={() => handleFilterChange("vegetable")}>Vegetables</button>
            </div>
            {renderCards()}
            <div className="div w-full items-center justify-center flex mt-3">
              <button type="button" onClick={handleMainAdd} className={`text-base w-[8rem] py-2  text-[#f2f1ed] font-light ${menuItems
                .filter(item => item.category.includes("main-entree"))  // Filter for items with category "soup"
                .some(item => item.name.includes(selectedCard)) ? "hover:scale-105 hover:shadow-xl hover:border-[#c7b391] bg-[#618b60]" : "bg-gray-300 pointer-events-none"}  rounded-3xl shadow-md transition-transform duration-300`}>
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="div flex flex-col gap-4">
          {/* <pre>{JSON.stringify(selected)}</pre>*/}
          <CustomTagInput
            tags={selectedDessert}
            setTags={setSelectedDessert}
          />
          <div className="flex flex-col gap-2 w-full h-[27rem] bg-[#f5f5f5] pt-7 pb-3">
            <div className="flex pl-8 gap-6 text-[#4f4d4d]">
              <div className="px-6 rounded-full text-white bg-[#4f4d4d] py-[3.5px]">Dessert</div>
            </div>
            {renderCards("dessert")}
            <div className="div w-full items-center justify-center flex mt-3">
              <button type="button" onClick={handleDessertAdd} className={`text-base w-[8rem] py-2  text-[#f2f1ed] font-light ${menuItems
                .filter(item => item.category.includes("dessert"))  // Filter for items with category "soup"
                .some(item => item.name.includes(selectedCard)) ? "hover:scale-105 hover:shadow-xl hover:border-[#c7b391] bg-[#618b60]" : "bg-gray-300 pointer-events-none"}  rounded-3xl shadow-md transition-transform duration-300`}>
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

const menu = () => {
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
  return menuItems
}

export default ConfirmationMenu
