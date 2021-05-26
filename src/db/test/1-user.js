/**
 * @description 用户数据操作
 */

const User = require('../../models/User')

!(async() => {
  // 注册： 创建一个新的用户
  const  lvge = await User.create({
    username: 'lvge',
    password: 'zhenshuai'
  })
  console.log(lvge)

  // // 查询数据
  // const zhangsan = await User.findOne({
  //   username:'zhangsan',
  //   password:'123'
  // })
  // console.log('zhangsan', zhangsan);

})()