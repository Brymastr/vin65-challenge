const
  Koa = require('koa'),
  app = new Koa(),
  bodyParser = require('koa-bodyparser');

app.use(require('./routes'));
app.use(bodyParser());
app.listen(3000);