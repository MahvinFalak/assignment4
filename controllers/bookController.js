const bookModel = require("../models/bookModel");

const showAddF=(req,res)=>{
    res.render("add")
};


const showUpdateF=async(req,res)=>{
    const {id}=req.params;
    try {
        let data=await bookModel.findOne({_id:id});
        return res.render("update",{data:data});
        
    } catch (error) {
        console.log(error);
    }
    res.render("update");
};


const saveF=async(req,res)=>{

    const bodyData=req.body;
    const book=new bookModel(bodyData);

    try {
        await book.save();
     res.redirect("/friends");
      
    } catch (error) {
        console.log(error);
    }
};


const deleteF=async(req,res)=>{

    const {id}=req.params;
    try {
        await bookModel.findByIdAndRemove({_id:id})
        res.redirect("/friends")
    } catch (error) {
        console.log(error);
    }    
};


const getAllF=async(req,res)=>{
    try {
        let books = await bookModel.find({}); 
        res.render("friends",{books:books});
    } catch (error) {
        console.log(error);
    }
};


const updateF=async(req,res)=>{
    try {
        const bodyData=req.body;
        const {id}=req.params;
        await bookModel.findByIdAndUpdate({_id:id},{$set:bodyData});
        res.redirect("/friends"); 
        
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    getAllF,
    updateF,
    deleteF,
    saveF,
    showAddF,
    showUpdateF
};