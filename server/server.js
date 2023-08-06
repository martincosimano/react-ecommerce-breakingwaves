const express = require("express");
const path = require("path");
const dotenv = require('dotenv').config();
const bodyParser = require("body-parser");
const cors = require('cors');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(cors({
    origin: 'https://breakingwaves.vercel.app'
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));

app.listen(PORT, () => `Server running on port ${PORT}`);