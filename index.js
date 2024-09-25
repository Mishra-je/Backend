const express = require("express");
const cors = require("cors");
const cookieParaser = require('cookie-parser');
require("dotenv").config();
const connectDb =require('./Config/db')
const router = require('./Routes')
const app = express();
app.use(cors({
  origin : process.env.FRONTEND_URL,
  credentials: true
}))
app.use(express.json())
app.use(cookieParaser())
app.use("/api",router)

app.listen(3000, () => {
    console.log("Listining on 3000 port");
  });