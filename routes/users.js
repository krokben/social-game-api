const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => {
  console.log('login route visited.');
});

module.exports = router;
