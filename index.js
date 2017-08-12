const
  Koa = require('koa'),
  app = new Koa(),
  bodyParser = require('koa-bodyparser'),
  cors = require('koa-cors'),
  mongoose = require('mongoose');

app.use(bodyParser());
mongoose.connect('mongodb://localhost/register');
app.use(cors({origin: '*'}));
app.use(require('./routes'));
app.listen(3000);