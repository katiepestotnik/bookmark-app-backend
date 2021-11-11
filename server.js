require('dotenv').config();
const { PORT = 3000 } = process.env;
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world!!!!! Changes');
});

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));