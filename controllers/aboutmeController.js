const aboutmeDB = require('../models/aboutmeDB');

module.exports = {
  index(req, res) {
    const data = aboutmeDB.find(req.query);
    res.status(200).json(data);
  },
};
