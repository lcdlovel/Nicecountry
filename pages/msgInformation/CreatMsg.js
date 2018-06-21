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
	FlatList,
	ScrollView
} from 'react-native';
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width,height} = dimensions.get('window')
type Props = {};
export default class CreatMsg extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			itemData:[
				{name:'考核评分表',present:'介绍一下这是什么表格',url:require('../../assets/report/Assessmentscale.png')},
				{name:'自查评分表',present:'介绍一下这是什么表格',url:require('../../assets/report/Self-examinationscoretable.png')},
				{name:'检查已统计任务统计表',present:'介绍一下这是什么表格',url:require('../../assets/report/Checkthestatisticstable.png')},
				{name:'自查任务已统计任务统计表',present:'介绍一下这是什么表格',url:require('../../assets/report/Selfcheckingtaskstatisticstable.png')},
			]
		}
	}
_itemconstroct(item){
		return(
				<View style={styles.rt_item} key={item.name}>
					<View style={styles.rt_item_left}>
						<Text style={styles.rt_item_title}>{item.name}</Text>
						<Text style={styles.rt_item_present}>{item.present}</Text>
					</View>
					<View style={styles.rt_item_img}>
						<Image resizeMode='cover' source={item.url} style={styles.rt_item_img}/>
					</View>
				</View>
		)
}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.rt_img}>
					<Image resizeMode='cover'  source={require('../../assets/images/Report-backimg.jpg')} style={styles.rt_img}/>
				</View>
				<View style={styles.rt_list}>
					{this.state.itemData.map(item =>this._itemconstroct(item) )}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		height:height
	},
	rt_img:{
		width:width,
		height:200
	},
	rt_list:{
		flex:0,
		alignItems:'center',
		marginTop:-80,
	},
	rt_item:{
		width:0.95 * width,
		height:100,
		marginTop:12,
		backgroundColor: '#ffffff',
		borderRadius: 13,
		shadowColor: "rgba(0, 0, 0, 0.2)",
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowRadius: 15,
		shadowOpacity: 1,
		elevation:4,
		flex:0,
		alignItems:'center',
		justifyContent:'center',
		flexDirection:'row'
	},
	rt_item_img:{
		width:53,
		height:43
	},
	rt_item_title:{
		fontSize: 17,
		color: "#0c0c0c"
	},
	rt_item_present:{
		fontSize: 12,
		color: "#9c9c9c",
		marginTop:15
	},
	rt_item_left:{
		width:0.6 * width,
		height:55
	}
});
