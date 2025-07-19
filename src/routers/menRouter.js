const express = require("express");
const router = express.Router();
const menSwimmer = require("../models/mens");
// API request handlers using the menRouter

router.post("/mens", async (req, res) => {
  try {
    //const athInfo = new menSwimmer(req.body);
    //const inserted_data = await menSwimmer.insertMany(req.body);// multiple
    //single document: create new athlete and save to database

    const athInfo = new menSwimmer(req.body);
    const inserted_data = await athInfo.save();

    res.status(201).send(inserted_data);
  } catch (e) {
    res.status(400).send(e); // to see in postman
  }
});
// get all athlete request
router.get("/mens", async (req, res) => {
  try {
    const getData = await menSwimmer.find({}).sort({ ranking: 1 });
    res.status(200).send(getData);
  } catch (e) {
    res.status(400).send(e);
  }
});
// get individual athlete request
router.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await menSwimmer.findById(_id);
    res.status(200).send(getMen);
  } catch (e) {
    res.status(400).send(e);
  }
});
//update invi athlete request
router.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateMen = await menSwimmer.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(updateMen);
  } catch (e) {
    res.status(500).send(e);
  }
});
// delete inv. data from database
router.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteMen = await menSwimmer.findByIdAndDelete(_id);
    res.status(200).send(deleteMen);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
