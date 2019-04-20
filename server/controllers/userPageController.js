const dbUser = require("../database/models/user");

module.exports = {
    findOne : function(req, res){
        dbUser
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
}