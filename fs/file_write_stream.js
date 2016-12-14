var fs = require('fs');
var grains = ['wheat','rice','oats'];
var options = {
    encoding:'utf8',
    flag:'w'
};
//创建一个Writable对象
var fileWriteStream = fs.createWriteStream("grains.txt",options);
fileWriteStream.on("close",function () {
    console.log("File Closed.");
});
while(grains.length) {
    var data = grains.pop() + " ";
    //写入数据
    fileWriteStream.write(data);
    console.log("Wrote: %s",data);
}
//end关闭流，并触发close事件
fileWriteStream.end();