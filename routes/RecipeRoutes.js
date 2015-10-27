var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Recipe = mongoose.model('Recipe');
var jwt = require('express-jwt');

router.post('/:comID', function(req, res, next) {
  var recipe = new Recipe(req.body);
  // recipe.createdBy = req.payload._id;
  recipe.created = new Date();
  recipe.community = req.params.comID;
  recipe.save(function(err, result) {
    if(err) return next(err);
    if(!result) return next("Could not Create");
    res.send(result);
  });
});

// router.get('/', function(req, res, next) {
//   Recipe
//   .find({})
//   // .select('topic createdBy')
//   // .populate('createdBy', 'username')
//   .exec(function(err, result) {
//     if(err) return next(err);
//     res.send(result);
//   });
// });

router.delete('/:id', function(req, res, next) {
  Recipe.remove({_id: req.params.id}, function(err, result) {
      if(err) return next(err);
      console.log(result);
      res.send();
  });
});

router.get('/:id', function(req, res, next){
  Recipe.find({community: req.params.id}, function(err, result){
    if(err) {return next(err);}
    if(!result) {return next({err: "Error finding recipe by community ID."});}
    res.send(result);
  })
});


module.exports = router;
