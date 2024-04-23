const mongoose = require('mongoose');

const PlayerSchema= mongoose.Schema({
  name: {
    type:String,
    required:true
  },

  location : {
    type:String,
    default:"Start"
  }
})

module.exports = mongoose.model('player',PlayerSchema);
