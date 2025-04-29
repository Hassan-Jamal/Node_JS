const fs = require("fs");
const path = require ("path");

const dataFolder = path.join(__dirname , "data");

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("data folder Created");
}

const filePath = path.join(dataFolder, "example.txt");
fs.writeFileSync(filePath,"Hello Node js ");
console.log("File Created Successfully");

const readContentFromFile = fs.readFileSync(filePath,"utf8");
console.log("file Content" , readContentFromFile);

fs.appendFileSync(filePath, "\nThis is new Text added to the File.");
console.log("New Content added.");

//async way of creating the file
const asyncFilePath = path.join(dataFolder, "async-example.txt");
fs.writeFile(asyncFilePath, "Hello, Async node js", (err) => {
  if (err) throw err;
  console.log("Async file is created successfully");

  fs.readFile(asyncFilePath, "utf8", (err, data) => {
    if (err) throw err;
    console.log("Async file content:", data);

    fs.appendFile(asyncFilePath, "\nThis ia another line added", (err) => {
      if (err) throw err;
      console.log("New line added to async file");

      fs.readFile(asyncFilePath, "utf8", (err, updatedData) => {
        if (err) throw err;
        console.log("Updated file content", updatedData);
      });
    });
  });
});