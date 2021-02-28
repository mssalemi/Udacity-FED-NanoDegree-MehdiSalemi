const path = require("path");
const express = require("express");
//const bodyParser = require('body-parser')
//const cors = require('cors');

console.log(__dirname);

const app = express();
const publicDirectory = path.join(__dirname, "../public");
console.log(publicDirectory);
app.use(express.static(publicDirectory));
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());
//app.use(cors());

app.get('', (req, res) => {
  console.log("Hello Express");
  res.send(`<h1>Express Page</h1>`);
});

const port = 3000;
function listening(){
  console.log("server running"); 
  console.log(`running on localhost: ${port}`);
}

const server = app.listen(port, listening);
