const fs = require('fs');


let getArrayNamesFiles = path => {
    return new Promise((done, fail) => {
        fs.readdir(path, 'utf8', (err, data) => {
            err ?
                fail(err) :
                done(data);
        })
    })
};

let getFileContent = (path) => {
    return data => Promise.all(data.map(item => new Promise((done, fail) => {
            fs.readFile(`${path}${item}`, 'utf8', (err, data) => err ?
                fail(err) :
                done({name: item, content: data}));
        })
    ))
};

let readAll = path => {
    return getArrayNamesFiles(path)
        .then(getFileContent(path))
};

module.exports = readAll;