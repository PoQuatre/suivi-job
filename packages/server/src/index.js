require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const { registerClient } = require('./config/registerClient');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('./config/passport');

const AuthRouter = require('./routes/auth.route');
const JobApplicationRouter = require('./routes/jobApplication.route');
const SettingsRouter = require('./routes/settings.route');
const StatsRouter = require('./routes/stats.route');

if (!process.env.MONGO_URL) {
  throw new Error('The `MONGO_URL` environment variable is missing');
}
if (!process.env.SESSION_SECRET) {
  throw new Error('The `SESSION_SECRET` environment variable is missing');
}

mongoose.connect(process.env.MONGO_URL);

const app = express();

app.disable('x-powered-by');
app.use(morgan('common'));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
  app.use(compression());
}

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', AuthRouter);
app.use('/api/job-application', JobApplicationRouter);
app.use('/api/settings', SettingsRouter);
app.use('/api/stats', StatsRouter);

registerClient(app); // Keep this line after all your routes

const PORT = parseInt(process.env.PORT || '') || 8080;
app.listen(PORT, () => {
  console.log(`The server is listening on http://localhost:${PORT}`);
});
