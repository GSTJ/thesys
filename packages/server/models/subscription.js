import uniqueValidator from "mongoose-unique-validator";
import { isEmail } from "validator";
import { Schema } from "mongoose";

const Subscription = new Schema({
  email: {
    type: String,
    required: [true, "You forgot to type the e-mail ;)"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please, type a valid e-mail!"],
  },
  nome: {
    type: String,
    required: [true, "You forgot to type the name ;)"],
  },
});

Subscription.plugin(uniqueValidator, {
  message: "You have already registered. ;)",
});

export default Subscription;
