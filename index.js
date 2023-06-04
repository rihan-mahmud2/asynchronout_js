/**
 * find user by userName
 * find posts by postId
 * find latest post
 * find comments by postId
 * find latest comment
 * find userName of last commented user
 *
 *
 * users?{userName}
 * posts?{userId}
 * comments?{postId}
 * users?{userName}
 *
 *
 */

//callback hell

function get(path, cb) {
  const data = {};
  cb(data);
}

function getUserNameFromComment(userName) {
  get(`/users?${userName}`, (user) => {
    get(`/posts?userId${user?.id}`, (posts) => {
      get(`/comments?postId=${posts[0]?.id}`, (comments) => {
        get(`/users?commentId=${comments[0].id}`, (user) => {
          console.log(user);
        });
      });
    });
  });
}

getUserNameFromComment("rihan");
