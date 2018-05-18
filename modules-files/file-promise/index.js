const file = require('./module');

const fs = require('fs');

file
    .read('data.txt')
    .then(text => text.toUpperCase())
    .then(data => file.write('./upper-data.txt', data))
    .then(filename => console.log(`Создан файл ${filename}`))
    .catch(error => console.error(error))
;

