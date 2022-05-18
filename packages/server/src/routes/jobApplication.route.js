const express = require('express');
const router = express.Router();
const JobApplicationModel = require('../models/jobApplication.model');

router.post('/', (req, res) => {
  const body = req.body;
  const info = req.user;
  console.log('INFO USER', info);
  console.log('INFO BODY', body);

  JobApplicationModel.create(body)
    .then((application) => {
      res.json(application);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const body = req.body;
  JobApplicationModel.findByIdAndUpdate(id, { $set: body })
    .then((application) => {
      res.json(application);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.delete('/:id', async function (req, res) {
  const id = req.params.id;
  try {
    await JobApplicationModel.deleteOne({ _id: id });
    res.json({ message: 'The application has been deleted' });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
