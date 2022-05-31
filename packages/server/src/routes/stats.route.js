const router = require('express').Router();
const { validationResult, checkSchema, param } = require('express-validator');
const JobApplicationModel = require('../models/jobApplication.model');
const userModel = require('../models/user.model');

router.get('/', async (req, res) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized',
    });
  }

  const id = req.user._id;
  try {
    const total = await JobApplicationModel.count({
      ownerId: id,
    });
    const waiting = await JobApplicationModel.count({
      ownerId: id,
      state: 'waiting',
    });
    const waitingPCT = (waiting * 100) / total;
    const noResponse = await JobApplicationModel.count({
      ownerId: id,
      state: 'no-response',
    });
    const noResponsePCT = (noResponse * 100) / total;
    const denied = await JobApplicationModel.count({
      ownerId: id,
      state: 'denied',
    });
    const deniedPCT = (denied * 100) / total;
    const accepted = await JobApplicationModel.count({
      ownerId: id,
      state: 'accepted',
    });
    const acceptedPCT = (accepted * 100) / total;
    const finished = accepted + noResponse + denied;
    const finishedPCT = (finished * 100) / total;

    res.json({
      total,
      waiting,
      waitingPCT,
      noResponse,
      noResponsePCT,
      denied,
      deniedPCT,
      accepted,
      acceptedPCT,
      finished,
      finishedPCT,
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
