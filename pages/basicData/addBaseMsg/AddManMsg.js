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
import global from "../../../utils/global/global";
import DatePicker from 'react-native-datepicker'
import Describe from '../../common/Describe'
import PickPhoto from '../../common/PickPhoto'
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class AddManMsg extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			date:'',
			describe:''
		}
	}
	changeDescribe(val){
		this.setState({describe:val})
		console.log(this.state.describe)
	}
	render() {
		return (
			<ScrollView>
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
							<Image source={require('../../../assets/icons/male.png')} style={styles.sex_icon}/>
							<Text style={[styles.sex_name]}>男</Text>
						</View>
						<View style={styles.sexItem}>
							<Image source={require('../../../assets/icons/female.png')} style={styles.sex_icon}/>
							<Text style={[styles.sex_name]}>女</Text>
						</View>
						<Text>(点击字即可)</Text>
					</View>

					{/*出生日期行*/}
					<View style={styles.fill_zu}>
						<View style={styles.point}></View>
						<Text style={styles.itemName}>出生日期</Text>
					</View>
					<View style={styles.date_row}>
						<DatePicker
							style={{width: 80,height:30,marginBottom:0}}
							date={this.state.date}
							mode="date"
							placeholder="请选择"
							format="YYYY-MM-DD"
							minDate="2016-05-01"
							maxDate="2016-06-01"
							confirmBtnText="Confirm"
							cancelBtnText="Cancel"
							customStyles={{
								dateIcon: {
									display:'none'
								},
								dateInput: {
									borderWidth:0,
									height:15
								}
								// ... You can check the source to find the other keys.
							}}
							onDateChange={(date) => {this.setState({date: date})}}
						/>
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
						<Describe changeDescribe={this.changeDescribe.bind(this)} fontLength={this.state.describe.length} maxLength={300}/>
					</View>
					<View style={styles.photo}>
						<PickPhoto maxLength={4}/>
					</View>
				</View>
			</View>
			</ScrollView>
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
		alignItems:'center',
		marginTop:8,
	},
	input:{
		marginLeft:7,
		borderBottomWidth:0.5,
		borderColor:'#9c9c9c',
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
		flexDirection:'row',
		paddingLeft:16,
		marginTop:10,
		marginBottom:10
	},
	sexItem:{
		flex:0,
		flexDirection:'row',
		marginRight:20,
	},
	sex_name:{
		marginLeft:15
	},
	date_row:{
		borderBottomWidth:1,
		borderColor:'#9c9c9c',
		marginLeft:10
	},
	describe:{

	},
	photo:{

	},
	sex_icon:{
		width: 20,
		height: 20
	},
	text_Input:{
		paddingBottom:1,
		paddingTop:1
	}
});
