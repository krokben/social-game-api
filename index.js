require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const passport = require('passport');

const app = express();
app.use(morgan('dev')); // logger
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());

// routes
app.use('/users', require('./routes/users'));

const port = process.env.PORT;
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Listening on port ${port}...`);
});
