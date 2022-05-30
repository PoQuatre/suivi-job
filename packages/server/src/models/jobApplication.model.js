const mongoose = require('mongoose');

const JobApplicationSchema = new mongoose.Schema({
  ownerId: { type: mongoose.Types.ObjectId, ref: 'User' },
  state: {
    type: String,
    enum: ['waiting', 'denied', 'accepted', 'no-response'],
  },
  company: String,
  description: String,
  titleJob: String,
  linkOffer: String,
  address: String,
  contact: String,
  date: Date,
  typeJob: String,
  steps: [
    {
      stepType: {
        type: String,
        enum: ['Interview', 'Test'],
      },
      startDate: Date,
      endDate: Date,
      location: {
        locationType: String,
        details: String,
      },
    },
  ],
});

module.exports = mongoose.model('JobApplication', JobApplicationSchema);
