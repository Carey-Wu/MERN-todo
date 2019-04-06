//Dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Generate Schema
const itemSchema = new Schema({
    note: {type: String, required: true},
    author: {type: String, required: true},
    date: {type: Date, default: Date.now()}
})

const Item = mongoose.model("Item", itemSchema);

//Export

module.exports = Item;