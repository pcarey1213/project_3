const dbBubble = require("../database/models/bubble");
const dbSecondBubble = require("../database/models/secondBubble");

// Defining methods for the booksController
module.exports = {
    findAll : function(req, res){
        dbBubble
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }, 
    findOne : function(req, res){
        dbBubble
        .findById({ _id: req.params.id })
        .populate("subCategory")
        .populate("comment")
        .then(dbModel => {
        res.json(dbModel);
        })
        .catch(err => {
        res.status(422).json(err)
        });
    },
    createSub : function(req, res){
        dbSecondBubble.findOne(req.body, (err, cate)=> {
            if(err) { 
                console.log("Category post error : "+ err)
            } else if(cate){
                res.json({
                    error: `Sorry, already a Category with the Categoryname`
                })
            } else {
                dbSecondBubble.create(req.body)
                .then(function(dbSecondModel){
                    return dbBubble.findOneAndUpdate({
                        _id : req.params.id
                    }, {
                        $push : {subCategory : dbSecondModel._id}
                    }, {
                        new: true
                    })
                })
                .then(function(dbModel){
                    res.json(dbModel);
                })
                .catch(function(err){
                    res.json(err);
                })
            }
        })
        
    }

    // create : function (req, res){
    //     db.Book
    //     .create(req.body)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // }
};
