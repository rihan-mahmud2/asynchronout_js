const isResolved = true;

const promise = new Promise((resolve, reject) => {
  if (isResolved) {
    resolve("Resolved");
  } else {
    reject("Not fullfilled");
  }
});

console.log(promise);

promise
  .catch((e) => {
    console.log("Rejected");
    console.log(e);
  })
  .then((data) => {
    console.log(data);
  });

// promise implementation

// function wait(ms) {
//   const promise = new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
//   return promise;
// }

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(1000).then(() => {
  console.log("Done in 1000ms");
});
wait(2000).then(() => {
  console.log("Done in 2000ms");
});
wait(3000).then(() => {
  console.log("Done in 3000ms");
});

const get = (url) => Promise.resolve();

get(`users?userName=rihan`)
  .then((user) => {
    return get(`posts?userId=${user.id}`);
  })
  .then((posts) => {
    const latestPost = posts[0];
    return get(`comments?postId=${latestPost.id}`);
  })
  .then((comments) => {
    const latestComment = comments[0];
    return get(`user?commentId=${latestComment.id}`);
  })
  .then((user) => {
    console.log(user);
  })
  .catch((e) => {
    console.log("Error");
  });
