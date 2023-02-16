const express = require("express");
const router = express.Router();
const matchController = require("../controller/matchController.js")
router.post('/addMatch',matchController.addMatches)
router.get('/health',(req,res)=>{res.send({"message":"apis working fine"})})
module.exports = router;