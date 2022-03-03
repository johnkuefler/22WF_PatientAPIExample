var express = require('express');
var router = express.Router();
const patientsController = require('../controllers/patientsController');

/* GET users listing. */
router.get('/', patientsController.get_patient);

module.exports = router;