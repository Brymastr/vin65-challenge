const 
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

module.exports = mongoose.model('Transaction', Schema({
  name: String,
  customer_name: String,
  total: Number,
  closed: { type: Boolean, default: false }
}));