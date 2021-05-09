const configFileName = process.env.CONFIG_FILENAME
const config = require(`../configs/${configFileName}.json`);

console.log(config.world);
