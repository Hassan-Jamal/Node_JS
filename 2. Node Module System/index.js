//module.exports()------Make a part of a file available to other files.
//requires()------------Bring in functionality from another file (module).

const FirstModule = require("./FirstModule.js");

console.log(FirstModule.sum(2,3));
console.log(FirstModule.sub(2,3));
console.log(FirstModule.divide(9,7));


//Module Wrapper Function
// (function(exports,require,module,__filename,__dirname){
    //Your Code goes here
// });