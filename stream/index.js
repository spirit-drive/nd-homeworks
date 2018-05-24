const crypto = require('crypto');
const fs = require('fs');
const hash = crypto.createHash('md5');

const input = fs.createReadStream('input.txt');
const output = fs.createWriteStream('output.txt');
const inputResult = input.pipe(hash);

inputResult.pipe(output);
inputResult.pipe(process.stdout);