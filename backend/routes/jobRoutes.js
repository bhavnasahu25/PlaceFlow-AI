const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
  createJob,
  getAllJobs,
  getSingleJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");

router.post("/", protect, createJob);

router.get("/", protect, getAllJobs);

router.get("/:id", protect, getSingleJob);

router.put("/:id", protect, updateJob);

router.delete("/:id", protect, deleteJob);

module.exports = router;