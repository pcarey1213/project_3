const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

const ThirdBubbleSchema = new Schema({
    categoryTitle: {type: String, unique: false, required: false},
    higherCategory: {
        type: Schema.Types.ObjectId,
        ref: "SecondBubble"
    }
});

const ThirdBubble = mongoose.model("ThirdBubble", ThirdBubbleSchema)
module.exports = ThirdBubble;