const dbSecondBubble = require("../database/models/secondBubble");
const dbThirdBubble = require("../database/models/thirdBubble");

// Defining methods for the booksController
module.exports = {
    findAll : function(req, res){
        dbSecondBubble
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }, 
    findOne : function(req, res){
        dbSecondBubble
        .findById({ _id: req.params.id })
        .populate("subCategory")
        .populate("comment")
        .then(dbModel => {
        //   console.log("dd")
        res.json(dbModel);
        })
        .catch(err => {
        res.status(422).json(err)
        });
    },
    createSub : function(req, res){

        dbThirdBubble.findOne(req.body, (err, cate)=> {
            if(err) { 
                console.log("Category post error : "+ err)
            } else if(cate){
                res.json({
                    error: `Sorry, already a Category with the Categoryname`
                })
            } else {            
                dbThirdBubble.create(req.body)
                .then(function(dbThirdModel){
                    return dbSecondBubble.findOneAndUpdate({
                        _id : req.params.id
                    }, {
                        $push : {subCategory : dbThirdModel._id}
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
};