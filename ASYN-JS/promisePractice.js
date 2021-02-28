// PROMISE 
// Elegant way to handle async data 

// CALLBACK 
// Practice Mimic Blog Post on Server
const posts = [
  {title: "Post 1", body: "This is Post 1!"}, 
  {title: "Post 2", body: "This is Post 2!"}
];

function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}<li>`;
    });
    document.getElementById("display_output").innerHTML = output;
    console.log("Getting Post");
  }, 2000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    posts.push(post);


    const error = false; 
    if (!error) {
      resolve();
    } else {
      reject("ERROR SOMETHING WENT WRONG");
    }
    }, 2000)
  });
}

createPost({title: "Post 3", body: "This is Post 3!"})
  .then(getPost);