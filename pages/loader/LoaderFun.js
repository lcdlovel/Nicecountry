import CrudApi from '../../utils/request/crud'
import global from "../../utils/global/global";
// const {navigation} = this.props
export default class loaderFun {
	static signIn(data) {
		const {username, password} = data
		return new Promise((resolve, reject) => {
			CrudApi.postInfo({
				url: 'user/login',
				data: {
					username: username,
					password: password,
					clientType: '2'
				},
				callback: (res) => {
					global.token = res.data.token
					global.User_msg = res.data.user
					resolve(res)
				}
			})
		})
	}
}