// Simple Example 

let promise = new Promise((resolve, reject)=> {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

promise.then(x => {
  console.log(x);
}).catch((x)=> {
  console.log(`Something has ${x}!`);
});


// Little more complex
const userActive = true; 

function watchingVideo() {
  return new Promise((resolve, reject) => {
    if (userActive) {
      console.log("User is logged in");
      setTimeout(() => {
        resolve("User is still logged in!");
        return promise;
      }, 2000);
    } else {
      reject("User is NOT active.");
    }
  });
}

watchingVideo().then((status)=>{
  console.log(status);
}).catch(x => {
  console.log(s);
}).then(() => {
  console.log("Now we are finished.")
});