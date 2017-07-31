var fs = require('fs');

fs.readFile(process.argv[2], function(err, success){
    var lines = success.toString().split('\n').length - 1;
    console.log(lines);
})