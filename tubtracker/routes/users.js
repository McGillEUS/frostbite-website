var express = require('express');
var router = express.Router();

/* GET flavourlist */
router.get('/flavourlist', function(req, res) {
  var db = req.db;
  var collection = db.get('flavourlist');
  collection.find({},{},function(e,docs){
    res.json(docs);
  });
});

/* POST to addflavour */
router.post('/addflavour', function(req, res) {
  var db = req.db;
  var collection = db.get('flavourlist');
  collection.insert(req.body, function(err, result){
    res.send(
      (err === null) ? { msg: '' } : { msg: err }
    );
  });
});

/* PUT to editflavour */
router.put('/editflavour', function(req, res) {
  var db = req.db;
  var collection = db.get('flavourlist');

  // TODO find the element in the collection
  // TODO update the element with the data from the form

});

/* DELETE to deleteflavour */
router.delete('/deleteflavour/:id', function(req, res) {
  var db = req.db;
  var collection = db.get('flavourlist');
  var flavourToDelete = req.params.id;
  collection.remove({ '_id' : flavourToDelete }, function(err) {
    res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
  });
});

module.exports = router;
