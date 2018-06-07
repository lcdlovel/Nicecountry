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
import Banner2 from './banner/Banner2'
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')

type Props = {};
export default class HomePage extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		const {navigation} = this.props
		return (
			<View style={styles.container}>
				{/*轮播图*/}
				<Banner2/>
				{/*中间信息*/}
				<View style={styles.areaMsg}>
					<View style={styles.hf_item}>
						<Text style={styles.hf_font}>当前区域:</Text>
						<Text>{}</Text>
					</View>
					<View style={styles.hf_item}>
						<Text style={styles.hf_font}>添加组名</Text>
						<Image source={require('../../assets/images/add.png')} style={styles.hf_icon}/>
					</View>
				</View>
				{/*显示有哪些功能模块*/}
				<View style={styles.hf_fun}>
					<View style={styles.fun_item}>
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() => {
								navigation.navigate('BasicData')
							}}>
							<Image source={require('../../assets/images/message.png')}
										 style={styles.hf_funicon}
										 onPress={() => {
											 navigation.navigate('')
										 }}
							/>
						</TouchableOpacity>
						<Text style={styles.fun_font}>基础信息</Text>
					</View>
					<View style={styles.fun_item}>
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() => {
								navigation.navigate('RepeatCheckTab')
							}}>
							<Image source={require('../../assets/images/check.png')} style={styles.hf_funicon}/>
						</TouchableOpacity>
						<Text style={styles.fun_font}>检查自查</Text>
					</View>
					<View style={styles.fun_item}>
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() => {
								navigation.navigate('CheckScore')
							}}>
							<Image source={require('../../assets/images/inform.png')} style={styles.hf_funicon}/>
							<Text style={styles.fun_font}>考核评分</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.fun_item}>
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() => {
								navigation.navigate('MsgInfomation')
							}}>
							<View style={styles.msgInformation}>
								<Image source={require('../../assets/images/sasa.png')} style={styles.hf_funicon}/>
							</View>
							<Text style={styles.fun_font}>文件通知</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.fun_item}>
						<Image source={require('../../assets/images/signIn.png')} style={styles.hf_funicon}/>
						<Text style={styles.fun_font}>人脸签到</Text>
					</View>
					<View style={styles.fun_item}>
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() => {
								navigation.navigate('SetUp')
							}}>
							<View style={styles.setUp}>
								<Image source={require('../../assets/images/setUp.png')} style={styles.hf_funicon}/>
								<Text style={styles.fun_font}>设置</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	areaMsg: {
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: 20,
		paddingRight: 20,
		alignItems: 'center',
		width: width,
		height: 50,
		backgroundColor: "#ffffff",
		shadowColor: "rgba(94, 108, 104, 0.27)",
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowRadius: 0,
		shadowOpacity: 1
	},
	hf_item: {
		flex: 0,
		flexDirection: 'row'
	},
	hf_font: {
		fontSize: 15,
	},
	hf_icon: {
		marginLeft: 10,
		width: 18,
		height: 18,
	},
	hf_fun: {
		width: width,
		borderTopColor: '#d3d7d6',
		borderTopWidth: 6,
		paddingTop: 15,
		justifyContent: 'space-around',
		flex: 0,
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	hf_funicon: {
		width: 47,
		height: 47,
	},
	fun_item: {
		marginTop: 8,
		width: 1 / 3 * width,
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center'
	},
	fun_font: {
		fontSize: 16,
		marginTop: 3,
		textAlign: 'center',
		color: "#364a51"
	},
	msgInformation: {
		paddingLeft: 10
	},
	setUp: {
		paddingRight: 10
	}
});
