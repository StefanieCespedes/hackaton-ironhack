const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ['Pending Confirmation', 'Active'],
  }
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
