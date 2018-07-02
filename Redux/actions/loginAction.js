import CrudApi from "../../utils/request/crud";


'user strict';
import * as types from '../constans/loginType';

export default  function login() {
	console.log('登录方法')
	return dispatch => {
		dispatch(isLogining())
	}
}

function isLogining() {
	return {
		type: types.LOGIN_IN_DOING,
	}
}

function loginSuccess(isSuccess) {
	console.log('success');
	return {
		type: types.LOGIN_IN_DONE,
	}
}