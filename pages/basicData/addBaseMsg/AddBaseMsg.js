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
	TextInput
} from 'react-native';
import Point from '../../common/Point'
import global from "../../../utils/global/global";
import Describe from '../../common/Describe'
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class AddBaseMsg extends Component<Props> {
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
			<View style={styles.container}>
				<View style={styles.name_row}>
					<Point/>
					<Text style={styles.row_name}>名称</Text>
				</View>
				<View style={styles.name_textInput}>
					<TextInput placeholder='请输入' style={styles.textInput} underlineColorAndroid='transparent'  />
				</View>
				<View style={styles.name_row}>
					<Point/>
					<Text style={styles.row_name}>类别</Text>
				</View>
				{/*<View style={styles.name_row}>*/}
					{/*<Point/>*/}
					{/*<Text style={styles.row_name}>名称</Text>*/}
				{/*</View>*/}
				<View style={styles.households_row}>
					<Text style={styles.row_name}>户数</Text>
					<TextInput placeholder='请输入' style={styles.households}/>
					<Text>个</Text>
				</View>

				<View style={styles.households_box}>
					<View style={styles.households_req}></View>
				</View>

				{/*<View style={styles.name_textInput}>*/}
					{/*<TextInput placeholder='请输入' style={styles.textInput} underlineColorAndroid='transparent' />*/}
				{/*</View>*/}
				<View style={styles.name_row}>
					<Point/>
					<Text style={styles.row_name}>描述</Text>
				</View>
				<View style={styles.describe_box}>
					<Describe
						changeDescribe={this.changeDescribe.bind(this)}
						fontLength={this.state.describe.length}
						maxLength={300}
						customStyle={styles.describe}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
		paddingTop:10
	},
	name_row:{
		flexDirection:'row',
		alignItems:'center',
		paddingLeft:15
	},
	row_name:{
		marginLeft:6,
		fontSize: 17,
	},
	name_textInput:{
		borderBottomWidth:0.5,
		borderColor:global.commonCss.borderColor,
		marginLeft:20,
		marginTop:6,
		marginBottom:6
	},
	textInput:{
		paddingBottom:0,
		paddingTop:0
	},
	households:{
		marginLeft:30,
		width:60,
		paddingTop:-3,
		paddingBottom:3
	},
	households_row:{
		flexDirection:'row',
		alignItems:'center',
		paddingLeft:18
	},
	households_req:{
		width:0.95 * width,
		height:60,
		borderRadius: 7,
		borderWidth: 1,
		borderColor: "#dddddd",
		borderStyle:'dashed'
	},
	households_box:{
		width:width,
		flex:0,
		justifyContent:'center',
		alignItems:'center',
		marginTop:6,
		marginBottom:6
	},
	remark_req:{
		backgroundColor:'#ffffff',
		width:0.95 * width,
		height:100,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "#dddddd"
	},
	describe:{
		width:0.95 * width
	},
	describe_box:{
		flex:0,
		alignItems:'center'
	}
});
