const
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

module.exports = mongoose.model('Coupon', Schema({
  Name: String,
  total_required: Number, // dollar amount required for discount
  discount: Number
}));