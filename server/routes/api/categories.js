const router = require("express").Router();
const categoriesController = require("../../controllers/categoriesController");

// Matches with "/api/books"
router.route("/")
.get(categoriesController.findAll)
.post(categoriesController.create);

router.route("/:id")
// .delete(booksController.delete);

module.exports = router;