import cors from "cors";
import { join } from "path";
import consola from "consola";
import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import { json } from "body-parser";

// Import Application Constants
import { DB, PORT, USER_API, PROFILE_API } from "./constants";

// Router imports
import userApis from "./apis/users";
import profileApis from "./apis/profiles";

// Import passport middleware
require("./middlewares/passport-middleware");

// Initialize express application
const app = express();

// Apply Application Middlewares
app.use(cors());
app.use(json());
app.use(passport.initialize());
app.use(express.static(join(__dirname, "./uploads")));

// Inject Sub router and apis
app.use(USER_API, userApis);
app.use(PROFILE_API, profileApis);

const main = async () => {
	try {
		// Connect with the database
		await mongoose.connect(DB, {
			useNewUrlParser: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		});
		consola.success("DATABASE CONNECTED...");
		// Start application listening for request on server
		app.listen(PORT, () => consola.success(`Sever started on port ${PORT}`));
	} catch (err) {
		consola.error(`Unable to start the server \n${err.message}`);
	}
};

main();
