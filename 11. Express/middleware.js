const express = require('express');
const app = express();

const MyFirstMiddleware = (req,res,next)=>{
    console.log("This First Middleware will run on every Request");
    next();
}

app.use(MyFirstMiddleware);

app.get('/',(req,res)=>{
    res.send("Home Page");
})

app.get('/about',(req,res)=>{
    res.send("About Page");
})

port = 3000;
app.listen(port,()=>{
    console.log(`Server is Running at ${port}`);
})