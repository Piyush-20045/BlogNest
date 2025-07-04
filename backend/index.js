require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./config/db")
const blogRoutes = require("./routes/blogRoutes")

const app = express();
app.use(cors())
app.use(express.json());
connectDB();

// ROUTES
app.use("/api/blogs", blogRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
