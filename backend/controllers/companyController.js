const Company = require("../models/Company");

// ==========================
// Get Company Profile
// ==========================
exports.getCompanyProfile = async (req, res) => {
  try {
    const company = await Company.findOne({
      user: req.user._id,
    }).populate("user", "name email");

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company profile not found",
      });
    }

    return res.status(200).json({
      success: true,
      company,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Update Company Profile
// ==========================
exports.updateCompanyProfile = async (req, res) => {
  try {
    const { companyName, website, location, description } = req.body;

    let company = await Company.findOne({
      user: req.user._id,
    });

    if (!company) {
      company = await Company.create({
        user: req.user._id,
        companyName,
        website,
        location,
        description,
      });
    } else {
      company.companyName = companyName || company.companyName;
      company.website = website || company.website;
      company.location = location || company.location;
      company.description = description || company.description;

      await company.save();
    }

    return res.status(200).json({
      success: true,
      message: "Company Profile Updated Successfully",
      company,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ==========================
// Upload Company Logo
// ==========================
exports.uploadCompanyLogo = async (req, res) => {
  try {
    const company = await Company.findOne({
      user: req.user._id,
    });

    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload a logo",
      });
    }

    company.logo = req.file.path;

    await company.save();

    return res.status(200).json({
      success: true,
      message: "Company Logo Uploaded Successfully",
      logo: company.logo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};