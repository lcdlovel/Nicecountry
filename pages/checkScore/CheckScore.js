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
export default class CheckScore extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {}
	}
	_rowconstrutor(imgSource,name,click){
		return(
			<TouchableOpacity
				activeOpacity={0.8}
				onPress={() => {
				}}>
				<View style={styles.ck_row}>
					<View style={styles.ck_item}>
						<Image style={styles.ck_png} source={imgSource}/>
						<Text style={styles.ck_font}>{name}</Text>
					</View>
					<Image style={styles.arrow} source={require('../../assets/images/arrow.png')}/>
				</View>
			</TouchableOpacity>
		)
	}
	render() {
		return (
			<View style={styles.container}>
				{this._rowconstrutor(require('../../assets/images/received.png'),'考核评分表')}
				<View></View>
				{this._rowconstrutor(require('../../assets/images/received.png'),'自查评分表')}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 0,
	},
	ck_item:{
		flex:0,
		alignItems:'center',
		paddingLeft:20,
		flexDirection:'row',
		height:45,
	},
	ck_png:{
		width: 27,
		height: 27,
	},
	ck_font:{
		marginLeft:10,
		fontSize: 14,
		color: "#313735"
	},
	ck_row:{
		flex:0,
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		borderBottomWidth:2,
		borderBottomColor:'#d4dcda',
	},
	arrow:{
		width: 10,
		height: 16,
		transform: [{rotate:'-90deg'}],
		marginRight:25
	}
});
