var mongoose = require('mongoose');

var RecipeSchema = new mongoose.Schema({
 name: {required: true, type: String},
 ingredients: [{required: true, type: String}],
 instructions: {required: true, type: String},
 createdBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

mongoose.model('Recipe', RecipeSchema);
