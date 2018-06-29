import CrudApi from "../../utils/request/crud";


'user strict';
import * as types from '../constans/loginType';

export function login() {
	console.log('登录方法')
	return dispatch => {
		dispatch(isLogining())
		let resulte = CrudApi.getInfo({
				url: 'user/login',
				data: {
					username: '',
					password: '',
					clientType: '2'
				},
				callback: (res) => {
					dispatch(loginSuccess(true, user)); // 登录请求完成
				}
			}
		)
	}
}

function isLogining() {
	return {
		type: types.LOGIN_IN_DOING,

	}
}

function loginSuccess(isSuccess, user) {
	console.log('success');
	return {
		type: types.LOGIN_IN_DONE,
		user: user,
	}
}