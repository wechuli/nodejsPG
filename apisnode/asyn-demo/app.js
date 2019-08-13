console.log("Before");

const user = getUser(1, user => {
  console.log("User", user);
});

console.log("After");

function getUser(id, callback) {
  setTimeout(() => {
    //Asynchronous or non-blocking function
    console.log("Reading a user from a database");
    callback({ id: id, githubUsername: "Paul" });
  }, 2000);
}

function getRepos(username, callback) {
  setTimeout(() => {
    callback({ user: username, repos: ["repo1", "repo1", "repo3"] });
  }, 2000);
}

const githubUser = getRepos("Wechuli", userRepos => {
  console.log(userRepos);
});
