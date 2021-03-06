const { body, validationResult } = require('express-validator');
const router = require('express').Router();
const bcrypt = require('bcrypt');
const passport = require('../config/passport');
const UserModel = require('../models/user.model');

router.post(
  '/register',
  body('email').trim().isEmail().normalizeEmail(),
  body('username')
    .isString()
    .trim()
    .isAlphanumeric('en-US', { ignore: '_-' })
    .isLength({ min: 4, max: 20 }),
  body('password').isString().isStrongPassword({ minSymbols: 0 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      const matchedUsers = await UserModel.find({
        $or: [
          {
            email: {
              $regex: `^${email}$`,
              $options: 'i',
            },
          },
          {
            username: {
              $regex: `^${username}$`,
              $options: 'i',
            },
          },
        ],
      });

      if (matchedUsers.length !== 0) {
        const errors = [];

        for (const user of matchedUsers) {
          if (user.email.toLowerCase() === email.toLowerCase()) {
            errors.push({
              location: 'email',
              cause: 'Un utilisateur avec cette adresse existe déjà',
            });
          }

          if (user.username.toLowerCase() === username.toLowerCase()) {
            errors.push({
              location: 'username',
              cause: 'Un utilisateur avec ce nom existe déjà',
            });
          }
        }

        res.status(409).json({
          success: false,
          errors,
        });
      } else {
        const user = await UserModel.create({
          username,
          email,
          password: await bcrypt.hash(password, 12),
        });

        req.login(user, (err) => {
          if (err) {
            res.status(500).json({
              success: false,
              message: 'An error occurred while processing your request',
            });
          } else {
            res.json({
              success: true,
              user: {
                username: user.username,
                email: user.email,
              },
            });
          }
        });
      }
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'An error occurred while processing your request',
      });
    }
  },
);

router.post(
  '/login',
  body('email').trim().isEmail().normalizeEmail(),
  (req, res, next) => {
    passport.authenticate('local', (err, user) => {
      if (err || !user) {
        res.status(401).json({
          success: false,
          message: 'Unauthorized',
        });
      } else {
        req.user = user;
        next();
      }
    })(req, res, next);
  },
  (req, res) => {
    req.login(req.user, (err) => {
      if (err) {
        res.status(500).json({
          success: false,
          msg: 'An error occurred while processing your request',
        });
      } else {
        res.json({
          success: true,
          user: {
            username: req.user.username,
            email: req.user.email,
          },
        });
      }
    });
  },
);

router.get('/me', (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      user: {
        username: req.user.username,
        email: req.user.email,
      },
    });
  } else {
    res.status(401).json({ success: false });
  }
});

module.exports = router;
