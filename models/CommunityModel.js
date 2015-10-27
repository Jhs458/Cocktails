var mongoose = require('mongoose');

var CommunitySchema = new mongoose.Schema({
 name: {required: true, type: String},
 recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe'}]
 //community.recipies.push(recipe)
});

mongoose.model('Community', CommunitySchema);
