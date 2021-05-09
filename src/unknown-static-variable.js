const configFileName = "hello";
const config = require(`../configs/${configFileName}.json`);

console.log(config.world);
