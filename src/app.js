import express from "express";
import router from "./routes/main.routes.js";

const app = express();

// Middleware for handling JSON requests with a limit of 10kb
app.use(express.json({ limit: "10kb" }));

// Middleware for handling URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Use the defined router for handling routes starting with "/subscribers"
app.use("/subscribers", router);

// Define a root route with information about available endpoints
app.get("/", (req, res) => {
	res.json({
		success: true,
		routes: [
			{ "/subscribers": "Fetch all subscribed data with all fields" },
			{
				"/subscribers/name":
					"Fetch all subscribed data with an array of name and channel name fields",
			},
			{
				"/subscribers/:id":
					"Fetch specific subscribed data with all fields using the provided ID",
			},
			{
				"/subscribers/addNew":
					"Use Postman to send a POST request with the request body requiring two values: name and subscribedChannel",
			},
			{
				"/subscribers/update/:id":
					"Use Postman to send a PUT request with the request parameter 'id' and a request body requiring any value for either 'name' or 'subscribedChannel'",
			},
			{
				"/subscribers/delete/:id":
					"Use Postman to send a DELETE request with the request parameter 'id' to delete subscribed channel data",
			},
		],
	});
});

export default app;
