const fs = require('fs');

function person(name, callbackFn){
    console.log(`Assalam-o-Alikum ${name}`);
    callbackFn();
}

function greet(){
    console.log("Hope you are good!");
}

person("Hassan", greet);

fs.readFile("input.txt" , "utf8" , ((err,data)=>{
    if(err){
        console.error("Error Occur");
    }
    console.log("Data: ",data);
}));
