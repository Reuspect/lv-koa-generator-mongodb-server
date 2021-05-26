# 数据模型设计

列举各个数据模型的示例

## 用户

```js
{
  _id: 'xxx',
  username: '123456789', //唯一的
  password: '123'
}
```

## 地址

```js
{
  _id:'xxk'
  username: '123456789', //这样就和用户产生了关联
  city: '北京',
  department: 'xx小区',
  houseNumber: '门牌号',
  name: '张三',
  phone: '12345612331',
}
```

## 商店

```js
{
  _id:'xxxxxx'
  name:'xx商店',
  imgUrl: 'xxx.png',
  sales: 10000,
  expressLimit: 0,
  expressPrice: 5,
  slogan: '红色的宣传语'
}

```


## 商品

```js
{
  _id:'aaa',
  shopId: 'xxxxxx',//对应的正是上面的商店的id
  tabs:['all','seckill'],// 商品的类型(可以属于好几个类型) 用数组存储存储一下
  name:'商品名称',
  imgUrl: 'xxx.png',
  sales: 10,
  price: 33.6,
  oldPrice: 40.6,
  phone: '12345612331',
}
```


## 订单

```js
{
  username: 'zhangsan',

  _id: 'xxx',
  addressId:'地址的id',
  shopId: '商店的id',
  shopName: '沃尔玛',
  isCanceled: false, //订单是否被取消
  address:{ //这里不能只写addressId 已经说过了地址也是复制关系 这些都是固定的数据了
    username: 'zhangsi', 
    city:'北京',
    department:'海淀小区',
    houseNumber:'门牌号3',
    name:'张四',
    phone:'13456787654'
  },
  products:[
    {
      product:{ //商品的信息  复制过来的
        shopId:'60a9be07dbc5885fe8acd098',//山姆
        name:'西瓜',
        imgUrl:'/images/shop/watermelon.jpeg',
        sales: 180,
        price:13,
        oldPrice:15,
        tabs:['all','seckill','fruit']
      }, 
      orderSales:3 // 购买的数量
    },
  ]
}

```