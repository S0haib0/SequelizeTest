import express, { Router } from "express";
import { getAllBooks, getBookById } from "./books.service.js";
// import { json } from "sequelize";
const router = Router();

router.get("/get-all-books", async (req, res) => {
  let bookData = await getAllBooks();
  res.json({ bookData });
  if (bookData) {
    (res, json({ msg: "found blogs", bookData }));
  } else {
    res.json({ msg: "no blogs found" });
  }
});

router.get("/get-book-by-id/:id", async (req, res) => {
  let { id } = req.params;
  let bookData = await getBookById(id);
  res.json({ bookData });
  if (bookData) {
    (res, json({ msg: "found blogs", bookData }));
  } else {
    res.json({ msg: "error 404 " });
  }
});

export default router;
