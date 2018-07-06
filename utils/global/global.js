

export default {
	token:'',
	User_msg:'',
	SUCCESS: 0, // 成功请求
	ERROR: 1, // 错误请求
	ILLEGAL_ARGUMENT: 2, // 参数错误
	NEED_LOGIN: 10, // 需要重新登录
	Cleaner_ContractType:2,
	Normal_ContractType:3,
	commonCss:{
		borderColor:'#eeeeee',
		mainColor:'#91e6bb',
		fontColor:'#666666',
		screenColor:'#fafafa'
	},
	uploadUrl:'http://192.168.0.128:9090/beautifulCountry-v2.0/File/upload',
	changeUnix (unixTime) {
		let date = new Date(unixTime)
		let Y = ''
		let M = ''
		let D = ''
		let h = ''
		let m = ''
		let s = ''
		Y = date.getFullYear() + '-'
		M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
		D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' '
		h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':'
		m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':'
		s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()) + ''
		return (Y + M + D + h + m + s)
	},
	/**
	 * 去除时间中的T符号
	 * @param Time
	 * @returns {string|*}
	 */
	elementDropT (Time) {
		let d = new Date(Time)
		let year = d.getFullYear()
		let month = d.getMonth() + 1
		month = month < 10 ? ('0' + month) : month
		let day = d.getDate()
		day = day < 10 ? ('0' + day) : day
		let hour = d.getHours()
		hour = hour < 10 ? ('0' + hour) : hour
		let minutes = d.getMinutes()
		minutes = minutes < 10 ? ('0' + minutes) : minutes
		let second = d.getSeconds()
		second = second < 10 ? ('0' + second) : second
		let time = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + second
		Time = time
		return Time
	},
}

{/*<TouchableHighlight activeOpacity={0.8} style={styles.basic_type} key={item.name}>*/}
{/*<View>*/}
{/*<Image source={item.url} style={styles.basic_img}/>*/}
{/*<View style={styles.basic_line}></View>*/}
{/*<Text>{item.name}</Text>*/}
{/*</View>*/}
{/*</TouchableHighlight>*/}

{/*<View style={styles.bd_tabItem}>*/}
{/*<View style={styles.point}></View>*/}
{/*<Text>名称</Text>*/}
{/*</View>*/}
{/*<View style={styles.bd_tabItem}>*/}
{/*<View style={styles.point}></View>*/}
{/*<Text>尺寸</Text>*/}
{/*</View>*/}
{/*<View style={styles.bd_tabItem}>*/}
{/*<View style={styles.point}></View>*/}
{/*<Text>数量</Text>*/}
{/*</View>*/}