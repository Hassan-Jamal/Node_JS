const express = require("express");
const app = express();

app.set("view engine" ,"ejs");

app.get('/',(req,res)=>{
    res.send("HomePage");
});

app.post('api/data',(req,res)=>{
    res.json({
        message:"Data Received",
        data:req.body
    })
})

app.use((req,res,err,next)=>{
    console.log(err.stack);
    res.status(500).send("Something Went Wrong");
})

port =3000;
app.listen(port,()=>{
    console.log(`Server is Running at port ${port}`);
})