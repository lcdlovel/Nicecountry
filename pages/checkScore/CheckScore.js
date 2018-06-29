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
import global from "../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class CheckScore extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {}
	}
	_rowconstrutor(imgSource,name,url){
		const {navigation} = this.props
		return(
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={() =>
					navigation.navigate(url)
				}>
				<View style={styles.ck_row}>
					<View style={styles.ck_item}>
						<Image style={styles.ck_png} source={imgSource}/>
						<View style={styles.line}></View>
						<Text style={styles.ck_font}>{name}</Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	}
	render() {
		return (
			<View style={styles.container}>
				{this._rowconstrutor(require('../../assets/images/Assessmentscale.png'),'考核评分表','RecoScore')}
				{this._rowconstrutor(require('../../assets/images/Self-examinationscoretable.png'),'自查评分表','Selfexamination')}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor:'#FFFFFF'
	},
	ck_item:{
		marginTop:15,
		marginBottom:2,
		flex:0,
		width:0.95 * width,
		alignItems:'center',
		justifyContent:'center',
		height: 186,
		borderRadius:10,
		shadowOffset: {width: 0, height: 5},
		shadowOpacity: 0.5,
		shadowRadius: 5,
		shadowColor: 'gray',
		elevation: 1,
	},
	ck_png:{
		width: 155,
		height: 108
	},
	ck_font:{
		marginLeft:10,
		fontSize: 14,
		color: "#313735"
	},
	ck_row:{
		flex:0,
		justifyContent:'center',
		alignItems:'center',
		width:width
	},
	arrow:{
		width: 10,
		height: 16,
		transform: [{rotate:'-90deg'}],
		marginRight:25
	},
	line:{
		width:0.8 * width,
		marginTop:15,
		marginBottom:15,
		height:0.7,
		backgroundColor:global.commonCss.borderColor
	}
});
