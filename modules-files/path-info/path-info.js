const fs = require('fs');

let readFile = (path, data, callback) => {
    fs.readFile(path, 'utf8', (err, data) => {
        callback(err, {
            type: 'file',
            path,
            content: data,
        });
    })
};

let pathInfo = (path, callback) => {
    fs.readdir(path, 'utf8', (err, data) => {
        err ?
            readFile(path, data, callback) :
            callback(err, {
                type: 'directory',
                path,
                childs: data,
            });

    })
};

module.exports = pathInfo;