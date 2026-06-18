import cors from "cors";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import consola from "consola";
import express from "express";
import mongoose from "mongoose";
import passport from "passport";

import {
	DB,
	PORT,
	USER_API,
	PROFILE_API,
	TODO_API,
} from "./constants/index.js";

consola.log(USER_API, PROFILE_API, TODO_API);

import userApis from "./apis/users.js";
import profileApis from "./apis/profiles.js";
import todoApis from "./apis/todos.js";

// ESM replacement for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Passport must be imported in ESM way
import "./middlewares/passport-middleware.js";

const app = express();

/**
 * CORS
 */
const allowedOrigins = [
	"http://localhost:8000",
	"http://localhost:5173",
	"http://147.182.217.227",
	"http://www.enbujo.com",
	"http://enbujo.com",
	"https://enbujo.com",
	"https://localhost:5173",
	"https://147.182.217.227",
	"https://www.enbujo.com",
];

const corsOptions = {
	origin: (origin, callback) => {
		if (!origin || allowedOrigins.includes(origin)) {
			callback(null, true);
		} else {
			callback(new Error("Not allowed by CORS"));
		}
	},
	credentials: true,
	optionsSuccessStatus: 200,
};

app.set("trust proxy", true);

app.use(cors(corsOptions));

/**
 * Native Express body parser (NO body-parser package needed)
 */
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize());

/**
 * Static files
 */
app.use(express.static(join(__dirname, "./uploads")));

/**
 * Routes
 */
app.use(USER_API, userApis);
app.use(PROFILE_API, profileApis);
app.use(TODO_API, todoApis);

/**
 * DB + Server start
 */
const main = async () => {
	try {
		await mongoose.connect(DB);

		consola.success("DATABASE CONNECTED...");

		app.listen(PORT, "0.0.0.0", () => {
			consola.success(`Server started on port ${PORT}`);
		});
	} catch (err) {
		consola.error(`Unable to start server\n${err.message}`);
	}
};

main();