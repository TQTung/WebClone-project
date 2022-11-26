import express from "express";
import * as homeController from "../controllers/homeController";

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);

  // rest Api

  return app.use("/", router);
};

export default initWebRoutes;
