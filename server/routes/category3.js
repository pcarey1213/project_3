const express = require('express')
const router = express.Router()
const Category = require('../database/models/bubble');
const thirdCategoriesController = require("../controllers/thirdCategoriesController");

// ex) /category3/5cb62e10b7e34a3a98a666de

router.route("/")
.get(thirdCategoriesController.findAll);

router.route("/:id")
.get(thirdCategoriesController.findOne);


module.exports = router