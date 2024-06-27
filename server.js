const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const cookieParser = require("cookie-parser");



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());