/**
 * Author: orion
 * Descrition: axios配置
 * Date: 2017/12/19 16:04
 * Modified by:
 * Modify time:
 */
import axios from './interceptors'
import {baseUrl} from './url'
import global from '../global/global'
axios.defaults.baseURL = baseUrl
axios.defaults.headers.common['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.withCredentials = true
// axios.defaults.headers.common['crossDomain'] = true

class Requests {
  static sendAjax ({type: type1, url: url1, data: data1, callback: callbackFn}) {
		if (global.token !=='') {
			axios.defaults.headers.common['token'] = global.token
			console.log(global.token)
		} else {
			console.log('登录中')
		}
    let datas = ''
    type1 === 'get' ? datas = {params: data1} : datas = data1
		console.log('这是sendAjax')
		console.log(url1)
		console.log(data1)
    return new Promise((resolve, reject) => {
      axios[type1](url1, datas)
        .then((res) => {
					// console.log(res)
          if (res) {
            if (callbackFn) {
              callbackFn(res.data)
            }
            resolve(res.data)
          } else { // status不为0
            reject(res)
          }
        })
        // 404，500等错误
        .catch((res) => {
          reject(res)
        })
    })
  }
}

export default Requests
