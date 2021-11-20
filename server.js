require('dotenv').config();
const { PORT = 3000 } = process.env;
const express = require('express');
const app = express();
const mongoose = require("./db/db");
const cors = require("cors");
const morgan = require("morgan");
const AuthRouter = require('./controllers/user');
const BookmarkRouter = require('./controllers/bookmark');
//Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());




//routers

app.get('/', (req, res) => {
  res.json(req.payload);
});
app.use('/auth', AuthRouter)
app.use('/bookmark', BookmarkRouter);


app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));