const 
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

module.exports = mongoose.model('LineItem', Schema({
  product: { type: ObjectId, ref: 'Product' },
  quantity: Number,
  price: Number,
  transaction: { type: ObjectId, ref: 'Transaction'}
}));