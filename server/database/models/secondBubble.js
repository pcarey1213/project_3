const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

const SecondBubbleSchema = new Schema({
    categoryTitle: {type: String, unique: false, required: false},
    higherCategory: {
        type: Schema.Types.ObjectId,
        ref: "Bubble"
    },
    subCategory : [
        {
            type : Schema.Types.ObjectId,
            ref: "ThirdBubble"
        }
    ]
});

const SecondBubble = mongoose.model("SecondBubble", SecondBubbleSchema)
module.exports = SecondBubble;