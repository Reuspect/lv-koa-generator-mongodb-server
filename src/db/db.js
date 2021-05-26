/**
 * @description mongoose连接数据库
 * @author 吕哥
 * 
 */

const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017' //本地默认的mongodb服务地址
const dbName = 'testdb'

// 常规配置
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

// 开始连接
mongoose.connect(`${url}/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

// 监控错误
db.on('error', err => {
  console.error('mongoose connect error', err)
})

// db的一次链接 做测试看看是否连接成功
// db.once('open', () => {
//   console.log('成功')
// })

module.exports = mongoose
