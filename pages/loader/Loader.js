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
	TextInput,
	TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {NavigationActions} from 'react-navigation'
import loaderFun from './LoaderFun'
import global from "../../utils/global/global";

let dimensions = require('Dimensions')
//获取屏幕宽度
let {width, height} = dimensions.get('window')

type Props = {};
export default class Loader extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			secureTextEntry: true
		}
	}

	render() {
		const {navigation} = this.props
		const resetAction = NavigationActions.init({
			index: 0,
			actions: [
				NavigationActions.navigate({
					routeName: 'Home',
				})
			]
		})
		return (
			<View style={styles.container}>
				<Image style={styles.load_image} source={require('../../assets/images/loader_top.png')}/>
				<View style={styles.nc_inputView}>
					<View style={styles.nc_input}>
						<Image style={styles.manIocn} resizeMode='contain' source={require('../../assets/images/Sign_in.png')}/>
						<TextInput
							style={styles.textInput}
							onChangeText={(username) => this.setState({username: username})}
							placeholder='请输入用户名'
							underlineColorAndroid='transparent'
							value={this.state.username}
						/>
						<TouchableOpacity
							activeOpacity={0.8}
							onPress={() => {
								this.setState({username: ''})
							}}>
							<Image style={styles.manIocn} resizeMode='contain' source={require('../../assets/images/empty.png')}/>
						</TouchableOpacity>
					</View>
					<View style={styles.nc_input}>
						<Image style={styles.manIocn} resizeMode='contain' source={require('../../assets/images/password.png')}/>
						<TextInput
							style={styles.textInput}
							onChangeText={(password) => this.setState({password})}
							placeholder='请输入密码'
							secureTextEntry={this.state.secureTextEntry}
							underlineColorAndroid='transparent'
							value={this.state.password}
						/>
						<TouchableOpacity
							activeOpacity={0.8}
							onPressIn={() => {
								this.setState({secureTextEntry: false})
							}}
							onPressOut={() => {
								this.setState({secureTextEntry: true})
							}}>
							<Image style={styles.manIocn} resizeMode='contain' source={require('../../assets/images/display.png')}/>
						</TouchableOpacity>
					</View>
					<TouchableOpacity
						onPress={() => {
							navigation.dispatch(resetAction)
							// loaderFun.signIn(this.state).then(() => {
							navigation.navigate('HomePage')
							// })
						}}>
						<LinearGradient colors={['#70daad', '#8ae8b2', '#96efb4',]}
														start={{x: 0, y: 0}}
														end={{x: 1, y: 0}}
														style={styles.load_btn}>
							<Text style={styles.load_btn_font}

							>登录</Text>
						</LinearGradient>
					</TouchableOpacity>
					<Text style={{
						fontFamily: 'Helvetica',
						fontWeight: '100',
						fontSize: 10,
						textAlign: 'center',
						marginTop: 10
					}}>已阅读并同意《美丽乡村协议》!</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: "#ffffff"
	},
	//登陆图片
	load_image: {
		width: width,
		height: height * 0.3
	},
	//登陆图片下的字体
	nc_font: {
		fontSize: 15
	},
	//输入框总体
	nc_inputView: {
		marginTop: height * 0.1
	},
	//输入框外部样式
	nc_input: {
		flex: 0,
		flexDirection: 'row',
		alignItems: 'center',
		width: 300,
		height: 50,
		// borderRadius: 30,
		borderBottomWidth: 0.5,
		borderColor: global.commonCss.borderColor,
		marginTop: 20,
	},
	//输入框内的图片
	manIocn: {
		width: 20,
		height: 20,
	},
	//输入框
	textInput: {
		height: 40,
		width: width * 0.7,
		paddingLeft: 8
	},
	//竖线
	line: {
		width: 2,
		height: 38,
		backgroundColor: "#cfdee3",
		marginLeft: 15,
		marginRight: 5
	},
	//登陆按钮
	load_btn_font: {
		fontFamily: "Helvetica",
		fontSize: 27,
		color: "#ffffff"
	},
	load_btn: {
		marginTop: height * 0.1,
		height: 50,
		borderRadius: 30,
		backgroundColor: '#14c5a0',
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center'
	},
	ygbtn: {
		marginTop: height * 0.1
	}
});
