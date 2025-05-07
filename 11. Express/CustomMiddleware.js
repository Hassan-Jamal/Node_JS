const express = require("express");
const app = express();

const RequestTimeStampLogger = (req,res,next)=>{
    const timeStamp =new Date().toISOString();
    console.log(`${timeStamp} from ${req.method} to ${req.url}`);
    next();
}

app.use(RequestTimeStampLogger);

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

