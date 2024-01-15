import subscribers, { conn} from "../model/Subscriber.model.js";
// Retrieve all subscribed data
export const getAllSubscribersData = async function (req, res) {
	try {
		const SubscriberModel = conn.model("subscribers");
		const subscriberData = await SubscriberModel.find({});
		res.json({
			success: true,
			subscriberData,
		});
	} catch (error) {
		res.json({
			success: false,
			message: `Error in Fetching All Data: ${error.message}`,
		});
	}
};

// Retrieve subscribed data with specific fields (name and subscribedChannel)
export const getAllSpecificSubscribersData = async function (req, res) {
	try {
		const SubscriberModel = conn.model("subscribers");
		const subscriberData = await SubscriberModel.find(
			{},
			{ _id: 0, name: 1, subscribedChannel: 1 }
		);
		res.json({
			success: true,
			subscriberData,
		});
	} catch (error) {
		res.json({
			success: false,
			message: `Error in fetching all with specific field data: ${error.message}`,
		});
	}
};

// Retrieve specific subscribed data by ID
export const getSpecificIdData = async function (req, res) {
	try {
		const { id } = req.params;
		const SubscriberModel = conn.model("subscribers");
		const subscriberData = await SubscriberModel.findById(id);
		res.json({
			success: true,
			subscriberData,
		});
	} catch (error) {
		res.json({
			success: false,
			message: `Error in fetching specific Id data: ${error.message}`,
		});
	}
};

// Add new subscriber data
export const addNewSubscriberData = async function (req, res) {
	try {
		const newSubscribedData = new subscribers(req.body);
		await newSubscribedData.save();
		res.json({
			success: true,
			message: "New subscribed data saved successfully",
		});
	} catch (error) {
		res.json({
			success: false,
			message: `Error in saving subscribed data: ${error.message}`,
		});
	}
};

// Update specific subscribed data by ID
export const updateSpecificIdSubscribedData = async function (req, res) {
	try {
		const { id } = req.params;
		const SubscriberModel = conn.model("subscribers");
		await SubscriberModel.updateOne({ _id: id }, req.body);
		res.json({
			success: true,
			message: `Subscribed data of id: ${id} is successfully updated`,
		});
	} catch (error) {
		res.json({
			success: false,
			message: `Error in updating subscribed data: ${error.message}`,
		});
	}
};

// Delete specific subscribed data by ID
export const deleteSpecificIdSubscribedData = async function (req, res) {
	try {
		const { id } = req.params;
		const SubscriberModel = conn.model("subscribers");
		await SubscriberModel.deleteOne({ _id: id });
		res.json({
			success: true,
			message: `Subscribed data of id: ${id} is successfully deleted`,
		});
	} catch (error) {
		res.json({
			success: false,
			message: `Error in deleting subscribed data: ${error.message}`,
		});
	}
};
