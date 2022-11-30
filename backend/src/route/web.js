import express from "express";
import * as homeController from "../controllers/homeController";

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/crud", homeController.getCRUD);

  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.displayGetCRUD);
  router.get("/edit-crud", homeController.getEditCRUD);
  router.post("/update-crud", homeController.updateCRUD);

  // rest Api

  return app.use("/", router);
};

export default initWebRoutes;
