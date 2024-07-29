const express=require("express")
const router=express.Router()
const  pizzaModal=require("../Modal/pizzaModal.js")
router.get("/Allpizza",async(req,res)=>{
    try{
    const data=await pizzaModal.find({});
    // console.log(data);
    res.send(data);
    }
    catch(e)
    {
        res.send({message:"Error"})
    }
})
module.exports=router