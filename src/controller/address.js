/**
 * @description address controller
 */

const Address = require('../models/Address')

/**
 * 创建地址
 * @param {string} username 用户名
 * @param {Object} data 地址数据
 * @returns 
 */
 async function createAddress(username, data) {
  const newAddress = await Address.create({
    username,
    // 对象的数据展开铺平（结构语法）
    ...data
  })
  return newAddress
}


/**
 * 获取地址
 * @param {string} username 用户名
 * @returns 
 */
 async function getAddressList(username) {
  const addressList = await Address.find({
    username
  }).sort({ updatedAt: -1 })
  return addressList
}


/**
 * 获取单个地址
 * @param {string} id 动态参数
 * @returns 
 */
 async function getAddressById(id) {
  const address = await Address.findById(id)
  return address
}

/**
 * 更新单个地址
 * @param {string} id 动态参数
 * @param {string} username 用户名
 * @param {Object} data 地址数据
 * @returns 
 */
 async function updateAddress(id, username, data) {
  const address = await Address.findOneAndUpdate({
    _id:id, 
    username:'zhangxiaoyuan'
  },{
    username,
    ...data
  },{
    new: true
  })
  return address
}


module.exports = {
  createAddress,
  getAddressList,
  getAddressById,
  updateAddress
}