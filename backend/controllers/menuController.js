const Menu = require("../models/menuModel");

// Create a new menu item
exports.addDish = async (req, res) => {
    try {
      const { dishName, description, category, subcategory } = req.body;
      const image = req.file ? `/uploads/images/${req.file.filename}` : null;
  
      const newDish = new Menu({
        name: dishName,
        desc: description,
        category: [category, subcategory],
        image,
      });
  
      await newDish.save();
      res.status(201).json({ message: "Dish added successfully!", dish: newDish });
    } catch (error) {
      console.error("Error adding dish:", error);
      res.status(500).json({ message: "Failed to add dish.", error: error.message });
    }
  };

// Get all menu items
exports.getMenuItems = async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.status(200).json(menuItems);
  } catch (error) {
    console.error("Error fetching menu items:", error);
    res.status(500).json({ message: "Failed to fetch menu items." });
  }
};

// Update a menu item
exports.updateMenuItem = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description, category, subCategory } = req.body;

      // Initialize updateData with the fields
      const updateData = {};

      // Check if both category and subCategory are provided, then combine them into an array
      if (category) {
        updateData.category = subCategory ? [category, subCategory] : [category];
      }

      if (name) updateData.name = name; // Update name
      if (description) updateData.desc = description; // Update description

      // Handle image upload if a new image is provided
      if (req.file) {
        updateData.image = `/uploads/images/${req.file.filename}`; // Save the image path in the model
      }

      // Perform the update
      const updatedMenuItem = await Menu.findByIdAndUpdate(id, updateData, { new: true });

      if (!updatedMenuItem) {
        return res.status(404).json({ message: "Menu item not found." });
      }

      res.status(200).json({ message: "Menu item updated successfully!", menuItem: updatedMenuItem });
    } catch (error) {
      console.error("Error updating menu item:", error);
      res.status(500).json({ message: "Failed to update menu item." });
    }
};

// Delete a menu item
exports.deleteMenuItem = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMenuItem = await Menu.findByIdAndDelete(id);

    if (!deletedMenuItem) {
      return res.status(404).json({ message: "Menu item not found." });
    }

    res.status(200).json({ message: "Menu item deleted successfully!" });
  } catch (error) {
    console.error("Error deleting menu item:", error);
    res.status(500).json({ message: "Failed to delete menu item." });
  }
};