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
 import global from "../../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class AllCleaner extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			listData:[
				{name:'男性',number:1},
				{name:'女性',number:16},
				{name:'平均年龄',number:16}
			],
			listData2:[
				{name:'低保户',number:10},
				{name:'五保户',number:11},
				{name:'困难户',number:12},
				{name:'退役军人',number:14},
			],
			listData3:[
				{name:'其他',number:9},
			]
		}
	}
_itemList(item){
		return(
			<View style={styles.clear_item}>
				<View style={styles.item_left}>
					<View style={styles.circleDot}></View>
					<Text style={{fontSize: 17,}}>{item.name}</Text>
				</View>
				<View>
					<Text style={{fontSize: 17,}}>{item.number}人</Text>
				</View>
			</View>
		)
}
	render() {
		const {navigation} = this.props
		return (
			<View style={styles.container}>
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={() => {
						navigation.navigate('MsgList',{title:'保洁员信息',headList:['姓名','性别','年龄']})
					}}>
				<View style={styles.header}>
					<Text style={styles.header_item}>查看详情列表</Text>
					<Image style={styles.img} source={require('../../../assets/images/small-Return.png')}/>
					<Image style={styles.img} source={require('../../../assets/images/small-Return.png')}/>
				</View>
				</TouchableOpacity>
				<View style={styles.ac_content}>
					{this.state.listData.map(item => this._itemList(item))}
					<View style={styles.line}></View>
					{this.state.listData2.map(item => this._itemList(item))}
					<View style={styles.line}></View>
					{this.state.listData3.map(item => this._itemList(item))}
					{/*<View style={styles.clear_item}>*/}
						{/*<View style={styles.item_left}>*/}
							{/*<View style={styles.circleDot}></View>*/}
							{/*<Text style={{fontSize: 17,}}>男性</Text>*/}
						{/*</View>*/}
						{/*<View>*/}
							{/*<Text style={{fontSize: 17,}}>1人</Text>*/}
						{/*</View>*/}
					{/*</View>*/}
				</View>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
	clear_item:{
		height:50,
		flex:0,
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center'
	},
	circleDot:{
		width: 10,
		height: 10,
		borderRadius:8,
		marginRight:5,
		borderColor:global.commonCss.mainColor,
		borderWidth:1
	},
	item_left:{
		flex:0,
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center'
	},
	header:{
		height:50,
		flex:0,
		flexDirection:'row',
		alignItems:'center',
		backgroundColor:'#ffffff',
		paddingLeft:15
	},
	img:{
		width:12,
		height:15
	},
	header_item:{
		fontSize: 17,
		color: global.commonCss.mainColor
	},
	ac_content:{
		marginTop:12,
		paddingLeft:15,
		paddingRight:15,
		backgroundColor:'#ffffff',
		shadowColor: "rgba(0, 0, 0, 0.2)",
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowRadius: 15,
		shadowOpacity: 1,
		elevation:4,
	},
	line:{
		height:1,
		backgroundColor:global.commonCss.borderColor
	}
});
