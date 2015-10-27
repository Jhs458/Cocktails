var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Recipe = mongoose.model('Recipe');
var jwt = require('express-jwt');

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

router.get('/', function(req, res, next) {
  Recipe
  .find({})
  // .select('topic createdBy')
  // .populate('createdBy', 'username')
  .exec(function(err, result) {
    if(err) return next(err);
    res.send(result);
  });
});

router.delete('/:id', function(req, res, next) {
  Recipe.remove({_id: req.params.id}, function(err, result) {
      if(err) return next(err);
      console.log(result);
      res.send();
  });
});


module.exports = router;
