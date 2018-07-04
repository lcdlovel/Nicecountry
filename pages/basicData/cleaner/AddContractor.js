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
	TextInput,
	Image,
	ScrollView
} from 'react-native';
import Point from '../../common/Point'
import ImgList from '../../common/ImgList'
import global from "../../../utils/global/global";
import {PickPhoto,Describe} from '../../common'
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class AddContractor extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			describe:''
		}
	}
	changeDescribe(val){
		this.setState({describe:val})
		console.log(this.state.describe)
	}
	render() {
		return (

			<ScrollView style={styles.container}>
				<View style={styles.contractMsg}>
					<Text style={styles.zuName}>熊庄村(熊庄组)熊庄组户数哈哈哈哈哈哈哈哈岂不是更方便</Text>
					<Text style={styles.constractType}>分类:基础信息合同</Text>
				</View>
				<View style={styles.title}>
					<Point/>
					<Text style={styles.name}>名称</Text>
				</View>
				<View>
					<TextInput placeholder='请输入' style={styles.constructName}/>
				</View>
				<View style={styles.title}>
					<Point/>
					<Text style={styles.name}>描述</Text>
				</View>
				<View style={styles.discribe}>
					<Describe
						changeDescribe={this.changeDescribe.bind(this)}
						fontLength={this.state.describe.length}
						maxLength={300}
						customStyle={styles.describe}
					/>
				</View>
				<PickPhoto maxLength={10}/>
				{/*<View style={styles.pictrue}>*/}
					{/*<View style={styles.two_choose}>*/}
						{/*<View style={styles.choose_item}>*/}
							{/*<Image resizeMode='contain' style={styles.img}*/}
										 {/*source={require('../../../assets/report/Assessmentscale.png')}/>*/}
							{/*<Text style={styles.font}>拍照</Text>*/}
						{/*</View>*/}
						{/*<View style={styles.choose_item}>*/}
							{/*<Image resizeMode='contain' style={styles.img}*/}
										 {/*source={require('../../../assets/report/Assessmentscale.png')}/>*/}
							{/*<Text style={styles.font}>选择图片</Text>*/}
						{/*</View>*/}
					{/*</View>*/}
				{/*</View>*/}
				{/*<Text style={styles.img_limit}>最多10张照片</Text>*/}
				{/*<ImgList titleStyle={styles.title_style} imgsStyle={styles.imgs_style}*/}
								 {/*url={require('../../../assets/News/201806141307.jpg')}/>*/}
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
		paddingBottom:20
	},
	zuName: {
		fontSize: 17,
		color:global.commonCss.mainColor
	},
	contractMsg: {
		flex: 0,
		height: 95,
		paddingLeft: 20,
		backgroundColor: '#ffffff',
		justifyContent: 'center',
		shadowColor: "rgba(156, 156, 156, 0.45)",
		shadowOffset: {
			width: 0,
			height: 0
		},
		shadowRadius: 9,
		shadowOpacity: 1,
		elevation: 2,
		marginBottom: 1
	},
	title: {
		flex: 0,
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 10,
		paddingTop: 5
	},
	name: {
		fontSize: 17,
		paddingLeft: 6
	},
	constructName: {
		marginLeft: 15
	},
	discribe: {
		marginLeft: 10,
		marginRight: 10,
		marginTop: 5,
		marginBottom: 1,
		borderRadius: 5,
		height: 100,
		backgroundColor: '#fff',
		shadowColor: "rgba(156, 156, 156, 0.45)",
		shadowOffset: {
			width: 0,
			height: 0
		},
		shadowRadius: 9,
		shadowOpacity: 1,
		elevation: 2,
	},
	pictrue: {
		width: width
	},
	two_choose: {
		width: 0.6 * width,
		marginTop: 15,
		marginLeft: 0.025 * width,
		height: 80,
		backgroundColor: '#ffffff',
		borderRadius: 10,
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	img: {
		width: 48,
		height: 30
	},
	font: {
		fontSize: 15,
	},
	choose_item: {
		width: 100,
		alignItems: 'center',
		justifyContent: 'center'
	},
	img_limit: {
		width: width,
		marginLeft: 0.05 * width,
		color: '#c6c6c6',
		fontSize: 12,
		marginTop: 7
	},
	title_style: {
		display:'none'
	},
	imgs_style: {
		width: width,
		paddingLeft:15,
		paddingRight:15
	},
	constractType:{
		marginTop:15
	}
});
