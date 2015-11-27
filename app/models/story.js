var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var StorySchema = new Schema({

	creator: { type: Schema.Types.String, ref: 'User' },
	content: String,
	created: String
});

module.exports = mongoose.model('Story', StorySchema);