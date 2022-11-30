import bcrypt from "bcryptjs";
import db from "../models/index";

const salt = bcrypt.genSaltSync(10);

const createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPasswordFromBcrypt = await hashUserPassword(data.password);
      await db.User.create({
        email: data.email,
        password: hashPasswordFromBcrypt,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phonenumber: data.phonenumber,
        gender: data.gender === "1" ? true : false,
        roleId: data.roleId,
      });

      resolve("Create new user successfully!");
    } catch (error) {
      reject(error);
    }
  });
};

const hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hash = await bcrypt.hashSync(password, salt);
      resolve(hash);
    } catch (error) {
      reject(error);
    }
  });
};

const getDisplayAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const users = await db.User.findAll({
        raw: true,
      });
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
};

const getUserInfoById = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.User.findOne({
        where: { id: userId },
        raw: true,
      });
      if (!user) resolve({});
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

const updateUserData = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.User.update(
        {
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
        },
        {
          where: {
            id: data.id,
          },
        }
      );
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

export { createNewUser, getDisplayAllUser, getUserInfoById, updateUserData };
