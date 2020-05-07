import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { subscription } from "./routes";

dotenv.config();
const { CONNECTION_STRING, PORT, URL } = process.env;

var corsOptions = {
  origin: URL,
  optionsSuccessStatus: 200,
};

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));
app.use(subscription);

mongoose
  .connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => app.listen(PORT));
