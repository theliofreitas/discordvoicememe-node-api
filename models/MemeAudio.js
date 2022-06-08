const mongoose = require('mongoose');

const MemeAudio = mongoose.model('MemeAudio', {
  label: String,
  playUrl: String,
  color: String,
  origin: String
}, 'memeAudios');

module.exports = MemeAudio;