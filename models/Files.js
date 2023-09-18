const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  isRead: {
    type: Boolean,
    required: true,
    default: false
  }
});

module.exports = mongoose.model('File', fileSchema);

