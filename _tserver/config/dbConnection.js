import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from a .env file
dotenv.config();

const connectDb = async () => {
	try {
		const connect = await mongoose.connect(process.env.CONNECTION_STRING);
		console.log(
			"Database connected: ",
			connect.connection.host,
			connect.connection.name,
			process.env.CONNECTION_STRING
		);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};
export default connectDb;
