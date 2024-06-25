const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/mern-msg-board');

module.exports = db;