const db = require("../database/models/bubble");

// Defining methods for the booksController
module.exports = {
    findAll : function(req, res){
        db
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
    // create : function (req, res){
    //     db.Book
    //     .create(req.body)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // }
};
