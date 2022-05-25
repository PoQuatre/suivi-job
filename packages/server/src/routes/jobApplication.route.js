const router = require('express').Router();
const { validationResult, checkSchema, param } = require('express-validator');
const JobApplicationModel = require('../models/jobApplication.model');
const userModel = require('../models/user.model');

router.post(
  '/',
  checkSchema({
    state: {
      optional: true,
      isIn: {
        options: [['waiting', 'accepted', 'denied', 'no-response']],
      },
    },
    company: {
      isString: true,
    },
    titleJob: {
      isString: true,
    },
    linkOffer: {
      isURL: true,
      optional: {
        options: { checkFalsy: true },
      },
    },
    address: {
      isString: true,
      optional: {
        options: { checkFalsy: true },
      },
    },
    contact: {
      isString: true,
      optional: {
        options: { checkFalsy: true },
      },
    },
    date: {
      isDate: true,
      toDate: true,
    },
    job: {
      isString: true,
      optional: {
        options: { checkFalsy: true },
      },
    },
    steps: {
      isArray: true,
      optional: {
        options: { checkFalsy: true },
      },
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
      optional: {
        options: { checkFalsy: true },
      },
    },
    'steps.*.location': {
      isObject: true,
      optional: {
        options: { checkFalsy: true },
      },
    },
    'steps.*.location.locationType': {
      isString: true,
      notEmpty: true,
    },
    'steps.*.location.details': {
      isString: true,
      optional: {
        options: { checkFalsy: true },
      },
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

    JobApplicationModel.create({
      ...body,
      ownerId: req.user._id,
      state: body.state || 'waiting',
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
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized',
    });
  }

  const id = req.user._id;
  JobApplicationModel.find({ ownerId: id })
    .then((application) => {
      res.json(application);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.get('/:id', param('id').isMongoId(), (req, res) => {
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

  const id = req.params.id;
  JobApplicationModel.finOne({ _id: id, ownerId: req.user._id })
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
