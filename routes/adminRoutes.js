import express from "express";
import adminModel from "../models/adminModel.js";

const router = express.Router();

// Getting admin
router.get("/:email", async (req, res) => {
  const email = req.params.email;

  adminModel.find({ email: email }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Make a new admin
router.post("/:senderEmail", async (req, res) => {
  const admin = req.body;
  const email = req.params.senderEmail;

  adminModel.find({ email: admin.email }, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else if (data.length > 0) {
      res.status(201).send("This user is already an admin");
    } else {
      adminModel.create(admin, (err, data) => {
        if (err) {
          res.status(500).send(err);
        } else {
          res.status(201).send("Admin added successfully");
        }
      });
    }
  });
});

export default router;
