const express = require('express')
const router = express.Router()
const dbUser = require("../database/models/user")

router.route("/:id")
.get(userPageController.findOne);

router.route("/:id")
.get(categoriesController.findOne);

router.route("/:id")
.post(userPageController.dbUser);


module.exports = userPage