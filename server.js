require('dotenv').config();
const { PORT = 3000 } = process.env;
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

//test database
const MONGODB_URL = 'mongodb+srv://sei-gia:seirocks@sei.qzqfn.mongodb.net/testBookmark?retryWrites=true&w=majority'; 

mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
mongoose.connection
  .on("open", () => console.log("Connected for Bookmark"))
  .on("close", () => console.log("Disconnected fro Bookmark"))
  .on("error", (error) => console.log(error));

  
const BookmarkSchema = new mongoose.Schema({
    title: String,
    url: String,
});
const Bookmark = mongoose.model("Bookmark", BookmarkSchema);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


app.get('/', (req, res) => {
    res.send('hello world!!!!! Changes');
});
//Index
app.get("/bookmark", async (req, res) => {
    try {
      res.json(await Bookmark.find({}));
    } catch (error) {
      res.status(400).json(error);
    }
  });
//Create
app.post("/bookmark", async (req, res) => {
    try {
      res.json(await Bookmark.create(req.body));
    } catch (error) {
      res.status(400).json(error);
    }
  });
//update
app.put("/bookmark/:id", async (req, res) => {
    try {
      res.json(
        await Bookmark.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      res.status(400).json(error);
    }
  });
//delete
app.delete("/bookmark/:id", async (req, res) => {
    try {
      res.json(await Bookmark.findByIdAndRemove(req.params.id));
    } catch (error) {
      res.status(400).json(error);
    }
  });

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));