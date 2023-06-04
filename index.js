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

Promise.resolve();
Promise.reject();
