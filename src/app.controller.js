import express from "express";
import { databaseConnection, databaseSync } from "./database/connection.js";
import { userModel } from "./database/model/userModel.js";
import userRouter from "./modules/users/user.controller.js";
import bookRouter from "./modules/books/books.controller.js";
import borrowBookRouter from "./modules/borrowBooks/borrowbooks.controller.js";
import "./database/model/relation.js";

export const bootstrap = async () => {
  const app = express();
  app.use(express.json());

  await databaseConnection();
  await databaseSync();
  // Routers
  app.use("/users", userRouter);
  app.use("/books", bookRouter);
  app.use("/borrow", borrowBookRouter);

  // test connection
  app.get("/", (req, res) => {
    res.json({ message: "Hello from app.controller.js" });
  });

  app.use((error, req, res, next) => {
    res.json({ message: "internal server error", error: error.message });
  });

  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port${PORT}`);
  });
};
