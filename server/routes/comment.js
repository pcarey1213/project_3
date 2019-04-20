const express = require('express')
const router = express.Router()
const commentController = require("../controllers/commentController");

// ex) /comment/1/5cb62e10b7e34a3a98a666de

router.route("/1/:id")
.post(commentController.createToFirst);

router.route("/2/:id")
.post(commentController.createToSecond);

router.route("/3/:id")
.post(commentController.createToThird);

module.exports = router