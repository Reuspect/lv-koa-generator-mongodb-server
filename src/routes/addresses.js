/**
 * @description 地址数据接口
 */

const router = require('koa-router')()
const { register,login } = require('../controller/user')
const { SuccessModel,ErrorModel} = require('../res-model/index')

const loginCheck = require('../middleware/loginCheck')
const { createAddress, getAddressList,getAddressById, updateAddress} = require('../controller/address')

router.prefix('/api/user/address')


//创建收货地址
router.post('/',loginCheck, async function (ctx, next) {
  const userInfo = ctx.session.userInfo
  const username = userInfo.username
  // const {city,department,houseNumber,name,phone } = ctx.request.body
  // 别这么写 直接写data 解构赋值放在controller里
  // 获取数据后 具体操作写在controller里
  const data = ctx.request.body


  try {
    const newAddress = await createAddress( username, data)
    ctx.body = new SuccessModel(newAddress)
  } catch(ex){
    console.error(ex)
    ctx.body = new ErrorModel(10004, `创建收货地址失败 --${ex.message}`)
  }
})

// 获取收货地址列表

router.get('/',loginCheck, async function (ctx, next) {
  const userInfo = ctx.session.userInfo
  const username = userInfo.username

  try {
    const addressList = await getAddressList(username)
    ctx.body = new SuccessModel(addressList)
  } catch(ex){
    console.error(ex)
    ctx.body = new ErrorModel(10005, `获取收货地址列表失败 --${ex.message}`)
  }
})

// 获取单个收货地址

router.get('/:id',loginCheck, async function (ctx, next) {
  // 重点 如何获取动态参数id
  const id = ctx.params.id

  try {
    const address = await getAddressById(id)
    ctx.body = new SuccessModel(address)
  } catch(ex){
    console.error(ex)
    ctx.body = new ErrorModel(10006, `获取单个收货地址失败 --${ex.message}`)
  }
})

// 编辑收货地址
router.patch('/:id',loginCheck, async function (ctx, next) {
  // 重点 如何获取动态参数id
  const id = ctx.params.id
  const data = ctx.request.body
  const userInfo = ctx.session.userInfo
  const username = userInfo.username

  // 更新
  try {
    const newAddress = await updateAddress(id, username, data)
    ctx.body = new SuccessModel(newAddress)
  } catch(ex){
    console.error(ex)
    ctx.body = new ErrorModel(10007, `更新地址失败 --${ex.message}`)
  }
})

module.exports = router