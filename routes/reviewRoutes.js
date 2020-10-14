import express from "express";
import reviewModel from "../models/reviewModel.js";
const router = express.Router();

// Get all reviews
router.get("/", (req, res) => {
  reviewModel.find((err, review) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(review);
    }
  });
});

// Add a new review
router.post("/", (req, res) => {
  const review = req.body;

  reviewModel.create(review, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send("Review created successfully");
    }
  });
});

export default router;
