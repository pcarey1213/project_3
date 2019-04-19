const express = require('express')
const router = express.Router()
const secondBubble = require('../database/models/secondBubble');
const secondCategoriesController = require("../controllers/secondCategoriesController");

// ex) /category2/5cb62e10b7e34a3a98a666de

router.route("/")
.get(secondCategoriesController.findAll);

router.route("/:id")
.get(secondCategoriesController.findOne);

router.route("/:id")
.post(secondCategoriesController.createSub);

module.exports = router