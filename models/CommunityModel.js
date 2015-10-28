var mongoose = require('mongoose');

var CommunitySchema = new mongoose.Schema({
 name: {required: true, type: String},
 createdBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
 recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe'}],
 color: String
 //community.recipies.push(recipe)
});

mongoose.model('Community', CommunitySchema);
