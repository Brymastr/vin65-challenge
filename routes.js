const
  Router = require('koa-router'),
  router = new Router(),
  mongoose = require('mongoose'),
  Product = require('./Product'),
  LineItem = require('./LineItem'),
  Sale = require('./Sale'),
  Transaction = require('./Transaction'),
  Coupon = require('./Coupon');

router.get('/products)', async ctx => {
  ctx.body = await Product.find({});
});

router.post('/products)', async ctx => {
  const { name, regular_price, unit } = ctx.body;
  const product = new Product({
    name,
    regular_price,
    sale_price,
    unit
  });
  await product.save();
  ctx.body = product;
});

router.get('/lineItems/:transaction', async ctx => {
  ctx.body = await LineItem.find({ transaction: ctx.params.transaction });
});

router.post('/lineItems/:transaction', async ctx => {
  const { product, quantity } = ctx.body;

  // Get sales for this product
  const sale = await Sale.find({ product });

  // Apply price including sale price if applicable
  let price = product.regular_price * quantity
  if(quantity >= dbSale.quantity_required) price *= discount;

  const lineItem = new LineItem({
    product,
    quantity,
    price
  });
  await lineItem.save();
  ctx.body = lineItem;
});

router.get('/transactions', async ctx => {
  const transactions = await Transaction.find({});
  ctx.body = transactions;
});

router.get('/transactions/:id', async ctx => {
  const lineItems = await LineItem.find({ transaction: ctx.params.id });
  const transaction = await Transaction.findOne({ _id: ctx.params.id });

  transaction.total = lineItems.reduce((acc, line) => acc += line.price);

  ctx.body = transaction;
});

router.post('/transactions', async ctx => {
  const { name, customer_name } = ctx.body;
  const transaction = new Transaction({
    name,
    customer_name,
    total: 0
  });
  await transaction.save();
  ctx.body = transaction;
});

router.delete('/', async ctx => {
  // NOTE: This endpoint will delete everything and is clearly only for dev/test purposes
  await Transaction.remove({});
  await Sale.remove({});
  await Coupon.remove({});
  await LineItem.remove({});
  await Product.remove({});
  ctx.body = 'Everything has been deleted';
});



module.exports = router.routes();