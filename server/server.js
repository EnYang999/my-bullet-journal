const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Enable CORS for all routes
app.use(cors());
const connectDb = require("./config/dbConnection");
connectDb();
app.use(express.json());
// app.use(cookieParser());

// Your routes and other middleware go here

const PORT = 8000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
app.get("/", (req, res) => {
	res.send("--------Hello World------");
});
app.use(authRoutes);
