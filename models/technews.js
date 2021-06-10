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
  date:{
      type: Date,
      default: Date.now,
  },
  ram: {
    type: String,
  },
  camara: {
    type: String,
  },
  storage: {
    type: String,
  },
  colors: {
    type: String,
  },
  screen: {
    type: String,
  },
  price: {
    type: String,
  },
  charging: {
    type: String,
  },
  processor: {
    type: String,
  },
  graphics: {
    type: String,
  },
  battery: {
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
  


});

module.exports = mongoose.model('technews', userSchema);



