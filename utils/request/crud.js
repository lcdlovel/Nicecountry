/**
 * Author: orion
 * Descrition: CRUD请求
 * Date: 2017/12/19 16:11
 * Modified by:
 * Modify time:
 */
import Requests from './requests'

class Crud extends Requests {
  static getInfo ({url: url1, data: data1, callback: callbackFn}) {
    return super.sendAjax({type: 'get', url: url1, data: data1, callback: callbackFn})
  }

  static postInfo ({url: url1, data: data1, callback: callbackFn}) {
    return super.sendAjax({type: 'post', url: url1, data: data1, callback: callbackFn})
  }

  static putInfo ({url: url1, data: data1, callback: callbackFn}) {
    return super.sendAjax({type: 'put', url: url1, data: data1, callback: callbackFn})
  }

  static deleteInfo ({url: url1, data: data1, callback: callbackFn}) {
    return super.sendAjax({type: 'delete', url: url1, data: data1, callback: callbackFn})
  }
}

export default Crud
