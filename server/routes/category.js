const express = require('express')
const router = express.Router()
const Category = require('../database/models/bubble')

router.post('/', (req, res) => {
    console.log('Category signup');

    const {category} = req.body
    // ADD VALIDATION
    Category.findOne({ category: category }, (err, cate) => {
        if (err) {
            console.log('Category.js post error: ', err)
        } else if (cate) {
            res.json({
                error: `Sorry, already a Category with the Categoryname: ${category}`
            })
        }
        else {
            const newCategory = new Category({
                category: category,
            })
            newCategory.save((err, savedCategory) => {
                if (err) return res.json(err)
                res.json(savedCategory)
            })
        }
    })
})


module.exports = router