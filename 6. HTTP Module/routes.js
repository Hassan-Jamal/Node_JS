const http = require('http');

const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url=='/'){
        res.writeHead(200,{'Content-Type':'Text/plain'});
        res.end("Home Page");
    }
    else if (url=='/about'){
        res.writeHead(200,{'Content-Type':'Text/Plain'});
        res.end("About US");
    }
    else{
        res.writeHead(404,{'Content-Type':'Text/Plain'});
        res.write("Not Found.");
        res.end();
    }


});

const port =3000;
server.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
});