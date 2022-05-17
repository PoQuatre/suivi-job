const express = require('express');
const router = express.Router();
const JobApplicationModel = require('../models/jobApplication.model');

router.post('/', (req, res) => {
  const body = req.body;
  const info = req.user;
  console.log('INFO USER', info);
  console.log('INFO BODY', body);

  const newJobApplication = new JobApplicationModel(body);
  // newJobApplication.ownerID = req.user._id
  let dateStart = body.startDate;
  let dateEnd = body.endDate;

  newJobApplication
    .save()
    .then((resultat) => {
      res.json(resultat);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
