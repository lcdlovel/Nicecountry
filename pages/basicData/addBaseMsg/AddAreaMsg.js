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
	Button,
    Alert,
	TouchableOpacity
} from 'react-native';
import global from "../../../utils/global/global";
import CrudApi from "../../../utils/request/crud";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};

let areaData = new Map()
.set('regionCategoryId',7);
export default class AddAreaMsg extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			groupName: '',
			orderNum: '',
			remark: '',
		}
	}

	componentDidMount() {
		this.props.navigation.setParams({requestData: this.state})
	}
    /**
     *顶部左边按钮
     */
	static navigationOptions = (props) => {
		const {navigation} = props
		const {params} = props.navigation.state
		return {
			headerRight: (
				<TouchableOpacity
					onPress={() => {
						CrudApi.postInfo({
							url:'Region/add',
							data:{
								name:areaData.get('groupName'),
								parentId:global.User_msg.regionId,
								regionCategoryId:areaData.get('regionCategoryId'),
								seq:areaData.get('orderNum'),
								remark:areaData.get('remark')
							},
							callback:(res)=>{
								alert(res.msg)
                        Alert.alert('添加完成')
								navigation.goBack(null)
							}
						})
						}
					}
				>
					<Text style={global.commonCss.confirm_btn}>确认</Text>
				</TouchableOpacity>),
		}
	}


	render() {
		return (
			<View style={styles.container}>
				<View>
					<View style={styles.fill_zu}>
						<View style={styles.point}></View>
						<Text style={styles.itemName}>组名称</Text>
					</View>
					<View style={styles.input}>
						<TextInput placeholder='请输入'
											 placeholderTextColor='#9c9c9c'
											 selectionColor='#9c9c9c'
											 onChangeText={(text) => {
												 areaData.set('groupName',text)
											 }}
											 style={styles.text_Input}/>
					</View>
				</View>
				<View>
					<View style={styles.fill_zu}>
						<View style={styles.point}></View>
						<Text style={styles.itemName}>序号</Text>
					</View>
					<View style={styles.input}>
						<TextInput placeholder='请输入'
											 placeholderTextColor='#9c9c9c'
											 selectionColor='#9c9c9c'
											 onChangeText={(text) => {
												 areaData.set('orderNum',text)
											 }}
											 style={styles.text_Input}/>
					</View>
				</View>
				<View>
					<View style={styles.fill_zu}>
						<View style={styles.point}></View>
						<Text style={styles.itemName}>备注</Text>
					</View>
					<View style={styles.input}>
						<TextInput placeholder='请输入'
											 placeholderTextColor='#9c9c9c'
											 selectionColor='#9c9c9c'
											 onChangeText={(text) => {
												 areaData.set('remark',text)
											 }}
											 style={styles.text_Input}/>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingLeft: 15,
		paddingTop: 15,
		backgroundColor: '#ffffff',
	},
	point: {
		width: 6,
		height: 6,
		borderRadius: 4,
		backgroundColor: global.commonCss.mainColor
	},
    /**
	 * 确认按钮
     */
    confirm_btn:{
    	fontSize:global.commonCss.confirmBtnFontSize,
		color:global.commonCss.mainColor,
		right:global.ScreenUtil.pTd(32)
	},
	fill_zu: {
		flex: 0,
		flexDirection: 'row',
		// justifyContent:'center',
		alignItems: 'center'
	},
	itemName: {
		marginLeft: 7,
		fontSize: 17,
		color: "#0c0c0c"
	},
	input: {
		marginLeft: 7
	},
	text_Input: {
		borderColor: '#9c9c9c',
		height:global.ScreenUtil.hTd(80),
		fontSize:global.commonCss.textInputSize,
		paddingLeft:7
	}
});
