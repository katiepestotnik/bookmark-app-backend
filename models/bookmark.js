const { Schema, model } = require("mongoose");

const BookmarkSchema = new Schema({
    username: {type: String, required: true},
    title: String,
    url: String,
}, {timestamps: true});
const Bookmark = model("bookmark", BookmarkSchema);

module.exports = Bookmark;