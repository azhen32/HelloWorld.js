var fs = require('fs');
fd = fs.openSync("veggie.txt",'r');
var veggie = "";
do {
    var buf = new Buffer(5);
    var bytes = fs.readSync(fd,buf,null,5);
    console.log("read %dbytes",bytes);
    veggie += buf.toString();
} while(bytes > 0);
fs.closeSync(fd);
console.log("Veggie: " + veggie);