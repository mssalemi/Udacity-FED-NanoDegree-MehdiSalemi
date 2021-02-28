console.log("Start");

// Simulate how to get data back from Server
function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log("Now we have the data!");
    callback({userEmail: email});
  }, 2000);
}

function getUserVideos(email, callback) {
  setTimeout(()=> {
    callback(["v1", "v2", "v3"]);
  }, 2000);
}

const user = loginUser("mehdi.salemi@gmail.com", "12345", (user) => {
  console.log(user);
  const video = getUserVideos(user.email, (videos)=> {
    console.log(videos);
  })
});

// You can keep stacking, it just get into a wierd nested structure 
// 'callback' hell 


console.log("End");