import db from "../models/index";
import * as CRUDservice from "../services/CRUDservice";

const getHomePage = async (_req, res) => {
  try {
    const data = await db.User.findAll();
    return res.render("homePage.ejs", { dataUser: JSON.stringify(data) });
  } catch (error) {
    console.log(error);
  }
};

const getCRUD = (req, res) => {
  return res.render("crud.ejs");
};

const postCRUD = async (req, res) => {
  const message = await CRUDservice.createNewUser(req.body);
  console.log(message);
  return res.send("okok");
};

const displayGetCRUD = async (req, res) => {
  const data = await CRUDservice.getDisplayAllUser();
  return res.render("displayCRUD.ejs", {
    dataTable: data,
  });
};

const getEditCRUD = async (req, res) => {
  const userId = req.query.id;
  if (userId) {
    const data = await CRUDservice.getUserInfoById(userId);
    return res.render("editCRUD.ejs", {
      userData: data,
    });
  } else {
    return res.send("user not found");
  }
};

const updateCRUD = async (req, res) => {
  await CRUDservice.updateUserData(req.body);
  return res.redirect("/get-crud");
};

export {
  getHomePage,
  getCRUD,
  postCRUD,
  displayGetCRUD,
  getEditCRUD,
  updateCRUD,
};
