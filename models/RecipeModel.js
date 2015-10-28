var mongoose = require('mongoose');

var RecipeSchema = new mongoose.Schema({
 name: {required: true, type: String},
 ingredients: [{
   choice: String,
   amount: String
 }],
 instructions: {required: true, type: String},
 createdBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
 created: Date,
 community: {type: mongoose.Schema.Types.ObjectId, ref:'Community'}
 //community = req.params.CommunityId
});

mongoose.model('Recipe', RecipeSchema);
