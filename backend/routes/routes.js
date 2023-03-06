const express = require("express");
const router = express.Router();
const matchController = require("../controller/matchController");
const userController = require("../controller/userController");
const addWebsite =require("../controller/websiteController")
router.post('/addMatch',matchController.addMatches)
router.get('/getAllMatches',matchController.getAllMatches)
router.get('/changePassword',userController.changePassword)
router.post('/addUser',userController.addUser)
router.get('/getUsersByRole/:id',userController.getUserByRole)
router.post('/addWebsite',addWebsite.addWebsite)
router.get("/getAllWebsite",addWebsite.getAllWebsite)
router.post("/updateUserStatus",userController.updateUserStatus)
router.get("/getLevelDetails",userController.getLevelDetails);
router.get('/health',(req,res)=>{res.send({"message":"apis working fine"})})
module.exports = router;