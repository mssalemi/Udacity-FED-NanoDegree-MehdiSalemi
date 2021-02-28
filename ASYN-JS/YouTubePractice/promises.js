// simplifies callbacks but with error handling

// promise = object that gievs back a result or failure of async operation 

const promise = new Promise((resolve, reject) => {
  setTimeout(()=> {
    console.log("Got the user!");
    //resolve({user:"ed"});
    reject(new Error("User not logged in!"));
  }, 2000)
});

// the .then() keyword has theinformation 
promise.then(user => {
  console.log(user);
}).catch(error => {
  console.log(error);
});



// Now refector Code into Promise Synatax from asyn.js
function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("We have the data");
      resolve({userEmail: email});
    });
  });
}

function getUserVideos(email) {
  return new Promise((resolve, response)=>{
    setTimeout(()=> {
      console.log("We have the videos");
        resolve(["v1", "v2", "v3"]);
    }, 2000);
  })
}

loginUser("ed", "bumba")
.then(user => {
  console.log(user);
  getUserVideos(user.email);
});

