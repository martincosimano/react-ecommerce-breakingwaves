const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config( { path: "./config/config.env"});

connectDB();

const app = express();

app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => `Server running on port ${PORT}`);