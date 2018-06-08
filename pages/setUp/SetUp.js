/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity
} from 'react-native';
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class SetUp extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {}
	}

	_listconstractor(url, name,to) {
		const {navigation} = this.props
		return (
			<TouchableOpacity
			onPress={()=>{
				navigation.navigate(to)
			}}>
				<View style={styles.su_listRow}>
					<Image style={styles.lock} source={url}/>
					<Text>{name}</Text>
				</View>
			</TouchableOpacity>
		)
	}

	render() {
		return (
			<View style={styles.container}>
				{this._listconstractor(require('../../assets/images/revisePassWord.png'), '修改密码','ReceivedCheck')}
				{this._listconstractor(require('../../assets/images/qrcode.png'), '二维码下载','QrCodeDown')}
				{this._listconstractor(require('../../assets/images/logout.png'), '退出系统')}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
	lock: {
		width: 30,
		height: 30
	},
	su_listRow: {
		flex: 0,
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 20,
		height: 40,
		borderWidth: 1,
		borderColor: '#d4dcda'
	}
});
