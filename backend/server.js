const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./database/db");
const authRoutes = require("./routes/authRoutes");
const { protect } = require("./middleware/authMiddleware");

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

app.get("/api/profile", protect, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Protected Route Accessed",
    user: req.user,
  });
});

app.get("/", (req, res) => {
  res.send("🚀 PlaceFlow AI Backend Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});