/*
  * @ Author: Aman Goyal
  * @ Information: App.js
*/

const express = require("express");
const dotenv = require("dotenv");
const sql = require('mysql');
const cors = require("cors");
const { connectToMysql } = require("./connection/SqlConnect");
dotenv.config();
const router = require('./routes/index');
const app = express();
app.use(express.json());

//Cors Origin
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//sql connection
connectToMysql().then(() => {
  console.log('Connect to mysql...');
}).catch((err) => { console.log('Error to connect my sql...', err) });

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);
app.options("*", cors());

// router
app.use('/api', router)

app.listen(process.env.PORT, process.env.HOSTNAME, () => {
  console.log(
    `Server running at http://${process.env.HOSTNAME}:${process.env.PORT}`
  );
});
