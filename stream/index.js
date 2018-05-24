const crypto = require('crypto');
const { Transform } = require('stream');
const fs = require('fs');
const hash = crypto.createHash('md5');

const input = fs.createReadStream('input.txt');
const output = fs.createWriteStream('output.txt');
const inputResult = input.pipe(hash);

inputResult.pipe(output);
inputResult.pipe(process.stdout);

// Не могу сделать, подскажите. Был бы пример.
// Методические материалы расстраивают. Минимум комментариев :(
class transform extends Transform {
    constructor(options) {
        super(options);
    }

    _transform(chunk, encoding, callback) {
        this.push(chunk);
        callback();
    }
}

let inputTransform = new transform();

inputTransform._transform(hash).pipe(output);