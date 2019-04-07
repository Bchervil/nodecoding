const fetch = require('node-fetch');

const url = 'https://jsonplaceholder.typicode.com/posts';

module.exports = {
  // get all posts and set them in res.locals.posts
  index(req, res, next) {
    fetch(url)
      .then(
        data => data.json()
      )
      .then(
        (posts) => {
          res.locals.posts = posts;
          next();
        }
      );
  },
};
