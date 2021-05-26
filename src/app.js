const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')
const addresses = require('./routes/addresses')

const session = require('koa-generic-session')
const cors = require('koa2-cors')

// error handler
onerror(app)

// cors跨域配置
app.use(cors({
  origin: 'http://localhost:8080',// 前端的源
  credentials: true //允许携带cookie
}))

// session配置
app.keys = ['sdkk^&76879sSA'] //密钥 用于加密
app.use(session({
  // 配置cookie
  cookie: {
    path: '/',
    httpOnly: true, // 只能通过后端修改cookie
    maxAge: 24*60*60*1000
  }
}))

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(addresses.routes(), addresses.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
