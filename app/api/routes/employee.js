const express = require('express');
const DataBaseHandler = require('../config/DataBaseHandler');

const dataBaseHandler = new DataBaseHandler();
const connection = dataBaseHandler.createConnection();
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index.jade', { title: 'employee', state: connection.state });

  connection.query('CALL sp_GetEmployee();', (error, result, fields) => {
    if (error) throw error;

    if (result[0].length) {
      res.status(202).send({
        status : 'SUCCESS',
        message: 'User was found',
        data : result[0],
      });
    } else {
      res.status(404).send({
        status : 'ERROR',
        message: 'No existe usuario en Base de Datos',
      });
    }
  });
});

module.exports = router;
