var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Recipe = mongoose.model('Recipe');
// var jwt = require('express-jwt');

router.post('/', function(req, res, next) {
  var recipe = new Recipe(req.body);
  // recipe.createdBy = req.payload._id;
  recipe.created = new Date();
  recipe.save(function(err, result) {
    if(err) return next(err);
    if(!result) return next("Could not Create");
    res.send(result);
  });
});


module.exports = router;
