const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

/* const Admin = mongoose.model('admins', UserSchema); */
const Admin = mongoose.models.Admin
  ? mongoose.models.Admin
  : mongoose.model('Admin', UserSchema);

module.exports = Admin;
