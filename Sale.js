const 
  mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

module.exports = mongoose.model('Sale', Schema({
  product: { type: ObjectId, ref: 'Product' },
  quantity_required: Number,
  discount: Number
}));