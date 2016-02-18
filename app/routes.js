var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json()); // support json encoded bodies
router.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

router.get('/', function (req, res) {
  res.render('dpad-index');
});


router.get('/index', function (req, res) {
  res.render('dpad-index');
});


// Example route: Passing data into a page
router.get('/examples/template-data', function (req, res) {
  res.render('examples/template-data', { 'name' : 'Foo' });
});

// add your routes here

router.post('/worldpay1n', function (req, res) {
  res.render('worldpay1n', {
    'ref' : req.body.refnumber,
    'amount' : req.body.amountnumber
  });
});

router.post('/worldpay2n', function (req, res) {
  res.render('worldpay2n', {
    'amount' : req.body.amountnumber,
    'cardtype' : req.body.cardtype
  });
});

router.post('/success', function (req, res) {
  res.render('success');
});

module.exports = router;
