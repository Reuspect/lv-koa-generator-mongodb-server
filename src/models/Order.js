/**
 * @description Order Model
 * 
 */


const mongoose = require('../db/db')

// Order 的Schema id先不管
const Schema = mongoose.Schema({
  username: {
    type: String,
    require: true //必须
  },
  addressId: String,
  shopId: String,
  shopName: String,
  isCanceled: {
    type: Boolean,
    default: false
  },
  address:{    
    city: String,
    department: String,
    houseNumber: String,
    name: String,
    phone: String
  },
  products: [
    {
      product:{
        shopId: String,//山姆
        name: String,
        imgUrl:String,
        sales: Number,
        price: Number,
        oldPrice: Number,
        tabs:[String]
      },
      orderSales:Number
    }
  ]
  
},{ timestamps: true })


const Order = mongoose.model('order',Schema)

module.exports = Order