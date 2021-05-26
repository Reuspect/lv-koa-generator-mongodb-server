/**
 * @description Product Model
 * @author 艹
 * 
 */

const mongoose = require('../db/db')

// 商店的 schema id先不管
const Schema = mongoose.Schema({
  shopId:{
    type: String,
    require: true
  },
  tabs: [String], //示例 ['all','seckill']
  name: String,
  imgUrl: String,
  sales: Number,
  price: Number,
  oldPrice: Number,
  phone: String
},{
  timestamps: true
})

const Product = mongoose.model('product', Schema)

module.exports = Product
