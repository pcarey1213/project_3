const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

const BubbleSchema = new Schema({
    category: {type: String, unique: false, required: false},
});

const Bubble = mongoose.model("Bubble", BubbleSchema)
module.exports = Bubble;