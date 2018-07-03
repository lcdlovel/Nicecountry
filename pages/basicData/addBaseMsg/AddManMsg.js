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
} from 'react-native';
import global from "../../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class AddManMsg extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<View style={styles.container}>
				<View>
					{/*类别行*/}
					{/*<View style={styles.fill_zu}>*/}
						{/*<View style={styles.point}></View>*/}
						{/*<Text style={styles.itemName}>类别</Text>*/}
					{/*</View>*/}
					{/*<View>*/}
						{/*<View style={styles.chooseCase}>*/}
						{/**/}
						{/*</View>*/}
						{/*<Text style={styles.perponType_name}>保洁员</Text>*/}
					{/*</View>*/}
					{/*姓名行*/}
					<View style={styles.fill_zu}>
						<View style={styles.point}></View>
						<Text style={styles.itemName}>姓名</Text>
					</View>
					<View style={styles.input}>
						<TextInput placeholder='请输入' placeholderTextColor='#9c9c9c' selectionColor='#9c9c9c' style={styles.text_Input}   />
					</View>

					{/*性别行*/}
					<View style={styles.fill_zu}>
						<View style={styles.point}></View>
						<Text style={styles.itemName}>性别</Text>
					</View>
					<View style={styles.sex}>
						<View style={styles.sexItem}>
							<Image/>
							<Text>男</Text>
						</View>
						<View style={styles.sexItem}>
							<Image/>
							<Text>女</Text>
						</View>
					</View>

					{/*出生日期行*/}
					<View style={styles.fill_zu}>
						<View style={styles.point}></View>
						<Text style={styles.itemName}>出生日期</Text>
					</View>
					<View style={styles.date_row}>

					</View>
					{/*文化水平行*/}
					<View style={styles.fill_zu}>
						<View style={styles.point}></View>
						<Text style={styles.itemName}>文化水平</Text>
					</View>
					<View style={styles.input}>
						<TextInput placeholder='请输入' placeholderTextColor='#9c9c9c' selectionColor='#9c9c9c' style={styles.text_Input}   />
					</View>

					{/*性质行*/}
					<View style={styles.fill_zu}>
						<View style={styles.point}></View>
						<Text style={styles.itemName}>性质</Text>
					</View>
					<View style={styles.input}>
						<TextInput placeholder='请输入' placeholderTextColor='#9c9c9c' selectionColor='#9c9c9c' style={styles.text_Input}   />
					</View>

					{/*描述行*/}
					<View style={styles.fill_zu}>
						<View style={styles.point}></View>
						<Text style={styles.itemName}>描述</Text>
					</View>
					<View style={styles.describe}>

					</View>
					<View style={styles.photo}></View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingLeft:15,
		paddingTop:15,
		backgroundColor: '#F5FCFF',
	},
	itemName:{
		marginLeft:7,
		fontSize:17,
		color: "#0c0c0c"
	},
	point:{
		width:6,
		height:6,
		borderRadius:4,
		backgroundColor:global.commonCss.mainColor
	},
	fill_zu:{
		flex:0,
		flexDirection:'row',
		// justifyContent:'center',
		alignItems:'center'
	},
	input:{
		marginLeft:7
	},
	chooseCase:{
		// width: 132,
		// height: 42,
		// borderStyle: 'dashed',
		// borderColor:'red',
		// borderRadius:10,
		// borderWidth:1
	},
	perponType_name:{
		marginLeft:20
	},
	sex:{
		flex:0,
		flexDirection:'row'
	},
	sexItem:{
		flex:0,
		flexDirection:'row'
	},
	date_row:{

	},
	describe:{

	},
	photo:{

	}
});
