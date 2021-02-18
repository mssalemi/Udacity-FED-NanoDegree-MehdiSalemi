const fs = require("fs");

/* PRACTICE 
const book = {
  title: "Ego is the Enemy", 
  author: "Ryan Holiday"
}

const bookString = JSON.stringify(book);

console.log(bookString);

const parsedData = JSON.parse(bookString);
console.log(parsedData.title);

const dataBuffer = fs.writeFileSync("1-json.json", bookString);
console.log(dataBuffer.toString());
*/

// Work with JSON + file system
// Load + Parse JSON data

// Loads in Data from File  
const dataBuffer = fs.readFileSync("1-json.json"); 
// Its unreadable 

// will convert data fron unreadable buffer to a string 
const dataJSON = dataBuffer.toString();

const user = JSON.parse(dataJSON);
console.log(user);

// Alter the object - name and age 
user.name = "Mehdi";
user.age = 30;
console.log(user);

// Then stringify the object nad override the original data
const userBuffer = JSON.stringify(user);
fs.writeFileSync("1-json.json", userBuffer);

// TEST 

