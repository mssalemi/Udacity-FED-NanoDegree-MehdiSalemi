const add = require("./utils.js"); 
const mult = require("./multiply.js");
const notes = require("./notes");

const name = "Mehdi";

console.log(name);

let sum = add(3,6);
let times = mult(3,6);

// KNOW - each file has its own scope with variables 
console.log(sum);
console.log(times);

// now load in our NPM package
const validator = require("validator");

// use some of its functions 
console.log(validator.isEmail("andrew@example.com"));


// CHALLENGE - USE NPM LIBRRARY = CHALK 
const chalk = require('chalk');
 
console.log(chalk.green('Success!'));
console.log(chalk.white.bgGreen.bold('Hello world!'));


// Global NPM Packages - everything til now are local 
// nodemon command 


// Getting Input from Users
const yargs = require("yargs");
// const { require } = require("yargs");
yargs.version("1.1.0");

// add, remove, list your notes 
// ADD COMMAND 
yargs.command({
  command: "add",
  describe: "Add a new note.",
  builder: {
    title: {
      describe: "Note Title", 
      demandOption: true, 
      type: "string"
    }, 
    body: {
      describe: "Note Body",
      demandOption: true, 
      type: "string"
    }
  },
  handler: function(argv) {
    notes.addNotes(argv.title, argv.body);
  }
});

// REMOVE COMMANDE 
yargs.command({
  command: "remove",
  describe: "Remove a note.",
  builder: {
    title: {
      describe: "Note Title", 
      demandOption: true, 
      type: "string"
    }
  },
  handler: function(argv) {
    notes.removeNote(argv.title);
  }
});

// LIST COMMANGE 
yargs.command({
  command: "list",
  describe: "List a note.",
  builder: {},
  handler: function() {
    console.log("Listing Notes - ")
    notes.listNote;
  }
});

// READ COMMAND 
yargs.command({
  command: "read",
  describe: "Read a note.",
  handler: function() {
    console.log("Reading a note!")
  }
});

console.log(yargs.argv);
// yargs provides strings value of object '


// NOW WHAT TO DO WITH DATA 
