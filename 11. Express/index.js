const express = require ('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Hello Express");
});


port = 3000;
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
});