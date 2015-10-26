var mongoose = require('mongoose');

var CommunitySchema = new mongoose.Schema({
 name: {required: true, type: String},
 recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipe'}]
});

mongoose.model('Community', CommunitySchema);
