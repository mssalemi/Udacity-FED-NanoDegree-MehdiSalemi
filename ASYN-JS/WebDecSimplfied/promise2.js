const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1  Recorded");
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("Video 2  Recorded");
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3  Recorded");
});


recordVideoOne.then((status)=>{
  setTimeout(() => {
    console.log(status);
  }, 2500);
});

/*
Promise.all([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then(messages => {
  console.log(messages);
});
*/


