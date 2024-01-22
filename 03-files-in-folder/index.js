const fs = require("fs");
const path = require("node:path");

  fs.readdir(path.resolve("03-files-in-folder/secret-folder"),  
    { withFileTypes: true }, 
    (err, files) => {
      
      files.forEach(file => { 
        if(file.isFile()) {
            const extension = path.extname(file.name);
            const fileName = path.basename(file.name, extension);
            const fileSize = fs.statSync(path.resolve(`03-files-in-folder/secret-folder/${file.name}`)).size;
        
            console.log(`${fileName} - ${extension.replace('.', '')} - ${fileSize}b`);
        };
      }) 
  }) 
