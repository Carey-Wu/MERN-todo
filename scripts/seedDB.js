const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/mern_todo", { useNewUrlParser: true }
);

const itemSeed = [
    {
        note: "Buy Milk",
        author: "Nicole",
        date: new Date(Date.now())
    },
    {
        note: "Buy Eggs",
        author: "Nicole",
        date: new Date(Date.now())
    },
    {
        note: "Walk the dog",
        author: "Jim",
        date: new Date(Date.now())
    },
    {
        note: "Complete Homework",
        author: "Mike",
        date: new Date(Date.now())
    },
];

db.Item.remove({})
    .then(() => db.Item.collection.insertMany(itemSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });
