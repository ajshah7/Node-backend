const express = require("express");
const router = express.Router();

// User model
const News = require("../models/news");

// @route   GET /api/users/
// @desc    Get all users
// @access  Public
router.get("/", async (req, res) => {
  try {
    const news = await News.find({});
    res.send({ news });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   GET /api/users/:id
// @desc    Get a specific user
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const news = await News.findById(req.params.id);
    res.send({ news });
  } catch (err) {
    res.status(404).send({ message: "News not found!" });
  }
});

// @route   POST /api/users/
// @desc    Create a user
// @access  Public
router.post("/", async (req, res) => {
  try {
    const newNews = await News.create({
      text: req.body.text,
      moretext: req.body.moretext,
      title: req.body.title,
      img: req.body.img,
      moreimg: req.body.moreimg,
      video: req.body.video,
      adv: req.body.adv,
      adv2: req.body.adv2,
      adv3: req.body.adv3
    });
    res.send({ newNews });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   PUT /api/users/:id
// @desc    Update a user
// @access  Public
router.put("/:id", async (req, res) => {
  try {
    const updatedNews = await News.findByIdAndUpdate(req.params.id, req.body);
    res.send({ message: "The News was updated" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   DELETE /api/users/:id
// @desc    Delete a user
// @access  Public
router.delete("/:id", async (req, res) => {
  try {
    const removeNews = await News.findByIdAndRemove(req.params.id);
    res.send({ message: "The News was removed" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

module.exports = router;
