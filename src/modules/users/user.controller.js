import express, { Router } from "express";
import { addUser, logIn } from "./user.service.js";
const router = Router();
// add user
router.post("/add-user", async (req, res) => {
  let userData = await addUser(req.body);
  if (userData) {
    res.json({ message: "user added successfully", userData });
  } else {
    res.json({ message: "Failed to add user" });
  }
});
// user login
router.get("/login", async (req, res) => {
  let userData = await logIn(req.body);
  if (userData) {
    res.json({ message: "logged in successfully", userData });
  } else {
    res.json({ message: "failed to log in" });
  }
});

export default router;
