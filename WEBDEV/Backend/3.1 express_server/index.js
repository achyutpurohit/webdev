import express from "express";

const app=express();
const port=3000;

app.get("/",(req,res)=>{
    res.send("<h1>Im gonna live forever</h1>");
});

app.get("/about",(req,res)=>{
    res.send("<h1>Im achyut purohit</h1>");
});

app.get("/contact",(req,res)=>{
    res.send("<h1>9535822003</h1>");
})

app.listen(port,() =>{
    console.log(`Server running on port ${port}` );
});