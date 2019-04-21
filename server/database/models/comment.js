const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

const CommentSchema = new Schema({
    content: {type: String, unique: false, required: false},
    likes: {type: Number, default: 0},
    dates: {type: Date},
    firstCategory : [
        {
            type : Schema.Types.ObjectId,
            ref: "Bubble"
        }
    ],
    secondCategory : [
        {
            type : Schema.Types.ObjectId,
            ref: "SecondBubble"
        }
    ],
    thirdCategory : [
        {
            type : Schema.Types.ObjectId,
            ref: "ThirdBubble"
        }
    ],
    user : [
        {
            type : Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});

const Comment = mongoose.model("Comment", CommentSchema)
module.exports = Comment;