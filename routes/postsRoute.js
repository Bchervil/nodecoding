const express = require('express');

// importing controllers

const postsController = require('../controllers/postsController');
const viewController = require('../controllers/viewController');

const routes = express.Router();

routes.route('/')
  .get(postsController.index, viewController.showPosts);

module.exports = routes;
