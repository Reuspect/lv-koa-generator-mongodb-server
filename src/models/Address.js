/**
 * @description Address Model
 * @author 艹
 * 
 */


 const mongoose = require('../db/db')

// address 的 schema id先不管
const Schema = mongoose.Schema({
  username:String,
  city: String,
  department: String,
  houseNumber: String,
  name: String,
  phone: String
},{
  timestamps: true
})


const Address = mongoose.model('address', Schema)

module.exports = Address