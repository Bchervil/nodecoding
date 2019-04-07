module.exports = {
  // catch and show error 404
  show404(err, req, res) {
    res.sendStatus(404);
  },

  // catch and show error 406
  show406(err, req, res) {
    res.sendStatus(406);
  },

  // pass all locals posts to posts and render to post-index
  showPosts(req, res) {
    res.render('posts', {
      posts: res.locals.posts,
    });
  },

  showAboutme(req, res) {
    res.render('aboutme');
  },
};
