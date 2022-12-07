const express=require('express');
const { getAllF,showAddF, saveF, deleteF, showUpdateF, updateF } = require('../controllers/bookController');
const router=express.Router();

router.get("/",(req,res)=>{
    res.render("index")
})
router.get("/friends",getAllF); 
router.get("/add",showAddF);
router.post("/add",saveF);
router.get("/deleteF/:id",deleteF);
router.get("/updateF/:id",showUpdateF);
router.post("/updateF/:id",updateF);
module.exports=router;