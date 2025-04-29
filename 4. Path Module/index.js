const path = require("path");

console.log("Directory Name: ", path.dirname(__filename));
console.log("Filename is", path.basename(__filename));
console.log("Extension is ", path.extname(__filename));

const joinPath = path.join("/user", "documents", "node", "projects");
console.log("Path joined ", joinPath);

const resolvePath = path.resolve("user", "documents", "node", "project");
console.log("Resolve path:", resolvePath);

const normalizePath = path.normalize("/user/.documents/../node/projects");
console.log("normalizePath", normalizePath);
