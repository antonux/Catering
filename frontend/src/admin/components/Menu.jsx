import { Pen, Upload } from "lucide-react";
import React from "react";
import { useState, useEffect, useRef } from "react";

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
    const [selectedDish, setSelectedDish] = useState("");
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

    const handleMenuItemClick = (menu) => {
      // Update selected dish when a MenuItem is clicked
      setSelectedDish({
        name: menu.name,
        image: menu.image,
        category: menu.category[0], // First category
        subCategory: menu.category[1] || "", // Subcategory if available
        desc: menu.desc
      });
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
                                MainCategory={menu.category[0]}
                                subCategory={menu.category[1] || ""}
                                onClick={() =>handleMenuItemClick(menu)} 
                            />
                            ))
                        ) : (
                            <p className="mx-auto mt-4 text-gray-500">No menu items available.</p>
                        )}
                        </div>
                    </div>
                    {selectedDish ? (
                      <DishAction
                        DishName={selectedDish.name}
                        Image={selectedDish.image}
                        Category={selectedDish.category}
                        subCategory={selectedDish.subCategory || ""}
                        Desc={selectedDish.desc}
                        Condition={true}
                        onClose={() => setSelectedDish(null)}
                      />
                    ) : (
                      <DishAdd />
                    )}
                </div>
            </div>
        </div>
    )

    return MenuDisplay
}

// MENU ITEM FOR READ
const MenuItem = ({ Image, DishName, DishDesc, MainCategory, subCategory, onClick }) => (
    <button className="m-5 w-[270px] h-[300px] border-[2px] rounded-lg shadow-lg flex flex-col"
      onClick={onClick}>
      <img className="w-full h-[150px] object-cover rounded-t-lg" src={Image} alt={DishName} />
      <h1 className="mx-auto mt-2 text-lg font-semibold">{DishName}</h1>
      <p className="ml-4 mt-1 text-sm text-gray-700">{DishDesc}</p>
    </button>
)

function DishAdd(){
  const [imageSrc, setImageSrc] = useState("/assets/admin/image.png");
  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedSelection, setSelectedSelection] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const fileInputRef = useRef(null);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedSelection(category);
    if (category !== "main-entree") {
      setSelectedSubcategory("");
    }
  };

  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const objectURL = URL.createObjectURL(file);
      setImageSrc(objectURL);
    }
  };
  
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return(
      <>
        <div className="flex flex-col m-5 w-[30%] h-[100%]">
          <h1 className="mx-auto font-semibold">Add Dish</h1>
          <input type="text" placeholder={"Dish Name"} className="focus:outline-none border m-5 p-2 rounded-lg"/>
          <button className="relative m-5 h-[300px] group" onClick={handleImageClick}>
              <img src={imageSrc} className="w-full h-full object-cover rounded-lg"/>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">Upload Photo</span>
              </div>
          </button>
          <input type="file" accept="image/" ref={fileInputRef} className="hidden" onChange={handleFileChange} />
          {/* CATEGORY AND SUBCAT */}
          <div className="flex-col">
            <select className="m-5 p-2 w-[30%] border" onChange={handleCategoryChange}>
                <option value="">Dish Type</option>
                <option value="soup">SOUP</option>
                <option value="main-entree">MAINS</option>
                <option value="dessert">DESSERT</option>
            </select>
            {selectedSelection === "main-entree" && (
              <select className="m-5 p-2 w-[30%] border" onChange={handleSubcategoryChange}>
                <option value="pork">Pork</option>
                <option value="beef">Beef</option>
                <option value="poultry">Poultry</option>
                <option value="vegetable">Vegetable</option>
              </select>
            )}
          </div>
          <textarea type="text" placeholder={"Dish Decription"} className="m-5 p-2 focus:outline-none border h-[150px]"/>
          {/* HANDLE CREATE, UPDATE, DELETE */}
          <div className="flex-col item">
            <button className="m-5 p-2 w-[20%] rounded bg-green-700" >
              <h1 className="font-semibold text-white">ADD DISH</h1>
            </button>
          </div>
      </div>
    </>
  )
}

