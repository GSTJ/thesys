import Mongoose from "mongoose";
import subscription from "./subscription";

export const Subscription = Mongoose.model("subscriptions", subscription);
