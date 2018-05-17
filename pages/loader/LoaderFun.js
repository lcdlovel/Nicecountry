import CrudApi from '../../utils/request/crud'
import global from "../../utils/global/global";
// const {navigation} = this.props
export default class loaderFun {
	static signIn(name, password) {
		return new Promise((resolve, reject) => {
			CrudApi.postInfo({
				url: 'auth',
				data: {
					username: name,
					password: password
				},
				callback: (res) => {
					console.log(res)
					 global.token = res.Data.token
					resolve()
				}
			})
		})
	}
}