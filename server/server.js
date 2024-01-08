const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Enable CORS for all routes
app.use(cors());
const connectDb = require("./config/dbConnection");
connectDb();

// Your routes and other middleware go here

const PORT = 8000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
app.use(authRoutes);
