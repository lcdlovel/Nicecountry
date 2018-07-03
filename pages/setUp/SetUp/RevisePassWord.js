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
	TextInput,
	TouchableOpacity,
	Image
} from 'react-native';
import Point from '../../common/Point'
import global from "../../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class RevisePassWord extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			secureTextEntry: true,
			listData: [
				{name: '原密码', placeholder: '请输入', secureTextEntry: '',},
				{name: '新登录密码', placeholder: '请输入8位数密码', secureTextEntry: '',},
				{name: '重复新密码', placeholder: '请输入8位数密码', secureTextEntry: '',}
			]
		}
	}

	_rowItem(item) {
		return (
			<View style={styles.rp_item}>
				<View style={styles.rp_oneth}>
					<Point/>
					<Text style={styles.rp_name}>{item.name}</Text>
				</View>
				<View style={styles.nc_input}>
					<TextInput placeholder='请输入'
										 placeholderTextColor='#9c9c9c'
										 style={styles.text_Input}
										 secureTextEntry={this.state.secureTextEntry}
										 underlineColorAndroid='transparent'
					/>
					<TouchableOpacity
						activeOpacity={0.8}
						onPressIn={() => {
							this.setState({secureTextEntry: false})
						}}
						onPressOut={() => {
							this.setState({secureTextEntry: true})
						}}>
						<Image style={styles.manIocn} resizeMode = 'contain' source={require('../../../assets/images/empty.png')}/>
					</TouchableOpacity>
				</View>
			</View>
		)
	}

	render() {
		return (
			<View style={styles.container}>
				{this.state.listData.map((item)=>
					this._rowItem(item)
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
	rp_item: {
		paddingLeft: 15,
		marginTop: 15
	},
	rp_oneth: {
		flex: 0,
		height: 15,
		flexDirection: 'row',
		alignItems: 'center'
	},
	rp_name: {
		fontSize: 17,
		marginLeft: 8
	},
	text_Input: {
		width: width * 0.85,
		paddingBottom: 0
	},
	nc_input: {
		flex: 0,
		marginLeft: 8,
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 0.5,
		borderColor: global.commonCss.borderColor,
	},
	manIocn: {
		width: 20,
		height: 20,
		marginBottom: 0
	},
});
