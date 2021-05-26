/**
 * @description 商品数据操作
 */

const Product = require('../../models/Product')

!(async () => {
  // 创建商品数据
  // await Product.create({
  //   shopId:'60a9be07dbc5885fe8acd098', //山姆
  //   name:'葡萄',
  //   imgUrl:'/images/shop/grape.jpeg',
  //   sales: 100,
  //   price:33,
  //   oldPrice:36,
  //   tabs:['all','seckill','fruit']
  // })

  // await Product.create({
  //   shopId:'60a9be07dbc5885fe8acd098',//山姆
  //   name:'苹果',
  //   imgUrl:'/images/shop/apple.jpeg',
  //   sales: 200,
  //   price:25,
  //   oldPrice:27,
  //   tabs:['all','seckill','fruit']
  // })

  // await Product.create({
  //   shopId:'60a9be07dbc5885fe8acd098',//山姆
  //   name:'桃子',
  //   imgUrl:'/images/shop/peach.jpeg',
  //   sales: 50,
  //   price: 16,
  //   oldPrice: 19,
  //   tabs:['all','seckill','fruit']
  // })

  await Product.create({
    shopId:'60a9be07dbc5885fe8acd098',//山姆
    name:'西瓜',
    imgUrl:'/images/shop/watermelon.jpeg',
    sales: 180,
    price:13,
    oldPrice:15,
    tabs:['all','seckill','fruit']
  })

  // 查询某个商店 某个tab的商品列表
  const list = await Product.find({
    shopId: '60a9be07dbc5885fe8acd098',
    tabs: {
      $in: 'seckill' //从所有产品的列表里寻找tabs数组中含这一项的
    }
  })
  console.log(list)

})()