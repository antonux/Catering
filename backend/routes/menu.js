const express = require("express");
const multer = require("multer");
const path = require("path");
const {
    addDish,
  getMenuItems,
  updateMenuItem,
  deleteMenuItem,
} = require("../controllers/menuController");

const router = express.Router();

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, "../uploads/images");
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Routes
router.post("/add", upload.single("image"), addDish);
router.get("/", getMenuItems);
router.put("/update/:id", upload.single("image"), updateMenuItem);
router.delete("/delete/:id", deleteMenuItem);

module.exports = router;
