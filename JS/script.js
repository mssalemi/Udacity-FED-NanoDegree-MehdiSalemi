// Iteration 
// ES6 Brings new Interable Protocol / Interface 


// New Loop = For Of loop
const names = ["Mehdi", "Bianca", "Aspen"];

// Normal Loop 
for (let i=0; i < names.length; i++) {
  console.log(`Index: ${i} - Value: ${names[i]}`);
}
// needs to keep track of tracker 
// has exit condition 

// New for.. of loop
for (let name of names) {
  console.log(name);
}

// Spread Operator ... 
// gives ability to expand or spread iterable objects into mutiple elements 
console.log(names);
console.log(...names);

// combine array with concat
let sports = ["Soccer", "Tennis", "Golf"];
console.log(names.concat(sports));

// combine array with spread operator 
console.log([...names, ...sports]);

// Rest Operator ... (same syntax) allows you to represent an indefinte amount of elements into array
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];

// fancy syntax for variable declarations 
const [total, subtotal, tax, ...items] = order;
console.log(`Total - ${total} \nTax - ${tax}\nItems - ${items}`);

// Variadic Functions 
// Functions that take in an indefinite number of arguments 
// EX - a sum function 

function sum (...nums) {
  let total = 0;
  for(const num of nums) {
    total += num;
  }
  console.log(total);
}

sum(1,2,3,4,5,6,7);
sum(9,90);
sum(13451,3467,34,84,2)