const mongoose = require('mongoose');

const JobApplication = new mongoose.Schema({
  ownerId: { type: mongoose.Types.ObjectId, ref: 'User' },
  state: {
    type: String,
    enum: ['waiting', 'denied', 'accepted', 'no-respond'],
  },
  company: String,
  description: String,
  linkOffer: String,
  address: String,
  contact: String,
  date: Date,
  job: String,
  steps: [
    {
      type: String,
      startDate: Date,
      endDate: Date,
      location: {
        locationType: String,
        details: String,
      },
    },
  ],
});

module.exports = mongoose.model('JobApplication', JobApplication);
