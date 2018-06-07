import CrudApi from '../../utils/request/crud'
import global from "../../utils/global/global";
// const {navigation} = this.props
export default class loaderFun {
	static signIn(name, password) {
		return new Promise((resolve, reject) => {
			CrudApi.postInfo({
				url: 'user/login',
				data: {
					username: name,
					password: password,
					clientType:'2'
				},
				callback: (res) => {
					 global.token = res.data.token
					resolve()
				}
			})
		})
	}
}