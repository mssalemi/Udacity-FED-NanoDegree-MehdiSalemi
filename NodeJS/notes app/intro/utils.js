console.log("utils.js");

// KNOW - each file has its own scope with variables 
const king = "THE KING";

const add = function (a,b) {
  console.log("ADD FUNCTION CALLED");
  return a+b;
}

module.exports = add;