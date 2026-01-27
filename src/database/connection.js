import { Sequelize } from "sequelize";
import {
  databaseName,
  databaseUser,
  databasePassword,
} from "../../config/env.service.js";

export const sequelize = new Sequelize(
  databaseName,
  databaseUser,
  databasePassword,
  {
    host: "localhost",
    dialect: "mysql",
  },
);
export const databaseConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export const databaseSync = async () => {
  try {
    const { userModel } = await import("./model/userModel.js");
    const { bookModel } = await import("./model/book.model.js");
    const { BorrowedBookModel } = await import("./model/BorrowedBook.model.js");
    const { relation } = await import("./model/relation.js");
    await sequelize.sync();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
