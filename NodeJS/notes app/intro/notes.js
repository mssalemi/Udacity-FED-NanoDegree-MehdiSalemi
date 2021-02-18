const fs = require("fs");
const chalk = require('chalk');

const getNotes = function() {
  return "Your Notes....";
}

const addNotes = (title, body) => {
  const notes = loadNotes();
  console.log(notes);

  const duplicateNotes = () => notes.filter(note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log("note added");
  } else {
    console.log("note title taken!");
  }
}


const removeNote = function(title) {
  console.log("Removing Notes with title - " +title);
  //LOAD NOTES 
  const notes = loadNotes();
  // use array filter method to move matching note 
  let filterOut = notes.filter(function(note) {
    return note.title != title;
  });

  if (filterOut.length == notes.length) {
    console.log(chalk.red(`NOTE WITH TITLE '${title}', is not found!`));
  } else {
    console.log(chalk.green(`NOTE WITH TITLE ${title}, has been removed`));
  }
  // Save newely created array 
  saveNotes(filterOut);
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
}

const listNote = () => {
  console.log("Called List Note Funciton in notes.js");
  const notes = loadNotes();

  notes.forEach((note) => {
    console.log(note.title);
  })

}

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNote: removeNote, 
  listNote: listNote
};