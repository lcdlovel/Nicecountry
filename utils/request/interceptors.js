
import axios from 'axios'
import Golbals from '../global/global'


axios.interceptors.response.use(
  (response) => {
    alert('拦截器')
    if (!response.hasOwnProperty('data') ||
      !response.data.hasOwnProperty('Status') ||
      response.data.Status !== 0) {
      // 状态码对应关系
      let statusList = {
        0: '请求成功',
        1: '请求错误',
        2: '参数错误',
        3: '无权限访问',
        10: '用户未登录,请登录'
      }
      // 失败提示信息
      let message = ''
      // if (response.data.hasOwnProperty('Msg')) {
      //   message = response.data.Msg
      // } else {
      //   if (response.data.hasOwnProperty('Status') && statusList[response.data.Status]) {
      message = statusList[response.data.Status]
      //   } else {
      //     message = '请求错误'
      //   }
      // }
     alert(message)
      // 如果身份失效，则跳转到登陆界面
      const {navigation} = this.props
      if (response.data.Status === Golbals.NEED_LOGIN) {
        // TODO: 实现跳转逻辑
        navigation.navigate()
      }
      return
    }

    // 如果有list，则检查是否长度为0
    if (response.data.hasOwnProperty('data') &&
      response.data.data.hasOwnProperty('list') &&
      (response.data.data.list === null ||
      response.data.data.list.length <= 0)) {
       let message =  '查询不到相关内容'
			alert(message)
      }
    return response
  },
  (error) => {
    alert('error')
    if (error.response) {
      switch (error.response.status) {
        case 401: {
					let message =  '请求失败,请检查用户权限 ! (401)'
					alert(message)
        } break;
      }
    }
    return Promise.reject(error)
  })

export default axios
