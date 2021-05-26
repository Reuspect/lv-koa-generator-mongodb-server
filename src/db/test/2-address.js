/**
 * @description 地址数据操作
 */

const Address = require('../../models/Address')

!(async() => {
  // 创建收货地址
  await Address.create({
    username: 'zhangsi', //用户关联
    city:'北京',
    department:'海淀小区',
    houseNumber:'门牌号3',
    name:'张四',
    phone:'13456787654'
  })

  // // 获取收货地址列表（自己的）
  // const zhangsi = await Address.find({
  //   username:'zhangsi'
  // }).sort({ updatedAt:-1 })
  // console.log('zhangsi', zhangsi);

  // // 获取单个收货地址 这里我们就获取一个数据库里的id
  // const id = '60a900d5e16f7f47e4ab2435'
  // const zhangsi = await Address.findById(id)
  // console.log('zhangsi', zhangsi);

  // // 更新收货地址（传入id 传入新数据 即获取一个并修改）
  // const id = '60a900d5e16f7f47e4ab2435'
  // const newData = {
  //   department:'贵族小区',
  //   houseNumber:'门牌号3',
  //   name:'z爷',
  //   phone:'13456787654'
  // }
  // const address = await Address.findOneAndUpdate({
  //   _id:id, username:'zhangsi'},newData,{
  //     new: true //默认返回更新之后的最新数据
  //   })
  // console.log('zhangsi', address);

})()