import mongoose from "mongoose";
import { DB_NAME } from "./constant.js";

export async function connectDb() {
	try {
		// Use the new URL parser and unified topology to avoid deprecation warnings
		const connectInstance = await mongoose.connect(
			`${process.env.MONGODB_URI}/${DB_NAME}`
		);

		console.log("DB connection established");
	} catch (error) {
		console.error("Error connecting to the database:", error.message);
		throw error; // Rethrow the error for potential further handling at a higher level
	}
}
