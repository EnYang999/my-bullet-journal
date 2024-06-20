import cors from "cors";
import { join } from "path";
import consola from "consola";
import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import { json } from "body-parser";
// import cookieParser from "cookie-parser";
// Import Application Constants
import { DB, PORT, USER_API, PROFILE_API, TODO_API } from "./constants";

// Router imports
import userApis from "./apis/users";
import profileApis from "./apis/profiles";
import todoApis from "./apis/todos";
// Import passport middleware
require("./middlewares/passport-middleware");

// Initialize express application
const app = express();

// Apply Application Middlewares
// const corsOptions = {
// 	origin: "http://localhost:5173" 'http://147.182.217.227',
// 	credentials: true,
// 	// access-control-allow-credentials:true,
// 	optionSuccessStatus: 200,
// };
const allowedOrigins = [
	"http://localhost:5173",
	"http://147.182.217.227",
	"http://www.enbujo.com",
];

const corsOptions = {
	origin: (origin, callback) => {
		if (allowedOrigins.includes(origin) || !origin) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
	credentials: true,
	optionsSuccessStatus: 200, // for legacy browsers
};
app.set("trust proxy", true);
app.use(cors(corsOptions));
app.use(json({ limit: "50mb" }));
app.use(passport.initialize());
app.use(express.static(join(__dirname, "./uploads")));
// app.use(cookieParser());
// Inject Sub router and apis
app.use(USER_API, userApis);
app.use(PROFILE_API, profileApis);
app.use(TODO_API, todoApis);

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
		app.listen(PORT, "0.0.0.0", () =>
			consola.success(`Sever started on port ${PORT}`)
		);
	} catch (err) {
		consola.error(`Unable to start the server \n${err.message}`);
	}
};

main();