//SECOND PANEL COMPONENTS CREATE, READ, UPDATE, DELETE
function DishAction({DishName, Image, Category, subCategory, Desc, Condition, onClose }){
  const [isDisabled, setisDisabled] = useState(Condition || false)
  const [selectedSelection, setSelectedSelection] = useState(Category || "");
  const [selectedSubcategory, setSelectedSubcategory] = useState(subCategory || "");
  const [dscription, setDesc] = useState(Desc) 
  const [imageSrc, setImageSrc] = useState(Image);
  const fileInputRef = useRef(null);

  const toggleDisabled = () => (
    setisDisabled(!isDisabled)
  )

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedSelection(category);
    if (category !== "main-entree") {
      setSelectedSubcategory("");
    }
  };

  useEffect(() => {
    setImageSrc(Image);
  }, [Image]);

  useEffect(() => {
    setSelectedSelection(Category || "");
  }, [Category]);

  useEffect(() => {
    setSelectedSubcategory(subCategory || "");
  }, [subCategory]);

  useEffect(() => {
    setDesc(Desc || "Dish Discription")
  }, [Desc])
  
  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const objectURL = URL.createObjectURL(file);
      setImageSrc(objectURL);
    }
  };
  
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return(
      <>
        <div className="flex flex-col m-5 w-[30%] h-[100%]">
          <div className="flex flex-1">
            <h1 className="px-4 py-2 mx-auto font-semibold">Dish Detail</h1>
            <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">
              Close
            </button>
          </div>
          <input type="text" placeholder={DishName ? DishName : "Dish Name"} className="focus:outline-none border m-5 p-2 rounded-lg" disabled={isDisabled}/>
          <button className="relative m-5 h-[300px] group" onClick={handleImageClick} disabled={isDisabled}>
              <img src={imageSrc} className="w-full h-full object-cover rounded-lg"/>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold">Upload Photo</span>
              </div>
          </button>
          <input type="file" accept="image/" ref={fileInputRef} className="hidden" onChange={handleFileChange} />
          {/* CATEGORY AND SUBCAT */}
          <div className="flex-col">
            <select className="m-5 p-2 w-[30%] border" onChange={handleCategoryChange} value={selectedSelection} disabled={isDisabled}>
                <option value="">Dish Type</option>
                <option value="soup">SOUP</option>
                <option value="main-entree">MAINS</option>
                <option value="dessert">DESSERT</option>
            </select>
            {selectedSelection === "main-entree" && (
              <select className="m-5 p-2 w-[30%] border" onChange={handleSubcategoryChange} value={selectedSubcategory} disabled={isDisabled}>
                <option value="pork">Pork</option>
                <option value="beef">Beef</option>
                <option value="poultry">Poultry</option>
                <option value="vegetable">Vegetable</option>
              </select>
            )}
          </div>
          <textarea type="text" placeholder={dscription ? dscription : "Dish Decription"} className="m-5 p-2 focus:outline-none border h-[150px]" disabled={isDisabled} />
          {/* HANDLE CREATE, UPDATE, DELETE */}
          <div className="flex-col">
            <button className="m-5 p-2 w-[20%] rounded bg-amber-400" onClick={toggleDisabled}>
              <h1 className="font-semibold text-white">EDIT</h1>
            </button>
            <button className="mr-5 p-2 w-[20%] rounded bg-green-700" >
              <h1 className="font-semibold text-white">SAVE</h1>
            </button>
            <button className="mr-5 p-2 w-[20%] rounded bg-red-400">
              <h1 className="font-semibold text-white">DELETE</h1>
            </button>
          </div>
      </div>
    </>
  )
}

// FLOATING SUBCATEGORY FOR MAINS
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
          onClick={() => setSelectedSubcategory("poultry")}
        >
          Poultry
        </button>
        <button
          className={`block px-4 py-2 w-full text-left ${
            selectedSubcategory === "vegetable" ? "bg-gray-200" : ""
          }`}
          onClick={() => setSelectedSubcategory("vegetable")}
        >
          Vegetable
        </button>
      </div>
    </div>
  );

export default Menu