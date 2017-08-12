const 
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

module.exports = mongoose.model('Product', Schema({
  name: String,
  regular_price: { type: Number, min: 0 },
  unit: String
}));