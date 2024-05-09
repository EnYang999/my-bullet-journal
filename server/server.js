// Import core dependencies
const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Ensures environment variables can be used from the .env file

// Import route handlers
const authRoutes = require("./routes/authRoutes");
const usersRoute = require("./routes/userProfile");

// Database connection
const connectDb = require("./config/dbConnection");
connectDb();

// Initialize Express app
const app = express();

// Middleware setup
app.use(express.json()); // Built-in middleware for JSON parsing replacing bodyParser
app.use(cors()); // Enable CORS for all routes

// Route setup
app.use(authRoutes); // Prefix added for better route management
app.use(usersRoute); // Prefix added for better route management

// Starting the server
const PORT = process.env.PORT || 8000; // Use PORT from environment variables or fallback to 8000
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

// Optional: Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack); // Log the error for debugging purposes
	res.status(500).send("Something went wrong!"); // Respond with a generic error message
});
