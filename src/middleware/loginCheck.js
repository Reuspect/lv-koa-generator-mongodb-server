/**
 * @description 登陆验证中间件
 * 
 */
const ErrorModel = require('../res-model/ErrorModel')

module.exports = async (ctx, next) => {
    const session = ctx.session
    // 每次需要验证时 就拿session里是否有用户信息进行判断
    if (session && session.userInfo) {
      await next()
      return
    }
    ctx.body = new ErrorModel(10003, '登录校验失败')
    // ctx.body = {
    //   errno: -1,
    //   message: '登录验证失败'
    // }
}