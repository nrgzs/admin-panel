const mongoose = require('mongoose');

let connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect('mongodb://127.0.0.1:27017/e-commerce', {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log('Connected to MongoDB');
    return connection;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
}
module.exports = dbConnect;
