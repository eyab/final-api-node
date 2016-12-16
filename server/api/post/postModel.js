var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },

  text: {
    type: String,
    required: true
  },

  author: 
        {type: Schema.Types.ObjectId,
         ref: 'user',
         required:true
        },
  categories:
  [{
  category:
    {type: Schema.Types.ObjectId,
    ref:'post'}
  }]
});

module.exports = mongoose.model('post', PostSchema);