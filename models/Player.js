const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    default: "Start",
  },
});

module.exports = mongoose.model('player',playerSchema);