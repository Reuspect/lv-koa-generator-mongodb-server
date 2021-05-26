const router = require('koa-router')()
const { register,login } = require('../controller/user')
const { SuccessModel,ErrorModel} = require('../res-model/index')

router.prefix('/api/user')

router.post('/register', async function (ctx, next) {
  // 1.首先获取数据 从ctx.request.body
  const { username, password } = ctx.request.body
  // 2.得到了 新建用户 数据库存取操作写在controller里 res是返回对象
  // 创建的时候用try catch包裹 区分ctx.body返回不同值的情况
  // const res = await register(username, password)
  try {
    const newUser = await register( username, password)
    ctx.body = new SuccessModel(newUser)
  }catch(ex){
    console.error(ex)
    ctx.body = new ErrorModel(10001, `注册失败 --${ex.message}`)
  }
})

// 登录
router.post('/login', async function (ctx, next) {
  const { username, password } = ctx.request.body
  // 查询单个用户 写在controller里
  const res = await login(username, password)
  if (res) {
    //登录成功
    // 把用户信息和session关联起来 执行这一行的时候 
    // 就有session了 也会在前端浏览器设置对应cookie了 cookie就会被保存到浏览器
    // 再次请求接口时又会发送 可以通过ctx.session.xxx获取它传过来的cookie
    ctx.session.userInfo = { username }

    ctx.body = new SuccessModel()
  }else{
    //登录失败
    ctx.body = new ErrorModel(10002, `登陆失败`)
  }
})

module.exports = router
