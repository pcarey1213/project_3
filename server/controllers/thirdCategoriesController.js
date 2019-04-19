const dbThirdBubble = require("../database/models/thirdBubble");

// Defining methods for the booksController
module.exports = {
    findAll : function(req, res){
        dbThirdBubble
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }, 
    findOne : function(req, res){
        dbThirdBubble
        .findById({ _id: req.params.id })
        .populate("subCategory")
          .then(dbModel => {
            //   console.log("dd")
            res.json(dbModel);
          })
          .catch(err => {
            res.status(422).json(err)
          });
    }
};