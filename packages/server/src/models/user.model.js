const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  jobApplications: [{ type: mongoose.Types.ObjectId, ref: 'JobApplication' }],
  advanced: Boolean,
});

module.exports = mongoose.model('User', UserSchema);
