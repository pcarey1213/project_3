const dbComment = require("../database/models/comment");
const dbBubble = require("../database/models/bubble");
const secondBubble = require("../database/models/secondBubble");
const thirdBubble = require("../database/models/thirdBubble");
const dbUser = require("../database/models/user");

// Defining methods for the booksController
module.exports = {
    // findOne : function(req, res){
    //     dbComment
    //     .findById({ _id: req.params.id })
    //     .populate("subCategory")
    //       .then(dbModel => {
    //         //   console.log("dd")
    //         res.json(dbModel);
    //       })
    //       .catch(err => {
    //         res.status(422).json(err)
    //       });
    // },
    createToFirst : function(req, res){
        dbComment.create(req.body)
        .then(function(dbCommentModel){
            dbBubble.findOneAndUpdate({
                _id : req.params.id
            }, {
                $push : {comment : dbCommentModel._id}
            }, {
                new: true
            })
            console.log("----------------------req.body.user");
            console.log(req.body.user);
            dbUser.findOneAndUpdate({
                _id : req.body.user
            }, {
                $push : {comment : dbCommentModel._id}
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
    },
    createToSecond : function(req, res){
        dbComment.create(req.body)
        .then(function(dbCommentModel){
            return secondBubble.findOneAndUpdate({
                _id : req.params.id
            }, {
                $push : {comment : dbCommentModel._id}
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
    },
    createToThird : function(req, res){
        dbComment.create(req.body)
        .then(function(dbCommentModel){
            return thirdBubble.findOneAndUpdate({
                _id : req.params.id
            }, {
                $push : {comment : dbCommentModel._id}
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
  
};
