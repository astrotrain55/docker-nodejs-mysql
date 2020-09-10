const express = require('express');
const DataBaseHandler = require('../config/DataBaseHandler');

const dataBaseHandler = new DataBaseHandler();
const connection = dataBaseHandler.createConnection();
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index.jade', { title: 'index', state: connection.state });
});

module.exports = router;
