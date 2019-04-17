const mongoose = require("mongoose");
const db = require("../database/models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost:27017/bubbles"
);

const bubbleSeed = [
  {
    category: "Sports",
  },
  {
    category: "Movies",
  },
  {
    category: "News",
  },
  {
    category: "Science",
  },
  {
    category: "Programming",
  },
  {
    category: "Music",
  },
  {
    category: "Lifestyle",
  },
  {
    category: "Clothing",
  },
  {
    category: "Books",
  }
];

db.Bubble
  .remove({})
  .then(() => db.Bubble.collection.insertMany(bubbleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
});
