import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { Plus, SoupIcon } from "lucide-react";

function Menu() {

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

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDish, setSelectedDish] = useState("");
  const filteredItems = menuItems.filter((menu) =>
    (selectedCategory === "all" || menu.category.includes(selectedCategory)) &&
    (selectedSubcategory === "all" || menu.category.includes(selectedSubcategory)) &&
    menu.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const [showDishAdd, setShowDishAdd] = useState(false);

  const handleCategoryClick = (category) => {
    setSelectedCategory((prevCategory) => (prevCategory === category ? "all" : category));
    if (category !== "main-entree") {
      setSelectedSubcategory("all"); //Reset subcategory
    }
  };

  const handleMenuItemClick = (menu) => {
    // Update selected dish when a MenuItem is clicked
    setSelectedDish({
      menuID: menu._id,
      name: menu.name,
      image: `http://localhost:4000${menu.image}`,
      category: menu.category[0], // First category
      subCategory: menu.category[1] || "", // Subcategory if available
      desc: menu.desc
    }, setShowDishAdd(false),);
  };


  // FILTER BUTTONS
  const FilterButton = () => (
    <>
      <button
        className={`m-5 flex items-center border w-[200px] shadow-md rounded-lg ${selectedCategory === "soup" ? "bg-gray-600 text-white" : "bg-white "
          }`}
        onClick={() => handleCategoryClick("soup")}
      >
        <h1 className="p-2 mx-auto text-[18px] font-medium">STARTERS</h1>
      </button>
      <button
        className={`m-5 flex items-center border w-[200px] shadow-md rounded-lg ${selectedCategory === "main-entree" ? "bg-gray-600 text-white" : "bg-white"
          }`}
        onClick={() => handleCategoryClick("main-entree")}
      >
        <h1 className="p-2 mx-auto text-[18px] font-medium">MAINS</h1>
      </button>
      <button
        className={`m-5 flex items-center border w-[200px] shadow-md rounded-lg ${selectedCategory === "dessert" ? "bg-gray-600 text-white" : "bg-white"
          }`}
        onClick={() => handleCategoryClick("dessert")}
      >
        <h1 className="p-2 mx-auto text-[18px] font-medium">DESSERTS</h1>
      </button>
    </>
  )

  const MenuDisplay = (
    <div className="flex flex-1 bg-slate-100">
      <div className="flex-col h-full w-full">
        <h1 className="p-4 font-medium text-[24px]">Menu Items</h1>
        <hr className=" mx-auto w-[98%] border-t border-gray-950" />
        <div className="flex flex-1 ">
          {/* 1st PANEL */}
          <div className="flex flex-col overflow-hidden">
            {/* SEARCHBAR */}
            <div className="flex-col">
              <div className="flex">
                <div className="relative border m-5 p-3 w-[500px] rounded-lg bg-white">
                  <input
                    className="w-full focus:outline-none"
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                  />
                </div>
                <button className="flex items-center border m-5 p-2 px-3 font-thin text-white bg-green-700 rounded-lg" onClick={() => {{setSelectedDish(null), setShowDishAdd(true)}}}><Plus className="m-1"></Plus>Add Dish</button>
              </div>
              <h1 className="ml-5 font-semibold text-[24px] flex">Category <SoupIcon className="m-2"></SoupIcon> </h1>
              <div className="flex flex-1">
                <FilterButton />
              </div>
            </div>
            {/* Subcategory Dropdown */}
            {selectedCategory === "main-entree" && (
              <SubcategoryDropdown
                selectedSubcategory={selectedSubcategory}
                setSelectedSubcategory={setSelectedSubcategory}
              />
            )}
            {/* MENU ITEMS CONTAINER */}
            <div className="flex flex-wrap overflow-y-auto h-[80vh] max-h-[70vh] scroll-smooth">
              {filteredItems.length > 0 ? (
                filteredItems.map((menu, index) => (
                  <MenuItem
                    key={menu._id}
                    Image={`http://localhost:4000${menu.image}`}
                    DishName={menu.name}
                    DishDesc={menu.desc}
                    MainCategory={menu.category[0]}
                    subCategory={menu.category[1] || ""}
                    onClick={() => handleMenuItemClick(menu)}
                  />
                ))
              ) : (
                <p className="mx-auto mt-4 text-gray-500">No menu items available.</p>
              )}
            </div>
          </div>
          {selectedDish && (
            <div className="fixed top-5 right-5 flex z-50">
              <div className="bg-white rounded-lg shadow-lg p-6 relative">
                <DishAction
                  DishID={selectedDish.menuID}
                  DishName={selectedDish.name}
                  Image={selectedDish.image}
                  Category={selectedDish.category}
                  subCategory={selectedDish.subCategory || ""}
                  Desc={selectedDish.desc}
                  Condition={true}
                  onClose={() => {setSelectedDish(null), setShowDishAdd(false)}}
                />
              </div>
            </div>
          )}
          {showDishAdd && (
            <div className="fixed top-5 right-5 flex z-50">
              <div className="bg-white rounded-lg shadow-lg p-6 relative">
                <DishAdd onClose={() => {setSelectedDish(null), setShowDishAdd(false)}}></DishAdd>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )

  return MenuDisplay
}

// MENU ITEM FOR READ
const MenuItem = ({ Image, DishName, DishDesc, MainCategory, subCategory, onClick }) => (
  <button className="m-5 w-[270px] transition hover:scale-105 h-[300px] border-[2px] rounded-lg shadow-lg flex flex-col bg-white"
    onClick={onClick}>
    <img className="w-full h-[150px] object-cover rounded-t-lg" src={Image} alt={DishName} />
    <h1 className="mx-auto mt-2 text-lg font-semibold">{DishName}</h1>
    <p className="ml-4 mt-1 text-sm text-gray-700">{DishDesc}</p>
  </button>
)

//SECOND PANEL COMPONENTS CREATE MENU ITEMS
function DishAdd({ onClose }) {
  const [imageSrc, setImageSrc] = useState("/assets/admin/image.png");
  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedSelection, setSelectedSelection] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const fileInputRef = useRef(null);
  const [showDishAdd, setShowDishAdd] = useState(false);

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
      setImageFile(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleAddDish = async () => {
    if (!dishName || !description || !selectedSelection || !imageFile) {
      alert("Please fill out all fields and upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("dishName", dishName);
    formData.append("description", description);
    formData.append("category", selectedSelection);
    formData.append("subcategory", selectedSubcategory);
    formData.append("image", imageFile); // Add the image file

    try {
      const response = await axios.post("http://localhost:4000/api/menu/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        alert("Dish added successfully!");
        // Optionally, reset the form here
        setDishName("");
        setDescription("");
        setSelectedSelection("");
        setSelectedSubcategory("");
        setImageSrc("/assets/admin/image.png");
        setImageFile(null);

        window.location.reload();
      }
    } catch (error) {
      console.error("Error adding dish:", error);
      alert("An error occurred while adding the dish.");
    }
  };

  return (
    <>
      <div className="flex flex-1">
        <div className="flex flex-col h-[37rem]">
          <div className="flex flex-1">
            <h1 className="px-4 py-2 mx-auto font-semibold">Dish Detail</h1>
            <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">
              Close
            </button>
          </div>
          <input type="text" placeholder={"Dish Name"} className="focus:outline-none border m-5 p-2 rounded-lg" value={dishName} onChange={(e) => setDishName(e.target.value)} />
          <button className="relative m-5 w-[300px] h-[200px] group" onClick={handleImageClick}>
            <div className="w-full h-full flex justify-center">
              <img src={imageSrc} className="w-fukk h-full rounded-lg" />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-semibold">Upload Photo</span>
            </div>
          </button>
          <input type="file" accept="image/" ref={fileInputRef} className="hidden" onChange={handleFileChange} />
          {/* CATEGORY AND SUBCAT */}
          <div className="flex-col">
            <select className="mx-5 p-2 border" onChange={handleCategoryChange} value={selectedSelection}>
              <option value="">Dish Type</option>
              <option value="soup">SOUP</option>
              <option value="main-entree">MAINS</option>
              <option value="dessert">DESSERT</option>
            </select>
            {selectedSelection === "main-entree" && (
              <select className="m-5 p-2 border" onChange={handleSubcategoryChange} value={selectedSubcategory}>
                <option value="">Dish Subcategory</option>
                <option value="pork">Pork</option>
                <option value="beef">Beef</option>
                <option value="poultry">Poultry</option>
                <option value="vegetable">Vegetable</option>
              </select>
            )}
          </div>
          <textarea type="text" placeholder={"Dish Decription"} className="mx-5 mt-3 p-2 focus:outline-none border h-[150px]" value={description} onChange={(e) => setDescription(e.target.value)} />
          {/* HANDLE CREATE*/}
          <div className="flex-col item">
            <button className="m-5 p-2 rounded bg-green-700" onClick={handleAddDish} >
              <h1 className="font-semibold text-white">ADD DISH</h1>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

//SECOND PANEL COMPONENTS, READ, UPDATE, DELETE
function DishAction({ DishID, DishName, Image, Category, subCategory, Desc, Condition, onClose }) {
  const [dishName, setDishName] = useState(DishName || "");
  const [dishDesc, setDishDesc] = useState(Desc || "")
  const [isDisabled, setisDisabled] = useState(Condition || false)
  const [selectedSelection, setSelectedSelection] = useState(Category || "");
  const [selectedSubcategory, setSelectedSubcategory] = useState(subCategory || "");
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
    setDishName(DishName);
  }, [DishName])

  useEffect(() => {
    setDishDesc(Desc);
  }, [Desc])

  useEffect(() => {
    setImageSrc(Image);
  }, [Image]);

  useEffect(() => {
    setSelectedSelection(Category || "");
  }, [Category]);

  useEffect(() => {
    setSelectedSubcategory(subCategory || "");
  }, [subCategory]);

  const handleSubcategoryChange = (e) => {
    setSelectedSubcategory(e.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const objectURL = URL.createObjectURL(file);
      setImageSrc(objectURL); // Updates preview
      setImageFile(file); // Store the file for upload
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  //UPDATE DISH
  const handleUpdate = async () => {
    const updatedDish = new FormData();

    // Only append fields if there are changes
    if (dishName !== DishName) updatedDish.append('name', dishName);
    if (dishDesc !== Desc) updatedDish.append('description', dishDesc);
    if (selectedSelection !== Category) updatedDish.append('category', selectedSelection);
    if (selectedSubcategory !== subCategory) updatedDish.append('subCategory', selectedSubcategory);

    // If a new image is selected, append it to FormData
    const fileInput = fileInputRef.current;
    if (fileInput && fileInput.files.length > 0) {
      updatedDish.append('image', fileInput.files[0]); // Ensure 'image' matches the field name in backend
    }

    // Check if there are no changes
    if (updatedDish.entries().next().done) {
      alert("No changes detected. Update not required.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:4000/api/menu/update/${DishID}`, {
        method: "PUT",
        body: updatedDish,
      });

      if (response.ok) {
        alert("Dish updated successfully");
        setisDisabled(true); // Lock the form after success

        window.location.reload();
      } else {
        const errorMessage = await response.text();
        alert(`Failed to update the dish: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error updating dish:", error);
      alert("An error occurred while updating the dish. Please try again.");
    }
  };

  //DELETE DISH
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this dish?");
    if (!confirmDelete) return; // If user cancels, do nothing

    try {
      const response = await fetch(`http://localhost:4000/api/menu/delete/${DishID}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Dish deleted successfully");
        onClose(); // Close the panel after deletion

        window.location.reload();
      } else {
        const errorMessage = await response.text();
        alert(`Failed to delete the dish: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error deleting dish:", error);
      alert("An error occurred while deleting the dish. Please try again.");
    }
  };

  return (
    <>
      <div className="flex flex-col h-[37rem]">
        <div className="flex">
          <h1 className="px-4 py-2 mx-auto font-semibold">Dish Detail</h1>
          <button onClick={onClose} className="bg-red-500 text-white px-4 py-0 rounded hover:bg-red-600 transition duration-300">
            Close
          </button>
        </div>
        <input type="text" value={dishName} className="focus:outline-none border m-5 p-2 rounded-lg" disabled={isDisabled} onChange={(e) => setDishName(e.target.value)} />
        <button className="relative mx-5 h-[200px] w-[300px]" onClick={handleImageClick} disabled={isDisabled}>
          <img src={imageSrc} className="w-full h-full object-cover rounded-lg" />
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
            <select className="m-5 p-2 w-[40%] border" onChange={handleSubcategoryChange} value={selectedSubcategory} disabled={isDisabled}>
              <option value="pork">Pork</option>
              <option value="beef">Beef</option>
              <option value="poultry">Poultry</option>
              <option value="vegetable">Vegetable</option>
            </select>
          )}
        </div>
        <textarea type="text" value={dishDesc} className="mx-5 p-2 focus:outline-none border h-[120px]" disabled={isDisabled} onChange={(e) => setDishDesc(e.target.value)} />
        {/* HANDLE CREATE, UPDATE, DELETE */}
        <div className="flex gap-5 ml-5 mt-5 text-sm">
          <button className="p-2 px-3 w-[20%] rounded bg-amber-400" onClick={toggleDisabled}>
            <h1 className="font-semibold text-white">EDIT</h1>
          </button>
          <button className="p-2 px-3 w-[20%] rounded bg-green-700" onClick={handleUpdate} disabled={isDisabled}>
            <h1 className="font-semibold text-white">SAVE</h1>
          </button>
          <button className="p-2 px-3 w-[23%] rounded bg-red-400" onClick={handleDelete}>
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
    <div className="flex bottom-10 left-1/2 transform -translate-x-1/2  fixed bg-white border rounded-lg shadow-md p-3 z-10">
      <button
        className={`block px-4 py-2 w-full text-left ${selectedSubcategory === "all" ? "bg-gray-200" : ""
          }`}
        onClick={() => setSelectedSubcategory("all")}
      >
        All
      </button>
      <button
        className={`block px-4 py-2 w-full text-left ${selectedSubcategory === "pork" ? "bg-gray-200" : ""
          }`}
        onClick={() => setSelectedSubcategory("pork")}
      >
        Pork
      </button>
      <button
        className={`block px-4 py-2 w-full text-left ${selectedSubcategory === "beef" ? "bg-gray-200" : ""
          }`}
        onClick={() => setSelectedSubcategory("beef")}
      >
        Beef
      </button>
      <button
        className={`block px-4 py-2 w-full text-left ${selectedSubcategory === "poultry" ? "bg-gray-200" : ""
          }`}
        onClick={() => setSelectedSubcategory("poultry")}
      >
        Poultry
      </button>
      <button
        className={`block px-4 py-2 w-full text-left ${selectedSubcategory === "vegetable" ? "bg-gray-200" : ""
          }`}
        onClick={() => setSelectedSubcategory("vegetable")}
      >
        Vegetable
      </button>
    </div>
  </div>
);

export default Menu