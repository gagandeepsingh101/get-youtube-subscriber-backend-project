import { Router } from "express";
import * as controller from "../controller/main.controller.js";

const router = Router();

// Route for getting all subscribed data
router.get("/", controller.getAllSubscribersData);

// Route for getting subscribed data with an array of name and channel name fields
router.get("/name", controller.getAllSpecificSubscribersData);

// Route for getting specific subscribed data by ID
router.get("/:id", controller.getSpecificIdData);

// Route for adding new subscriber data
router.post("/addNew", controller.addNewSubscriberData);

// Route for updating specific subscribed data by ID
router.put("/update/:id", controller.updateSpecificIdSubscribedData);

// Route for deleting specific subscribed data by ID
router.delete("/delete/:id", controller.deleteSpecificIdSubscribedData);

export default router;
