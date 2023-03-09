const express = require("express");
const app = express();
const http = require("http").Server(app);
const helmet = require("helmet");
const cors = require("cors");
const routes = require("./routes/routes");
const db = require("./constants/db");
const auth = require("./middleware/auth");
const clevels = require("./constants/createLevels");
const dotenv = require("dotenv");
const beforelogin = require("./routes/beforelogin");
app.use(helmet());
app.use(cors());
app.use(express.json());
app.set(dotenv.config())
app.use('/api/v1/auth',auth);
app.use('/api/v1/auth',routes);
app.use('/api/v1/noAuth',beforelogin);
app.get('/',(req,res)=>{
    // console.log("Backend is running");
    res.send({message:"API is working"});
    // console.log("env",process.env.TOKEN_SECRET);
})
http.listen(4000,(req,res)=>{
    console.log("Server is running");
});