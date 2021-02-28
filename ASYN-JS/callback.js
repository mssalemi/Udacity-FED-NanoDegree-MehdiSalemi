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

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000)
}

getPost();

createPost(
  {title: "Post 3", body: "This is Post 3!"}, getPost
);