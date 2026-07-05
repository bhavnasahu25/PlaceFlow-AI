const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const { getStudentProfile } = require("../controllers/studentController");

// Student Profile
router.get("/profile", protect, getStudentProfile);

module.exports = router;