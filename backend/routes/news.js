const express=require("express")

const router=express.Router()

const {fetchCyberNews}=require("../services/newsService")

router.get("/",async(req,res)=>{

const news=await fetchCyberNews()

res.json(news)

})

module.exports=router