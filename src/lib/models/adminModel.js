import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

/* const Admin = mongoose.model('admins', UserSchema); */
const Admin = mongoose.models.Admin
  ? mongoose.models.Admin
  : mongoose.model('Admin', UserSchema);

module.exports = Admin;
