const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

const BubbleSchema = new Schema({
    categoryTitle: {type: String, unique: false, required: false},
    subCategory : [
        {
            type : Schema.Types.ObjectId,
            ref: "SecondBubble"
        }
    ],
    comment : [
		{
            type : Schema.Types.ObjectId,
            ref: "Comment"
        }
	]
});
BubbleSchema.index({categoryTitle: 'text'});

const Bubble = mongoose.model("Bubble", BubbleSchema)
module.exports = Bubble;