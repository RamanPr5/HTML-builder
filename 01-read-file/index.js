const fs = require("fs");
const path = require("node:path");

const stream = fs.createReadStream(path.resolve("01-read-file/text.txt"), "utf-8");
// console.log(path.resolve("01-read-file/text.txt"))
let data = "";
stream.on("data", (chunk) => (data += chunk));
stream.on("end", () => console.log(data));

