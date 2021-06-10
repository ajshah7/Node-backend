const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  text: {
    type: String,
    required: true,
  },
  moretext: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  moreimg: {
    type: String,

  },
  video: {
    type: String,

  },
  adv: {
    type: String,
  },
  adv2: {
    type: String,
  },
  adv3: {
    type: String,
  },
  
  date:{
    type: Date,
    default: Date.now,
  }


});

module.exports = mongoose.model('news', userSchema);



