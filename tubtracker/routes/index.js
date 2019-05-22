var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/homepage', function(req, res) {
  res.render('homepage', { title: 'Homepage' });
});

/* GET Userlist page. */
router.get('/flavourlist', function(req, res) {
  var db = req.db;
  var collection = db.get('flavourlist');
  collection.find({},{},function(e,docs){
      res.render('flavourlist', {
          "flavourlist" : docs
      });
  });
});

/* GET New Flavour page. */
router.get('/newflavour', function(req, res) {
  res.render('newflavour', { title: 'Add New Flavour' });
});

/* POST to Add Flavour Service */
router.post('/addflavour', function(req, res) {

  // Set our internal DB variable
  var db = req.db;

  // Get our form values. These rely on the "name" attributes
  var flavourName = req.body.flavourname;
  var flavourSupplier = req.body.flavoursupplier;

  // Set our collection
  var collection = db.get('flavourlist');

  // Submit to the DB
  collection.insert({
      "flavour" : flavourName,
      "supplier" : flavourSupplier
  }, function (err, doc) {
      if (err) {
          // If it failed, return error
          res.send("There was a problem adding the information to the database.");
      }
      else {
          // And forward to success page
          res.redirect("flavourlist");
      }
  });

});

module.exports = router;
