const router = require('express').Router();
const { validationResult, checkSchema } = require('express-validator');
const JobApplicationModel = require('../models/jobApplication.model');
const userModel = require('../models/user.model');

router.post(
  '/',
  checkSchema({
    ownerId: {
      isMongoId: true,
    },
    state: {
      isString: true,
    },
    company: {
      isString: true,
    },
    titleJob: {
      isString: true,
    },
    linkOffer: {
      isURL: true,
      optional: true,
    },
    address: {
      isString: true,
      optional: true,
    },
    contact: {
      isString: true,
      optional: true,
    },
    date: {
      isDate: true,
      toDate: true,
    },
    job: {
      isString: true,
      optional: true,
    },
    steps: {
      isArray: true,
      optional: true,
    },
    'steps.*': {
      isObject: true,
    },
    'steps.*.stepType': {
      isString: true,
    },
    'steps.*.startDate': {
      isDate: true,
      toDate: true,
    },
    'steps.*.endDate': {
      isDate: true,
      toDate: true,
      optional: true,
    },
    'steps.*.location': {
      isObject: true,
      optional: true,
    },
    'steps.*.location.locationType': {
      isString: true,
      optional: true,
    },
    'steps.*.location.details': {
      isString: true,
      optional: true,
    },
  }),
  (req, res) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized',
      });
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const body = req.body;
    const info = req.user;
    const id = info._id;
    const appl = '';

    JobApplicationModel.create({
      ...body,
      ownerId: req.user._id,
    })
      .then((application) => {
        userModel
          .findOneAndUpdate(id, { $push: { jobApplications: application._id } })
          .then((user) => {
            console.log(user);
            res.json(application);
          })
          .catch((err) => {
            res.status(500).send(err);
            console.log(err);
          });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },
);

router.get('/', (req, res) => {
  JobApplicationModel.find()
    .then((application) => {
      res.json(application);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.get('/', (req, res) => {
  JobApplicationModel.find()
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
