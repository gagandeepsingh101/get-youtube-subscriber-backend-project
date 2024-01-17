import app from "./app.js";
import { config } from "dotenv";
import { connectDb } from "./createDatabase.js";

// Load environment variables from .env file
config();

// Asynchronous function to start the server
async function startServer() {
	try {
		// Connect to the database
		await connectDb();

		// Start the server on port 3000
		app.listen(process.env.PORT || 3000, () => {
			console.log(
				"Server is listening on http://localhost:" + (process.env.PORT || 3000)
			);
		});
	} catch (error) {
		// Handle errors during server startup, especially database connection issues
		console.error("Error during server startup:", error.message);
	}
}

// Call the function to start the server
startServer();
