const promise = new Promise((resolve, reject)=> {
  setTimeout(() => {
    resolve("The function has sucessfully completed.");
  }, 2000);
});


promise.then((x) => {
  console.log(x);
})