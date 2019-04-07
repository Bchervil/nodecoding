const express = require('express');

// importing controllers

const aboutmeController = require('../controllers/aboutmeController');

const routes = express.Router();

routes.route('/')
  .get(aboutmeController.index);

module.exports = routes;
