const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const uploadResume = require("../middleware/uploadResume");
const uploadImage = require("../middleware/uploadProfileImage");

const {
  getStudentProfile,
  updateStudentProfile,
  uploadResume: uploadResumeController,
  uploadProfileImage,
  updateSkills,
} = require("../controllers/studentController");

// Get Profile
router.get("/profile", protect, getStudentProfile);

// Update Profile
router.put("/profile", protect, updateStudentProfile);

// Upload Resume
router.put(
  "/resume",
  protect,
  uploadResume.single("resume"),
  uploadResumeController
);

// Upload Profile Image
router.put(
  "/profile-image",
  protect,
  uploadImage.single("profileImage"),
  uploadProfileImage
);

// Update Skills
router.put("/skills", protect, updateSkills);

module.exports = router;