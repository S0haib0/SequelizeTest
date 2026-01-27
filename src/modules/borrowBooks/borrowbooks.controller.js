import express, { Router } from "express";
import { allBorrowed, borrowBook, borrowCount } from "./borrowBooks.service.js";
const router = Router();

router.post("/borrow-book", async (req, res) => {
  let bookData = await borrowBook(req.body);
});

router.get("/get-borrowed-bookes:/id", async (req, res) => {
  let borrowedData = await borrowCount(req.params);
  if (borrowedData > 0) {
    res.json({ msg: "this user has borrowedd books", borrowedData });
  } else {
    res.json({ msg: "this user has not borrowed any books yet" });
  }
});

router.get("/all", async (req, res) => {
  let returnedData = await allBorrowed(req.body);
});
export default router;
