function sum (a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function divide(a,b){
    if(b==0){
        throw new Error("Divide by zero is not defined");
    }
    return a/b;
}

module.exports={sum,sub,divide};