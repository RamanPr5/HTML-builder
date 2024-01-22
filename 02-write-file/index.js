
const fs = require("fs");
const path = require("node:path");
const output = fs.createWriteStream(path.resolve("02-write-file/text.txt"), "utf-8");
console.log('Write here:')
process.stdin.on("data", (chunk) => {
    if(chunk.toString().trim() == "exit"){
        console.log('See you soon')
        process.exit();
    }
    output.write(chunk);
});


