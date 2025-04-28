console.log("Node Module Wrapper Function");

console.log("__filename in wrapper explorer",__filename);
console.log("__dirname in wrapper explorer",__dirname);

function greet(name){
    console.log(`Hi How are you ${name} ?`);
}

module.exports={greet};