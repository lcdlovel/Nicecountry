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
	ScrollView,
	TouchableOpacity
} from 'react-native';
import global from "../../../utils/global/global";
import Point from '../../common/Point'
import {PickPhoto, ImgList,Describe} from "../../common";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class AddTaskImg extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			reactData:''
		}
	}

	static navigationOptions = (props) => {
		const {navigation} = props
		return {
			headerRight: (
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={() => {
						navigation.navigate('AddTextArea',{fromCheck:''})
						console.log(navigation)
					}}>
					<Text style={{color:global.commonCss.mainColor}}>添加</Text>
				</TouchableOpacity>
			)
		}
	}
	changeDescribe(data){
		this.setState({reactData:data})
	}
	render() {
		return (
			<ScrollView style={{flex: 1, backgroundColor: global.commonCss.screenColor}}>
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
						<Describe
							changeDescribe={this.changeDescribe.bind(this)}
							fontLength={this.state.reactData.length}
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
		backgroundColor: global.commonCss.screenColor,
		alignItems: 'center',
		paddingBottom: 20
	},
	item_header: {
		flex: 0,
		width: width,
		flexDirection: 'row',
		alignItems: 'center',
		height: 40,
		paddingLeft: 20
	},
	header_text: {
		fontSize: 17,
		color: "#0c0c0c",
		paddingLeft: 10
	},
	choosed_cot: {
		width: 0.95 * width,
		height: 80,
		backgroundColor: '#ffffff',
		borderRadius: 10
	},
	text_Input: {
		width: 0.95 * width,
		// height: 150,
		backgroundColor: '#ffffff',
		borderRadius: 10
	},
	font_num: {
		justifyContent: 'flex-end'
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
	imgs: {
		width: 0.95 * width,
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	example_img: {
		width: 0.22 * width,
		height: 40,
		marginRight: 6,
		marginTop: 5
	},
	photo_area: {
		marginLeft: 20,
		backgroundColor: global.commonCss.screenColor
	}
});
