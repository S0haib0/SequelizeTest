import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

export const BorrowedBookModel = sequelize.define("BorrowedBook", {
  borrowDate: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
  returnDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  bookStatus: {
    type: DataTypes.ENUM("borrowed", "returned"),
    defaultValue: "borrowed",
  },
});
