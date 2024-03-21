import express, { request } from "express";
import mongoose from "mongoose";
import { PORT, mongoDbUrl } from "./config.js";
import cors from "cors";
const app = express();

import bookRoute from "./routes/book.route.js";
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/book", bookRoute);

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("welcome to MERN ");
});

mongoose
  .connect(mongoDbUrl)
  .then(() => {
    console.log("connected to server");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log(`App is listening to port : ${PORT}`);
});
