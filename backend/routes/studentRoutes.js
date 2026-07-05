const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
  getStudentProfile,
  updateStudentProfile,
} = require("../controllers/studentController");

// Get Student Profile
router.get("/profile", protect, getStudentProfile);

// Update Student Profile
router.put("/profile", protect, updateStudentProfile);

module.exports = router;