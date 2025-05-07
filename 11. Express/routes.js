const express = require ('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Welcome to Our Home Page");
})

app.get('/products',(req,res)=>{
    const products = [
        {
            id:1,
            label:"Ice Cream"
        },
        {
            id:2,
            label:"Strawberry Shake"
        },
        {
            id:3,
            label:"Biryani"
        }
    ]
    res.json(products);
});

app.get('/products/:id',(req,res)=>{
    console.log("req.params",req.params);
    const productId = parseInt(req.params.id);
    const products = [
        {
            id:1,
            label:"Ice Cream"
        },
        {
            id:2,
            label:"Strawberry Shake"
        },
        {
            id:3,
            label:"Biryani"
        }
    ]
    const getSingleProduct = products.find(product=>product.id===productId);
    if(getSingleProduct){
        res.json(getSingleProduct);
    }
    else{
        res.status(404).send("Product not found please check with another id");
    }

})



port = 3000;
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})