import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
require("dotenv").config();

const app = express();

//configApp
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

// run server
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on ${port}...`);
});
