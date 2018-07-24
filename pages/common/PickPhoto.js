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
import ImaList from '../common/ImgList'
import global from "../../utils/global/global";
var ImagePicker = require('react-native-image-picker');
import axios from 'axios'
var options = {
	title: '请选择图片来源',
	cancelButtonTitle:'取消',
	takePhotoButtonTitle:'拍照',
	chooseFromLibraryButtonTitle:'相册图片',
	customButtons: [
		{name: 'hangge', title: 'hangge.com图片'},
	],
	storageOptions: {
		skipBackup: true,
		path: 'images'
	}
};
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
let imageList = []
let uploadImg = []
export default class PickPhoto extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			avatarSource:'',
			imageList:[],
		}
	}
	choosePic(response){
			if (response.didCancel) {
				console.log('用户取消了选择！');
			}
			else if (response.error) {
				alert("ImagePicker发生错误：" + response.error);
			}
			else if (response.customButton) {
				alert("自定义按钮点击：" + response.customButton);
			}
			else {
				let source = { uri: response.uri };
				imageList.push(source)
				this.setState({imageList:[...this.state.imageList,source]})
				this.uploadImg(response)
				// You can also display the image using data:
				// let source = { uri: 'data:image/jpeg;base64,' + response.data };
			}
	}
	uploadImg(request){
		let formData = new FormData();
		let file = {uri: request.uri, type: 'multipart/form-data', name: 'image.png'};

		formData.append("pic",file);
		console.log(formData)
		fetch(global.uploadUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'multipart/form-data;charset=utf-8',
				'token': global.token
			},
			body: formData,
		}).then(res=>{ return res.json()}).then(res => this.props.getPictrue(res.data))
	}
	render() {
		return (
			<View style={[styles.container,this.props.positionStyle]}>
				<View style={styles.pictrue}>
					<View style={styles.two_choose}>
						<TouchableOpacity
							onPress={()=>{
								ImagePicker.launchCamera(options, (response)  => {
									//响应结果处理参考上面样例
									this.choosePic(response)
								});
							}}
						>
						<View style={styles.choose_item}>
							<Image resizeMode='contain' style={styles.img}
										 source={require('../../assets/report/Assessmentscale.png')}/>
							<Text style={styles.font}>拍照</Text>
						</View>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={()=>{
								ImagePicker.launchImageLibrary(options, (response)  => {
									this.choosePic(response)
								});
							}}
						>
						<View style={styles.choose_item}>
							<Image resizeMode='contain' style={styles.img}
										 source={require('../../assets/report/Assessmentscale.png')}/>
							<Text style={styles.font}>选择图片</Text>
						</View>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.limit}>
					<Text style={styles.limit_font}>最多{this.props.maxLength}张!</Text>
				</View>
				<ImaList imageList={this.state.imageList} titleStyle={styles.titleStyle} imgsStyle={styles.imgsStyle}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: global.commonCss.screenColor,
		paddingBottom:20
	},
	pictrue: {
		width: width
	},
	two_choose: {
		width: global.ScreenUtil.pTd(460),
		height: 80,
		backgroundColor: '#ffffff',
        borderRadius: 3,
        borderStyle: "dashed",
        borderWidth: 1,
        borderColor: "#dddddd",
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
	limit_font:{
		fontSize: 12,
		color: "#9c9c9c",
		marginLeft:global.ScreenUtil.pTd(25)
	},
	limit:{
		marginTop:2
	},
	titleStyle:{
		display:'none'
	},
	imgsStyle:{
		width:0.95 * width
	}
});
