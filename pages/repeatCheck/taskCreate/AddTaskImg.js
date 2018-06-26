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
import global from "../../../utils/global/global";
import Point from '../../common/Point'
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {
};
export default class AddTaskImg extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			data:[0,1,2,3,4,5,6,7,8,9]
		}
	}

	render() {
		return (
			<ScrollView>
			<View style={styles.container}>
				{/*内容的显示*/}
				<View style={styles.item_header}>
					<Point pointColor={styles.pointColor}/>
					<Text style={styles.header_text}>内容</Text>
				</View>
				<View style={styles.choosed_cot}>

				</View>
				{/*回复内容*/}
				<View style={styles.item_header}>
					<Point pointColor={styles.pointColor}/>
					<Text style={styles.header_text}>回复内容</Text>
				</View>
				<View style={styles.text_Input}>
					<View style={styles.font_num}>
						<Text>0/300字</Text>
					</View>
				</View>
				{/*拍照或图片选择*/}
				<View style={styles.pictrue}>
					<View style={styles.two_choose}>
						<View style={styles.choose_item}>
							<Image resizeMode='contain'  style={styles.img} source={require('../../../assets/report/Assessmentscale.png')}/>
							<Text style={styles.font}>拍照</Text>
						</View>
						<View style={styles.choose_item}>
							<Image resizeMode='contain' style={styles.img} source={require('../../../assets/report/Assessmentscale.png')}/>
							<Text style={styles.font}>选择图片</Text>
						</View>
					</View>
				</View>
				<Text style={styles.img_limit}>最多10张照片</Text>
				<View style={styles.imgs}>
					{this.state.data.map(item => (<Image source={require('../../../assets/News/201806141307.jpg')} style={styles.example_img}/>))}
				</View>
			</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: global.commonCss.screenColor,
		alignItems:'center',
		paddingBottom:20
	},
	item_header:{
		flex:0,
		width:width,
		flexDirection:'row',
		alignItems:'center',
		height:40,
		paddingLeft:20
	},
	header_text:{
		fontSize: 17,
		color: "#0c0c0c",
		paddingLeft:10
	},
	choosed_cot:{
		width:0.95 * width,
		height:80,
		backgroundColor:'#ffffff',
		borderRadius:10
	},
	text_Input:{
		width:0.95 * width,
		height:150,
		backgroundColor:'#ffffff',
		borderRadius:10
	},
	font_num:{
		justifyContent:'flex-end'
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
	imgs:{
		width:0.95 * width,
		flexDirection:'row',
		flexWrap:'wrap'
	},
	example_img:{
		width:0.22 * width,
		height:40,
		marginRight:6,
		marginTop:5
	}
});
