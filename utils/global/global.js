import {
    PixelRatio,
    Dimensions,
    Platform,StyleSheet
} from 'react-native';
import ScreenUtil from './ScreenUtil'

 let screenW = Dimensions.get('window').width;
 let screenH = Dimensions.get('window').height;
// iPhoneX
const X_WIDTH = 375;
const X_HEIGHT = 812;
const styles = StyleSheet.create({
    /**
	 * 页面顶部右边按钮信息
     */
    confirm_btn:{
        fontSize:18,
        color:'rgb(112,218,173)',
        right:ScreenUtil.pTd(32)
    },
})
export default {
	token: '',
	User_msg: '',
	SUCCESS: 0, // 成功请求
	ERROR: 1, // 错误请求
	ILLEGAL_ARGUMENT: 2, // 参数错误
	NEED_LOGIN: 10, // 需要重新登录
    ScreenUtil:ScreenUtil, //屏幕适配
	Cleaner_ContractType: 2,
	Normal_ContractType: 3,
	commonCss: {
        fontFamily: "Helvetica",
		borderColor: '#dddddd',
		mainColor: 'rgb(112,218,173)',
		fontColor: '#666666',
		screenColor: '#fafafa',
		mainFontSize:16,
		primaryFontSize:18,
		confirmBtnFontSize:18,
		titleFontSize:15,
        textInputSize:15,
		navigationFontSize:20,
		lineColor:'#ddd',
		lineWidth:ScreenUtil.hTd(0.5),
        confirm_btn:styles.confirm_btn,
	},

	uploadUrl: 'http://192.168.0.128:9090/beautifulCountry-v2.0/File/upload',

    /**
	 * 判断是不是iponeX
     * @returns {boolean}
     */
    isIphoneX() {
        return (
            Platform.OS === 'ios' &&
            ((screenH === X_HEIGHT && screenW === X_WIDTH) ||
                (screenH === X_WIDTH && screenW === X_HEIGHT))
        )
    },

	/**方法*/
	changeUnix(unixTime) {
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
	elementDropT(Time) {
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
	mapToJson(strMap) {
		let obj = Object.create(null);
		for (let [k, v] of strMap) {
			obj[k] = v;
		}
		return JSON.stringify(obj);
	}
}

{/*<TouchableHighlight activeOpacity={0.8} style={styles.basic_type} key={item.name}>*/
}
{/*<View>*/
}
{/*<Image source={item.url} style={styles.basic_img}/>*/
}
{/*<View style={styles.basic_line}></View>*/
}
{/*<Text>{item.name}</Text>*/
}
{/*</View>*/
}
{/*</TouchableHighlight>*/
}

{/*<View style={styles.bd_tabItem}>*/
}
{/*<View style={styles.point}></View>*/
}
{/*<Text>名称</Text>*/
}
{/*</View>*/
}
{/*<View style={styles.bd_tabItem}>*/
}
{/*<View style={styles.point}></View>*/
}
{/*<Text>尺寸</Text>*/
}
{/*</View>*/
}
{/*<View style={styles.bd_tabItem}>*/
}
{/*<View style={styles.point}></View>*/
}
{/*<Text>数量</Text>*/
}
{/*</View>*/
}