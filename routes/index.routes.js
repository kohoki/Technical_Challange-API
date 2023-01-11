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

router.get("/phones/:id", (req, res) => {
  const { id } = req.params;
  let output = {};
  for (const key in phoneData) {
    const element = phoneData[key];
    // console.log(element.id);
    if (+id === element.id) {
      output = element;
    }
  }
  res.status(201).json({ output });
});

module.exports = router;
