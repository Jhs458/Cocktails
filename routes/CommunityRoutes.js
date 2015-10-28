var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Community = mongoose.model('Community');
var jwt = require('express-jwt');

router.param('id', function(req, res, next, id) {
  Community.findOne({_id: id})
  //.populate('recipes', 'body postedBy')
  .exec(function(err, result) {
    if(!result) {res.status(404).send({err: "Could not find that specific community."});}
    req.community = result;
    next();
  });
});

router.post('/', function(req, res, next) {
  var community = new Community(req.body);
  //community.created = new Date();   //should we have community created date?
  community.save(function(err, result) {
    res.send(result);
  });
  // console.log("here");
  // res.send();
});

router.get('/', function(req, res, next) {
  Community.find({}, function(err, result) {
    res.send(result);
  });
});

router.get('/:id', function(req, res, next) {
  Community.findOne({_id: req.params.id}, function(err, result) {
    res.send(result);
  });
});


router.delete('/:id', function(req, res, next) {
  Community.remove({_id: req.params.id}, function(err, result) {
      if(err) {return next(err);}
      // console.log(result);
      res.send();
  });
});


router.put('/:id', function (req, res, next){
  console.log(req.body)

  Community.update({_id: req.params.id}, {$set: {name:req.body.name}}, function(err, result){
  if (err) return next(err);
  if (!result) return next ({err: "The community wasnt found for updating"});
  res.send(result);
  });
});



module.exports = router;
