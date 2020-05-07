import express from "express";
import { Subscription } from "../models";

const router = express.Router();

router.use("/subscription", async (req, res) => {
  try {
    return res.json(await Subscription.create(req.body));
  } catch (err) {
    return res.json({ ...err });
  }
});

export default router;
