const dbBubble = require("../database/models/bubble");
const secondBubble = require("../database/models/secondBubble");
const thirdBubble = require("../database/models/thirdBubble");
// const db = require("../database/models/");


// Defining methods for the commentController
module.exports = {
    find : function(req, res){
        var dbModel = {
            first : {},
            second : {},
            third : {}
        }
        dbBubble
        .find( { $text: { $search: req.params.id } } )
        .then(dbfirst => {
            dbModel.first = dbfirst
            secondBubble
            .find( { $text: { $search: req.params.id } } )
            .then(dbSecondBubbleModel => {
                dbModel.second = dbSecondBubbleModel
                thirdBubble
                .find( { $text: { $search: req.params.id } } )
                .then(dbThirdBubbleModel => {
                    dbModel.third = dbThirdBubbleModel
                    res.json(dbModel)                
                })
                .catch(err => res.json(err))
            })
            .catch(err => res.json(err))
        })
        .catch(err => res.status(422).json(err));
    }
    
};
