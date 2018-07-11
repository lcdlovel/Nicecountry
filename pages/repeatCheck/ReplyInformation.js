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
	ScrollView
} from 'react-native';
import {Point,PickPhoto,ImgList,Describe} from '../common'
import global from "../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class ReplyInformation extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			reactData:""
		}
	}
	changeDescribe(data){
		this.setState({reactData:data})
	}
	render() {
		return (
			<ScrollView style={{flex:1,backgroundColor:global.commonCss.screenColor}}>
			<View style={styles.container}>
				<View style={styles.item_header}>
					<Point pointColor={styles.pointColor}/>
					<Text style={styles.header_text}>内容</Text>
				</View>
				<View style={styles.text_content}></View>
				<ImgList imageList={[require('../../assets/News/201806141307.jpg')]} imgsStyle={styles.imgs_style} titleStyle={styles.allimg_title}/>
				<View style={styles.item_header}>
					<Point pointColor={styles.pointColor}/>
					<Text style={styles.header_text}>回复内容</Text>
				</View>
				<View  >
					<Describe
						changeDescribe={this.changeDescribe.bind(this)}
						fontLength={this.state.reactData.length}
						customStyle={styles.customStyle}
						maxLength={300}
					/>
				</View>
				{/*拍照或图片选择*/}
				<PickPhoto positionStyle={styles.photo_area} maxLength={10}/>
			</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 0,
		alignItems:'center',
		backgroundColor: global.commonCss.screenColor,
		paddingBottom:20
	},
	item_header:{
		flex:0,
		width:width,
		flexDirection:'row',
		alignItems:'center',
		height:45,
		paddingLeft:10
	},
	header_text:{
		fontSize: 17,
		color: "#0c0c0c",
		paddingLeft:10
	},
	text_content:{
		height:80,
		width:0.95 * width,
		borderRadius:10,
		backgroundColor:'#ffffff'
	},
	pictrue:{
		width:width
	},
	two_choose:{
		width:0.6 * width,
		marginTop:15,
		marginLeft:0.025 * width,
		height:80,
		backgroundColor:'#ffffff',
		borderRadius:10,
		flex:0,
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center'
	},
	img:{
		width: 48,
		height: 30
	},
	font:{
		fontSize: 15,
	},
	choose_item:{
		width:100,
		alignItems:'center',
		justifyContent:'center'
	},
	img_limit:{
		width:width,
		marginLeft:0.05 * width,
		color:'#c6c6c6',
		fontSize: 12,
		marginTop:7
	},
	title_style:{
		display:'none',
	},
	imgs_style:{
		width:0.95 * width
	},
  allimg_title:{
		paddingLeft:0.025 * width,
		marginTop:10
	},
	photo_area: {
		marginLeft: 20,
	},
	customStyle:{
		width:0.95 * width
	}
});
