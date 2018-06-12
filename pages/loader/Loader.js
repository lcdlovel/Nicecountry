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
} from 'react-native';
import YgButton from '../common/YgButton'
import loaderFun from './LoaderFun'

type Props = {};
export default class Loader extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
				username: '',
				password: ''
		}
	}
	render() {
		const {navigation} = this.props
		return (
			<View style={styles.container}>
				<Image style={styles.load_image} source={require('../../assets/images/nc_loader.png')}/>
				<Text style={styles.nc_font}>美丽乡村</Text>
				<View style={styles.nc_inputView}>
					<View style={styles.nc_input}>
						<Image style={styles.manIocn} source={require('../../assets/images/manIocn.png')}/>
						<View style={styles.line}></View>
						<TextInput
							style={styles.textInput}
							onChangeText={(username) => this.setState({username})}
							placeholder='请输入用户名'
							underlineColorAndroid='transparent'
							value={this.state.username}
						/>
					</View>
					<View style={styles.nc_input}>
						<Image style={styles.manIocn} source={require('../../assets/images/password.png')}/>
						<View style={styles.line}></View>
						<TextInput
							style={styles.textInput}
							onChangeText={(password) => this.setState({password})}
							placeholder='请输入密码'
							underlineColorAndroid='transparent'
							value={this.state.password}
						/>
					</View>
					<View>
						<YgButton
							title='登录'
							onPress={()=>{
								loaderFun.signIn(this.state.username,this.state.password)
									.then(()=>{
										navigation.navigate('HomePage')
									})
							}}
							fontstyle={styles.load_btn_font}
							btnstyle={styles.load_btn}
						/>
					</View>
				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	//登陆图片
	load_image: {
		width: 80.5,
		height: 80.5,
	},
	//登陆图片下的字体
	nc_font: {
		fontSize: 15
	},
	//输入框总体
	nc_inputView: {},
	//输入框外部样式
	nc_input: {
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: 300,
		height: 50,
		borderRadius: 30,
		marginTop: 20,
		backgroundColor: "#ffffff"
	},
	//输入框内的图片
	manIocn: {
		width: 30.5,
		height: 37,
	},
	//输入框
	textInput: {
		height: 40,
		width: 200,
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
	load_btn_font:{
		textAlign:'center',
		lineHeight:50,
		fontFamily: "SourceHanSansCN-Normal",
		fontSize: 27,
		color: "#ffffff"
	},
	load_btn:{
		width: 300,
		height: 50,
		borderRadius: 30,
		marginTop: 20,
		backgroundColor:'#14c5a0',
	}
});
