var fs = require('fs');

var filePath = fs.readFileSync(process.argv[2]);

var result = filePath.toString().split('\n').length - 1;
console.log(result);