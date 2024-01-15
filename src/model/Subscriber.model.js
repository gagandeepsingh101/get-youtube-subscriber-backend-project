import mongoose from "mongoose";

// Define the subscriber schema
const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subscribedChannel: {
    type: String,
    required: true,
  },
  subscribedDate: {
    type: Date,
    default: Date.now(),
  },
});

// Create the 'Subscriber' model directly using mongoose.model
const subscribers = mongoose.model("subscribers", subscriberSchema);

// Export the model
export default subscribers;

// Optionally, export the connection if needed in a separate file
export const conn = mongoose.connection;
