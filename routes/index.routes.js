const express = require("express");
const router = express.Router();
const phoneData = require("../data/phones.json");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/phones", (req, res) => {
  res.status(201).json({ phoneData });
});

module.exports = router;
