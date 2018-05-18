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
	Image
} from 'react-native';
import Banner from './banner/Banner'
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
		return (
			<View style={styles.container}>
				{/*轮播图*/}
				<Banner/>
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
					<View>
						<Image source={require('../../assets/images/message.png')} style={styles.hf_funicon}/>
						<Text>基础信息</Text>
					</View>
					<View>
						<Image source={require('../../assets/images/sasa.png')} style={styles.hf_funicon}/>
						<Text>基础信息</Text>
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
	areaMsg:{
		flex:0,
		flexDirection:'row',
		justifyContent: 'space-between',
		paddingLeft:20,
		paddingRight:20,
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
	hf_item:{
		flex:0,
		flexDirection:'row'
	},
	hf_font:{
		fontSize: 15,
	},
	hf_icon:{
		marginLeft:10,
		width: 18,
		height: 18,
	},
	hf_fun:{
		width:width,
		borderTopColor:'#d3d7d6',
		borderTopWidth:6,
		paddingTop:15,
		justifyContent:'space-around',
		flex:0,
		flexDirection:'row'
	},
	hf_funicon:{
		width: 47,
		height: 47,
	}
});
