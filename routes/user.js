const express=require("express");

const userController=require("../controllers/user")
const authMiddleware=require("../utils/authMiddeleware");
const CartDetails = require("./cart");

const router=express.Router();

router.route("/cart").post(authMiddleware.authenticateToken,CartDetails);
router.get("/users",authMiddleware.authenticateToken,userController.getUsers);
router.route("/cartget").get()
module.exports=router;