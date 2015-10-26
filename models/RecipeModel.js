var mongoose = require('mongoose');

var RecipeSchema = new mongoose.Schema({
 name: {required: true, type: String},
 ingredients: [{
   choice: String,
   amount: String
 }],
 instructions: {required: true, type: String},
 // createdBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
 created: Date
});

mongoose.model('Recipe', RecipeSchema);
