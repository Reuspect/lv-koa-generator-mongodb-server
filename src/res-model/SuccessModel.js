/**
 * @description 成功时返回的数据模型
 */

class SuccessModel {
  constructor(data){
    this.errno = 0
    if(data){
      this.data = data
    }
  } 
}

module.exports = SuccessModel