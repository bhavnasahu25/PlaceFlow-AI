const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadResume");

const {
  getStudentProfile,
  updateStudentProfile,
  uploadResume,
} = require("../controllers/studentController");

// Get Profile
router.get("/profile", protect, getStudentProfile);

// Update Profile
router.put("/profile", protect, updateStudentProfile);

// Upload Resume
router.put(
  "/resume",
  protect,
  upload.single("resume"),
  uploadResume
);

module.exports = router;