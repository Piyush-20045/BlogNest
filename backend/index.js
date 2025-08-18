require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./config/db")
const blogRoutes = require("./routes/blogRoutes")
const uploadAuthRoute = require("./routes/uploadAuth")

const app = express();
app.use(cors())
app.use(express.json());
connectDB();

// ROUTES
app.use("/api/blogs", blogRoutes);
app.use("/uploadAuth", uploadAuthRoute);

// Ping route for cold start problem of render
app.get("/ping", (req, res) => {
    res.status(200).json({ message: "pong" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
