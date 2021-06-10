const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 33,
    trim: true
  },
  genre: {
    type: String,
    required: true,

  },
  age: {
    type: String,

  },
  death: {
    type: String,

  },
  total: {
    type: String,

  },

});

module.exports = mongoose.model('users', userSchema);



