import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from "./config/connectDB";
require("dotenv").config();

const app = express();

//configApp
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

// connect to database
connectDB();

// run server
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on ${port}...`);
});
