import { Router } from "express";
import { allBorrowed, borrowBook, borrowCount } from "./borrowBooks.service.js";
const router = Router();
// Borrow a book
router.post("/borrow-book", async (req, res) => {
  let bookData = await borrowBook(req.body);
  if (bookData) {
    res.json({ msg: "book borrowed successfully", bookData });
  } else {
    res.json({ msg: "book is not available" });
  }
});
// Get borrowed books count for a user
router.get("/get-borrowed-bookes/:id", async (req, res) => {
  let borrowedData = await borrowCount(req.params);
  res.json({ msg: "this user has borrowedd books", borrowedData });
});
// Get all borrowed books (admin only)
router.get("/all/:id", async (req, res) => {
  let returnedData = await allBorrowed(req.params);
  if (returnedData) {
    res.json({ msg: "all borrowed books", returnedData });
  } else {
    res.json({ msg: "only admin can access this data" });
  }
});
export default router;
