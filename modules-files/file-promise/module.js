const fs = require('fs');

let file = {
    read: path => new Promise((done, fail) => fs.readFile(path, 'utf8', (err, data) => err ? fail(err) : done(data))),
    write: (path, data) => new Promise((done, fail) => fs.writeFile(path, data, 'utf8', err => err ? fail(err) : done(path))),
};

module.exports = file;