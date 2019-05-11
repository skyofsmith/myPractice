const Koa = require('koa')
const app = new Koa()


// logger

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// keys ?
app.keys = ['im a newer secret', 'i like turtle'];
app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');

// response

app.use(async ctx => {
  ctx.cookies.set('name', 'zz', { signed: true });
  ctx.body = 'hello world'
})

console.log('app.env is', app.env);

app.on('error', err => {
  log.error('server error', err)
});

app.listen(3000)
// up = down
// require('http').createServer(app.callback()).listen(3000)