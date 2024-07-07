const mongoose = require('mongoose');

//mongoose.connect(process.env.MONGODB_URI || 'tbd');

module.exports = mongoose.connection;