/**
 * @description 商店数据操作
 */

const Shop = require('../../models/Shop')

!(async () => {
  // 创建商店数据
  await Shop.create({
    name:'沃尔玛',
    imgUrl:'/images/shop/wmt.jpeg',
    sales: 10000,
    expressLimit:0,
    expressPrice:5,
    slogan:'VIP尊享满89元减4元运费券'
  })

  await Shop.create({
    name:'山姆会员商店',
    imgUrl:'/images/shop/sam.jpeg',
    sales: 2000,
    expressLimit:0,
    expressPrice:5,
    slogan:'联合利华洗护满10减5'
  })

  // 查询附近商店列表(不写await就会出现打印非常多 程序没有执行完的样子)
  const shopList = await Shop.find().sort({ _id:-1 })
  console.log(shopList)

  // 获取商店详情
  const id = '60a9be07dbc5885fe8acd098'
  const shop = await Shop.findById(id);
  console.log(shop);


})()