// Import core dependencies
import express from "express";
import cors from "cors";
import connectDb from "./config/dbConnection.js";
import passport from "passport";
import "./middlewares/passport-middleware.js"; // Assuming it's in middlewares folder
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";

// Import route handlers
// import authRoutes from "./routes/authRoutes";
// import usersRoute from "./routes/userProfile";

// Initialize Express app
const app = express();

app.use(express.json());
app.use(cors());
// Route setup
// app.use(authRoutes);
// app.use(usersRoute);

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

connectDb();
