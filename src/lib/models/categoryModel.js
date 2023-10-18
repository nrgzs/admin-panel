import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
 
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Category = mongoose.models.Category
  ? mongoose.models.Category
  : mongoose.model('Category', CategorySchema);

module.exports = Category;
