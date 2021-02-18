// ASIDE 
// Arrow Function 
const square = function (x) {
  return x*x;
} 

console.log(square(2));

const squareArrow = (x) => {
  return x*x;
}

console.log(squareArrow(2));

// hidden features

// SHOREHAND SYNATX 
const squareArrow2 = (x) => x*x;
console.log(squareArrow2(2));

// Another Usefull 
const event = {
  name: "Birthday Party",
  printGuestList: function() {
    console.log("Guest List for " +this.name)
  }
}
event.printGuestList();

// can be turned into this
// THIS doesn't work with arrow function
// dont really use if u want to access 'this'
const eventArrow = {
  name: "BDay Party",
  guestList: ["Mehdi", "Bianca", "Aspen"],
  printGuestList() {
    console.log(`Guest List for ${this.name}`)
    this.guestList.forEach(function(guest) {
      console.log(guest);
    })
  }
}
eventArrow.printGuestList();


// REFACTORING with Arrow Functions

// Arrow Function Challenge - 
// 1 - define getTasksToDO Method 
// 2 - user filter to return just the incomplete tasks 
// Test your work running the script 
const chalk = require('chalk');

const tasks = {
  tasks: [{
    text: 'Grocery shopping',
    completed: true
  }, 
  {
    text: 'Clean yard',
    completed: false
  }, 
  {
    text: 'Film course',
    completed: false
  }], 
  getTasksToDo() {
    let taskToDo = [];
    console.log(chalk.green("getTaskToDo() is called!"));
    this.tasks.forEach(function (task) {
      if (!task.completed) {
        console.log(task);
        taskToDo.push(task);
      }
    });
    return taskToDo;
  }
}

console.log(tasks.getTasksToDo());