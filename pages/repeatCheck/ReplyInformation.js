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
import Point from '../common/Point'
import ImgList from '../common/ImgList'
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class ReplyInformation extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<ScrollView>
			<View style={styles.container}>
				<View style={styles.item_header}>
					<Point pointColor={styles.pointColor}/>
					<Text style={styles.header_text}>内容</Text>
				</View>
				<View style={styles.text_content}></View>
				<ImgList url={require('../../assets/News/201806141307.jpg')} imgsStyle={styles.imgs_style} titleStyle={styles.allimg_title}/>
				<View style={styles.item_header}>
					<Point pointColor={styles.pointColor}/>
					<Text style={styles.header_text}>回复内容</Text>
				</View>
				<View  style={styles.text_content}></View>
				{/*拍照或图片选择*/}
				<View style={styles.pictrue}>
					<View style={styles.two_choose}>
						<View style={styles.choose_item}>
							<Image resizeMode='contain'  style={styles.img} source={require('../../assets/report/Assessmentscale.png')}/>
							<Text style={styles.font}>拍照</Text>
						</View>
						<View style={styles.choose_item}>
							<Image resizeMode='contain' style={styles.img} source={require('../../assets/report/Assessmentscale.png')}/>
							<Text style={styles.font}>选择图片</Text>
						</View>
					</View>
				</View>
				<Text style={styles.img_limit}>最多10张照片</Text>
				<ImgList titleStyle={styles.title_style} imgsStyle={styles.imgs_style} url={require('../../assets/News/201806141307.jpg')}/>
			</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems:'center',
		backgroundColor: '#F5FCFF',
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
		paddingLeft:0.025 * width
	}
});
