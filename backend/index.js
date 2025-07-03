require("dotenv").config();
const mongoose = require("mongoose");

// connect to mongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.error("Connection Error", error))