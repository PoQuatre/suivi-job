const router = require('express').Router();
const JobApplicationModel = require('../models/jobApplication.model');

router.post('/', (req, res) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized',
    });
  }

  const body = req.body;
  const info = req.user;

  JobApplicationModel.create({
    ...body,
    ownerId: req.user._id,
  })
    .then((application) => {
      res.json(application);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.put('/:id', (req, res) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized',
    });
  }

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
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized',
    });
  }

  const id = req.params.id;
  try {
    await JobApplicationModel.deleteOne({ _id: id });
    res.json({ message: 'The application has been deleted' });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
