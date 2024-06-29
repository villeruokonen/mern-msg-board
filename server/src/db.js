const mongoose = require('mongoose');

const db = mongoose.connect(process.env.MONGODB_URI);

module.exports = db;