import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";

export const bookModel = sequelize.define("book", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isbn: {
    type: DataTypes.STRING,
    unique: true,
  },
  availableCopies: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
  totalCopies: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});
