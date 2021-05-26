/**
 * @description 商品数据操作
 */

const Order = require('../../models/Order')
const Address = require('../../models/Address')
const Product = require('../../models/Product')

!(async () => {
 
  // 滤清思路 我们这里是先根据API来创建数据 然后再把地址和产品信息根据它们的id填进去
  // 这里是先建立对象 而没有直接await Order.create
  const requestBody = {
    addressId:'60a900a49b1bbd8e141718c4',//数据库中某个addressid
    shopId:'60a9be07dbc5885fe8acd098',//山姆
    shopName:'山姆会员商店',
    isCanceled:false,
    // 这里是按api进行创建的
    products:[{
      id:'60a9cba74945ee40d4ab31e5', //葡萄id
      num:3
    },{
      id:'60a9cba74945ee40d4ab31e6', //苹果id
      num:4
    }]
  }
  
  // 获取address
  const address = await Address.findById(requestBody.addressId)
  // 获取订单对应的商品列表 先获取它们的id
  const pIds = requestBody.products.map(p => p.id)
  const productList = await Product.find({
    shopId:requestBody.shopId,
    _id: {
      $in: pIds // id必须在数组里面才行 
    }
  })
  // console.log(pIds)
  // console.log(productList)
  // productList
  // [
  //   {
  //     tabs: [ 'all', 'seckill', 'fruit' ],
  //     _id: 60a9cba74945ee40d4ab31e5,
  //     shopId: '60a9be07dbc5885fe8acd098',
  //     name: '葡萄',
  //     imgUrl: '/images/shop/grape.jpeg',
  //     sales: 100,
  //     price: 33,
  //     oldPrice: 36,
  //     createdAt: 2021-05-23T03:27:35.700Z,
  //     updatedAt: 2021-05-23T03:27:35.700Z,
  //     __v: 0
  //   },
  //   {
  //     tabs: [ 'all', 'seckill', 'fruit' ],
  //     _id: 60a9cba74945ee40d4ab31e6,
  //     shopId: '60a9be07dbc5885fe8acd098',
  //     name: '苹果',
  //     imgUrl: '/images/shop/apple.jpeg',
  //     sales: 200,
  //     price: 25,
  //     oldPrice: 27,
  //     createdAt: 2021-05-23T03:27:35.755Z,
  //     updatedAt: 2021-05-23T03:27:35.755Z,
  //     __v: 0
  //   }
  // ]

  // 整合 订单购买数量
  const productListWidthSales =  productList.map(p => {
    
    const id = p._id.toString()
    // 找到订单里id与订单产品列表匹配的那一项
    const filterProducts = requestBody.products.filter(item=>item.id===id)
    if(filterProducts.length === 0){
      throw Error('未找到匹配的销量')
    }
    // 数组形式 但只有一项
    // console.log(filterProducts)
    return {
      product: p,
      orderSales: filterProducts[0].num
    }
  })

  console.log(productListWidthSales)
  
  await Order.create({
    username: 'zhangsan',
    shopId:requestBody.shopId,
    shopName:requestBody.shopName,
    isCanceled:requestBody.isCanceled,
    address,
    products:productListWidthSales
  })

})()