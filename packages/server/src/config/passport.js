const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const UserModel = require('../models/user.model');

passport.use(
  'local',
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      try {
        const user = await UserModel.findOne({ email });
        if (!user) return done(null, false);

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return done(null, false);

        return done(null, user);
      } catch (err) {
        done(null, false);
      }
    },
  ),
);

passport.serializeUser((user, done) => {
  console.log('serialize');

  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  console.log('deserialize');

  try {
    const user = await UserModel.findById(id);
    console.log(user);
    done(null, user);
  } catch (err) {
    done(null, false);
  }
});

module.exports = passport;
