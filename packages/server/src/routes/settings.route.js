const router = require('express').Router();
const UserModel = require('../models/user.model');

router.put('/', (req, res) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: 'Unauthorized',
    });
  }

  const advanced = req.body.advanced;
  const id = req.user._id;

  UserModel.findByIdAndUpdate(id, { $set: { advanced } })
    .then((application) => {
      res.json(application);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
