# API（接口） 设计

## 注册

### url 

`/api/user/register`

### method 

`post`

### request body(前端往后端传什么)

```js
{
  username: 'reuspect'
  password: 'nishibushisha'
}
```

### response body(后端往前端传什么)

```js

{
  errno: 0,
  message: 'errno !== 0 的话，的错误信息'
}
```


## 登录

### url 

`/api/user/login`

### method 

`post`

### request body(前端往后端传什么)

```js
{
  username: 'reuspect'
  password: 'nishibushisha'
}
```

### response body(后端往前端传什么)

```js

{
  errno: 0,
  message: 'errno !== 0 的话，的错误信息'
}
```


## 获取用户信息()

### url 

`/api/user/info`

### method 

`get`

### request body(前端往后端传什么)

无

### response body(后端往前端传什么)

```js

{
  errno: 0,
  data: {
    nickname: '热心市民',
  },
  message: 'errno !== 0 的话，的错误信息'
}
```



## 创建收货地址列表

### url 

`/api/user/address`

### method 

`post`

### request body(前端往后端传什么)

```js

{
  city: '北京',
  department: 'xxx小区',
  houseNumber: '门牌号',
  name: '张三',
  phone: '18234567898'
}
```

### response body(后端往前端传什么)

文档里也可以不写那些东西 但是多返回了也没关系
```js

{
  errno: 0,
  data: {
    _id: '收货地址的id'
    city: '北京',
    department: 'xxx小区',
    houseNumber: '门牌号',
    name: '张三',
    phone: '18234567898'
    createdAt: Date,
    updatedAt: Date,
  },
  message: 'errno !== 0 的话，的错误信息' 
}
```

## 获取收货地址列表

### url 

`/api/user/address`

这里就一样了 只有方法上有区别

### method 

`get`

### request body(前端往后端传什么)

无

### response body(后端往前端传什么)

获取的就是列表 

```js

{
  errno: 0,
  data: [{
    _id: '收货地址的id1'
    city: '北京',
    department: 'xxx小区',
    houseNumber: '门牌号',
    name: '张三',
    phone: '18234567898'
  },
  {
    _id: '收货地址的id2'
    city: '北京',
    department: 'xxx小区',
    houseNumber: '门牌号',
    name: '张三',
    phone: '18234567898'
  }],
  message: 'errno !== 0 的话，的错误信息' 
}
```

## 获取单个收货地址

### url 

`/api/user/address/:id` (服务端可获取具体参数值)

这里用了动态参数 示例: `/api/user/address/100`

### method 

`get`

### request body(前端往后端传什么)

无

### response body(后端往前端传什么)
 

```js

{
  errno: 0,
  data: {
    _id: '收货地址的id1'
    city: '北京',
    department: 'xxx小区',
    houseNumber: '门牌号',
    name: '张三',
    phone: '18234567898'
  },
  message: 'errno !== 0 的话，的错误信息'
}
```

## 更新收货地址

### url 

`/api/user/address/:id` (服务端可获取具体参数值)

示例: `/api/user/address/100`

### method 

`patch`

### request body(前端往后端传什么)

```js
{
    _id: '收货地址的id1'
    city: '北京',
    department: 'xxx小区',
    houseNumber: '门牌号',
    name: '张三',
    phone: '18234567898'
},
```

### response body(后端往前端传什么)

可以不返回data 返回了也无所谓

```js

{
  errno: 0,
  message: 'errno !== 0 的话，的错误信息'
}
```


## 附近（热门）店铺

### url 

`/api/shop/hot-list` 

### method 

`get`

### request body(前端往后端传什么)

无

### response body(后端往前端传什么)

返回的data里是商铺列表
```js
{
  errno: 0,
  data:[
    {
      _id: '店铺 id',
      name: '沃尔玛',
      imgUrl: '商店的图片url',
      sales: 10000, //月售
      expressLimit: 0, //起送
      expressPrice: 5, //快递价格
      slogan: 'VIP 尊享满8减4元运费券'
    },
  ],
  message: 'errno !== 0 的话，的错误信息'
}
```



## 店铺详情

### url 

`/api/shop/:id` 

### method 

`get`

### request body(前端往后端传什么)

无

### response body(后端往前端传什么)

单个商店的信息 就不需要是数组了
```js
{
  errno: 0,
  data:{
      _id: '店铺 id',
      name: '沃尔玛',
      imgUrl: '商店的图片url',
      sales: 10000, //月售
      expressLimit: 0, //起送
      expressPrice: 5, //快递价格
      slogan: 'VIP 尊享满8减4元运费券'
  },
  message: 'errno !== 0 的话，的错误信息'
}
```

## 查询（某个）商店的商品列表

### url 

id的位置可以不在最后边的

`/api/shop/:id/products` 

### query

`tab=全部商品`

举例 `/api/shop/10/products?tab=秒杀`

这个是用来解决选中左边栏的哪一项的问题

### method 

`get`

### request body(前端往后端传什么)

无

### response body(后端往前端传什么)

返回商品列表（数组 每一项都是商品信息）

```js
{
  errno: 0,
  data:[{
      _id: '店铺 id',
      name: '番茄 250g/份',
      imgUrl: 'xxx.png',
      sales: 10,
      price: 33.6,
      oldPrice: 40.6
  }],
  message: 'errno !== 0 的话，的错误信息'
}
```

## 创建订单

### url 

`/api/order` 

### method 

`post`

### request body(前端往后端传什么)

```js
{
  addressId: '收货地址的id',
  shopid: 'shop的id', //不可能一个订单里包含很多商店
  shopName: '沃尔玛' //你自己不穿 让后端根据id查 也不是不行
  isCanceled: false, //订单是否被取消 不被取消
  products: [
    {
      id: '商品1 id',
      num: 3 //购买数量
    },
    {
      id: '商品2 id',
      num: 5 //购买数量
    }
  ]
}

```

### response body(后端往前端传什么)

返回订单

```js
{
  errno: 0,
  data:{
      _id: '订单 id',
      // 剩下的信息都是前端传过去
  },
  message: 'errno !== 0 的话，的错误信息'
}
```