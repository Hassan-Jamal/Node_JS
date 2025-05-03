const EventEmitter = require("events");
const emitter = new EventEmitter ();

emitter.on('greet',(name)=>console.log(`Hi, ${name} Hope you are Doing Well.`));
emitter.emit("greet","Hassan Jamal");