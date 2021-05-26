/**
 * @description Shop Model
 * @author 艹
 * 
 */

const mongoose = require('../db/db')

// 商店的 schema id先不管
const Schema = mongoose.Schema({
  name:String,
  imgUrl: String,
  sales: Number,
  expressLimit: {
    type:Number,
    default:0
  },
  expressPrice: Number,
  slogan: String
},{
  timestamps: true
})

const Shop = mongoose.model('shop', Schema)

module.exports = Shop
