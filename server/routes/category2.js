const express = require('express')
const router = express.Router()
const Category = require('../database/models/bubble');
const secondCategoriesController = require("../controllers/secondCategoriesController");

router.route("/")
.get(secondCategoriesController.findAll);

router.route("/:id")
.get(secondCategoriesController.findOne);
// /category/5cb62e10b7e34a3a98a666de
router.route("/:id")
.post(secondCategoriesController.createSub);

router
.post('/', (req, res) => {
    console.log('Category signup');

    const {category} = req.body
    // ADD VALIDATION
    Category.findOne(req.body, (err, cate) => {
        if (err) {
            console.log('Category.js post error: ', err)
        } else if (cate) {
            res.json({
                error: `Sorry, already a Category with the Categoryname: ${category}`
            })
        }
        else {
            const newCategory = new Category(req.body)
            newCategory.save((err, savedCategory) => {
                if (err) return res.json(err)
                res.json(savedCategory)
            })
        }
    })
})




module.exports = router