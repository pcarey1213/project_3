const dbComment = require("../database/models/comment");
const dbBubble = require("../database/models/bubble");
const secondBubble = require("../database/models/secondBubble");
const thirdBubble = require("../database/models/thirdBubble");
const dbUser = require("../database/models/user");

// Defining methods for the commentController
module.exports = {
    
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
            .then(function(dbModel){
                if(req.body.user){
                    dbUser.findOneAndUpdate({
                        _id : req.body.user
                    }, {
                        $push : {comment : dbCommentModel._id}
                    }, {
                        new: true
                    })
                    .then(function(dbModel){
                        res.json(dbModel);
                    })
                    .catch(function(err){
                        res.json(err);
                    })
                } else {
                    res.json(dbModel)
                } 
            })
            .catch(function(err){
                res.json(err);
            })            
        })
    },
    createToSecond : function(req, res){
        dbComment.create(req.body)
        .then(function(dbCommentModel){
            secondBubble.findOneAndUpdate({
                _id : req.params.id
            }, {
                $push : {comment : dbCommentModel._id}
            }, {
                new: true
            })
            .then(function(dbModel){
                if(req.body.user){
                    dbUser.findOneAndUpdate({
                        _id : req.body.user
                    }, {
                        $push : {comment : dbCommentModel._id}
                    }, {
                        new: true
                    })
                    .then(function(dbModel){
                        res.json(dbModel);
                    })
                    .catch(function(err){
                        res.json(err);
                    })
                    
                } else {
                    res.json(dbModel)
                }  
            })
            .catch(function(err){
                res.json(err);
            }) 
        }) 
    },
    createToThird : function(req, res){
        dbComment.create(req.body)
        .then(function(dbCommentModel){
            thirdBubble.findOneAndUpdate({
                _id : req.params.id
            }, {
                $push : {comment : dbCommentModel._id}
            }, {
                new: true
            })
            .then(function(dbModel){
                if(req.body.user){
                    dbUser.findOneAndUpdate({
                        _id : req.body.user
                    }, {
                        $push : {comment : dbCommentModel._id}
                    }, {
                        new: true
                    })
                    .then(function(dbModel){
                        res.json(dbModel);
                    })
                    .catch(function(err){
                        res.json(err);
                    })
                } 
                git else {
                    res.json(dbModel)
                }  
            })
            .catch(function(err){
                res.json(err);
            }) 
        }) 
    },
    updateLikes : function(req, res){
        dbComment.updateOne({
            _id : req.params.id
        }, {
            $set : req.body
        })
        .then(function(dbModel){
            res.json(dbModel);
        })
        .catch(function(err){
            res.json(err);
        })
    }
  
};
