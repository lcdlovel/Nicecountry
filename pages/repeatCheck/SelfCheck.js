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
export default class SelfCheck extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {}
	}
	_rowconstrutor(imgSource,name,routeName){
		const {navigation} = this.props
		return(
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={() => {
					navigation.navigate(routeName,{fromCheck:'SelfCheckTask'})
				}}>
				<View style={styles.ck_row}>
					<View style={styles.ck_item}>
						<Image style={styles.ck_png} source={require('../../assets/images/Receivedtask.png')}/>
					</View>
					<Text style={styles.ck_font}>{name}</Text>
				</View>
			</TouchableOpacity>
		)

	}
	render() {
		return (
			<View style={styles.container}>
				{this._rowconstrutor(require('../../assets/images/Createatask.png'),'填写自查','AddTextArea')}
				{this._rowconstrutor(require('../../assets/images/Receivedtask.png'),'已接受自查','ReceviedCheck')}
				{this._rowconstrutor(require('../../assets/images/Senttask.png'),'已发送自查','ReceviedCheck')}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems:'center',
		backgroundColor: '#F5FCFF',
	},
	ck_item:{
		flex:0,
		alignItems:'center',
		paddingLeft:20,
		flexDirection:'row',
		height:45,
	},
	ck_png:{
		width: 53,
		height: 35,
	},
	ck_font:{
		marginLeft:10,
		fontSize: 17,
		color: "#313735"
	},
	ck_row:{
		flex:0,
		flexDirection:'row',
		// justifyContent:'center',
		width:0.9 * width,
		height: 70,
		paddingLeft: 15,
		alignItems:'center',
		borderRadius: 7,
		backgroundColor: "#ffffff",
		shadowColor: "rgba(68, 68, 68, 0.2)",
		shadowOffset: {
			width: 0,
			height: 0
		},
		elevation:2,
		shadowRadius: 8,
		shadowOpacity: 1,
		marginTop:10,
		marginBottom: 6,
		marginLeft:4,
		marginRight:4
	},
	arrow:{
		width: 10,
		height: 16,
		transform: [{rotate:'-90deg'}],
		marginRight:25
	}
});
