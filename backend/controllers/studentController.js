const User = require("../models/User");

// ==========================
// Get Student Profile
// ==========================
const getStudentProfile = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      user: req.user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Update Student Profile
// ==========================
const updateStudentProfile = async (req, res) => {
  try {
    const {
      fullName,
      phone,
      branch,
      year,
      cgpa,
      skills,
    } = req.body;

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.fullName = fullName || user.fullName;
    user.phone = phone || user.phone;
    user.branch = branch || user.branch;
    user.year = year || user.year;
    user.cgpa = cgpa || user.cgpa;
    user.skills = skills || user.skills;

    const updatedUser = await user.save();

    res.status(200).json({
      success: true,
      message: "Profile Updated Successfully",
      user: updatedUser,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getStudentProfile,
  updateStudentProfile,
};