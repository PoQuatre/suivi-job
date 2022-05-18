const mongoose = require('mongoose');

const User = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  jobApplications: [{ type: mongoose.Types.ObjectId, ref: 'JobApplication' }],
});

module.exports = mongoose.model('User', UserModel);
