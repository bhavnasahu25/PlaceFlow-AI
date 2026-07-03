const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["student", "tpo", "recruiter"],
      default: "student",
    },

    phone: {
      type: String,
      default: "",
    },

    branch: {
      type: String,
      default: "",
    },

    year: {
      type: Number,
      default: 0,
    },

    cgpa: {
      type: Number,
      default: 0,
    },

    skills: {
      type: [String],
      default: [],
    },

    resume: {
      type: String,
      default: "",
    },

    profileImage: {
      type: String,
      default: "",
    },

    isPlaced: {
      type: Boolean,
      default: false,
    },

    company: {
      type: String,
      default: "",
    },

    package: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);