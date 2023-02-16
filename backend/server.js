const express = require("express");
const app = express();
const http = require("http").Server(app);
const helmet = require("helmet");
const cors = require("cors");
const routes = require("./routes/routes");
const db = require("./constants/db");
const auth = require("./middleware/auth");
const dotenv = require("dotenv");
app.use(helmet());
app.use(cors());
app.use(express.json());
app.set(dotenv.config())
app.use('/api/v1',auth);
app.use('/api/v1',routes);
app.get('/',(req,res)=>{
    // console.log("Backend is running");
    res.send({message:"API is working"});
    // console.log("env",process.env.TOKEN_SECRET);
})
http.listen(3000,(req,res)=>{
    console.log("Server is running");
});