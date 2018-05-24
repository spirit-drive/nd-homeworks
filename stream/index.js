const crypto = require('crypto');
const fs = require('fs');
const hash = crypto.createHash('md5');

const input = fs.createReadStream('input.txt');
const output = fs.createWriteStream('output.txt');

const input2 = fs.createReadStream('output.txt');

const inputResult = input.pipe(hash);

inputResult.pipe(output).pipe(input2).pipe(process.stdout);