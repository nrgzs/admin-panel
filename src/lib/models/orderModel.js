import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
  status: { type: String, required: true },
  customer_id: { type: String, required: true },
  total: {
    type: Number,
    required: true,
  },
  billing: {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    company: { type: String},
    address_1: { type: String, required: true },
    address_2: { type: String},
    city: { type: String, required: true },
    state: { type: String},
    postcode: { type: String, required: true },
    country: { type: String, required: true },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.models.Order
  ? mongoose.models.Order
  : mongoose.model('Order', OrderSchema);

module.exports = Order;

// {
//   
// 
//     "status": "processing",
//     "customer_id": 0,
//     "total": "920",
//     "billing": {
//         "first_name": "John",
//         "last_name": "Doe",
//         "company": "",
//         "address_1": "8 Something Row",
//         "address_2": "",
//         "city": "London",
//         "state": "",
//         "postcode": "WC6 3XB",
//         "country": "GB",}
