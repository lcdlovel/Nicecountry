import CrudApi from '../../utils/request/crud'
import global from "../../utils/global/global";
// const {navigation} = this.props
const date = new Date()
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
	static addData(){
		CrudApi.postInfo({
			url:'PersonBaseInfo/addPersonBaseInfo',
			data:{
				regionId:global.User_msg.regionId,
				personTypeId:1,
				name:'love$l',
				sex:1,
				birthday:Date.parse(date) ,
				culturalLevel:'高中',
				msg:'添加数据',
				lowIncomeHousehold:true,
				fiveGuaranteesHousehold:false,
				difficultHousehold:false,
				isVeterans:false,
				other:false
			}
		}).then(res=>{
			console.log(res)
		})
	}
}