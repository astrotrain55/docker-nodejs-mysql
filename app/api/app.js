const express = require('express');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const employee = require('./routes/employee');

const app = express();

app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', index);
app.use('/employee', employee);

app.listen(3000);
