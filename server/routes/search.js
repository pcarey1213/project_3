const express = require('express')
const router = express.Router()
const Category = require('../database/models/bubble');
const searchController = require("../controllers/searchController");

// ex) /category/5cb62e10b7e34a3a98a666de


router.route("/:id")
.get(searchController.find);



module.exports = router