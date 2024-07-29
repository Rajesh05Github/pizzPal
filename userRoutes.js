const express=require("express")
const uRoutes=express.Router()
const userModal=require("../Modal/UserModa")
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')('sk_test_51P5WwbSGhIaqonlAlPxDmZCxiibppcYAvKgF82oFbXPZ8qehw4UtbQbSR5R2geWkCLNb2Xp5MiTTh0Kc9Gs78eWu00zRbgKoFG');
uRoutes.post("/signup",async(req,res)=>{
    const data=req.body
    const newUser=await userModal.create({
        name:data.uname,
        email:data.uemail,
        passward:data.upassward
    })
    res.send(newUser)
})
uRoutes.post("/login",async(req,res)=>{
   const data=req.body;
   const findUse=await userModal.findOne({
    email:data.uemail,
    passward:data.upassward
   })
   if(findUse)
   {
   res.send(findUse)
   }
   else
   {
    res.status(404).json({message:"login Failed"})
   }
})
uRoutes.post("/order",async(req,res)=>{
    console.log("HI")
    const data=req.body
    try{
        const customer=await stripe.customers.create({
            email:data.token.email,
            source:data.token.id
        })
        // //const payment=await stripe.charges.create({
        //     amount:data.subtotal*100,
        //     currency:"inr",
        //     customer:customer.id,
        //     receipt_email:data.token.email
        // },{
        //     idempotencyKey:uuidv4()
        // })
        console.log(payment)
        if(customer){
            res.send("payment Success")
        }
        else{
            res.send("payment failed")
        }
    }
    catch(e){
    res.status(404).json({message:"somethin went wrong"})
    }
})
module.exports=uRoutes;