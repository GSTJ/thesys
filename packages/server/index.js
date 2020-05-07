import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { subscription } from "./routes";

dotenv.config();
const { CONNECTION_STRING, PORT } = process.env;

var whitelist = [
  "http://thesys.com.br",
  "https://thesys.com.br",
  "http://www.thesys.com.br",
  "https://www.thesys.com.br",
];

var corsOptions = {
  optionsSuccessStatus: 200,
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
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
