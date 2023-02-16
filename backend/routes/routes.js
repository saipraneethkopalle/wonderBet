const express = require("express");
const router = express.Router();
router.get('/health',(req,res)=>{res.send({"message":"apis working fine"})})
module.exports = router;