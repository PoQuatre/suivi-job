const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const compression = require('compression');
const { registerClient } = require('./registerClient');
const JobApplicationRouter = require('./routes/jobApplication.route');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/suivi-job');

const app = express();

app.disable('x-powered-by');
app.use(morgan('common'));
app.use(express.json());
if (process.env.NODE_ENV === 'production') {
  app.use(compression());
}

app.get('/api/hello', (req, res) => {
  res.send('Hello from the server!');
});

app.use('/api/job-application', JobApplicationRouter);

registerClient(app); // Keep this line after all your routes

const PORT = parseInt(process.env.PORT || '') || 8080;
app.listen(PORT, () => {
  console.log(`The server is listening on http://localhost:${PORT}`);
});
