const lodash = require('lodash');

const name = ["hassan","petrik","zsolt","Alaxender"];
const capitalize = lodash.map(name,lodash.capitalize);

console.log(capitalize);