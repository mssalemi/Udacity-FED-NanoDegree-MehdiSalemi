setTimeout(() => {
  console.log("setTimeout function called");
}, 2000);

// ASYNC PROMISE 
// Native to JS
// Special FUnction that either satisfy (resolve) or fail (reject) to execute a task and then execute
// the corresponding actions 
// usually resole = data, 
let promise = new Promise((resolve, reject) => {
  // Do something
  if (true) { // when everything goes good 
    resolve("The stuff has worked!");
  } else { // when error occurs 
    reject(Error("It broke."));
  }
}); 

// Example of async function in JS
// mark a function as 'aysnc' with the keyword 
// then u have access to the keywords await, try, catch 

// Try and Catch 
// Mimic the Promise Function 
// If and Else are replaced with Try and Catch 
// Await is used to get required data from other places and will wait until data is recieved 
// Pair with Web API's to unleash the dynamical power of front end 

