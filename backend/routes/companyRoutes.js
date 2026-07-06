const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadCompanyLogo");

const {
  getCompanyProfile,
  updateCompanyProfile,
  uploadCompanyLogo,
} = require("../controllers/companyController");

// Get Company Profile
router.get("/profile", protect, getCompanyProfile);

// Update Company Profile
router.put("/profile", protect, updateCompanyProfile);

// Upload Company Logo
router.put(
  "/logo",
  protect,
  upload.single("logo"),
  uploadCompanyLogo
);

module.exports = router;