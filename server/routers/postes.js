import express, { json } from "express";
import Postmessage from "../modules/postmessage.js";
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const Postes = await Postmessage.findAll();
    res.json(Postes);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", (req, res, next) => {
  const postes = req.body;
  Postmessage.create(postes);
  res.status(201).json(postes);
});
export default router;
