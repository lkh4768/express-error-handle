const express = require('express');

const service = require('../../service');

const router = express.Router();

router.get('/', (req, res) => {
  res.end('this api');
});

router.get('/something', (req, res) => {
  service.something.find();
});

module.exports = router;
