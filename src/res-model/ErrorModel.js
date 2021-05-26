/**
 * @description 错误时返回的数据模型
 */

class ErrorModel {
  constructor(errno = -1, message ='error'){
    this.errno = errno
    this.message = message
  } 
}

module.exports = ErrorModel