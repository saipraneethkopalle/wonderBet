const express = require("express");
const router = express.Router();
const matchController = require("../controller/matchController.js");
const { addWebsite } = require("../controller/websiteController.js");
router.post('/addMatch',matchController.addMatches)
router.post('/addWebsite',addWebsite)
router.get('/health',(req,res)=>{res.send({"message":"apis working fine"})})
module.exports = router;