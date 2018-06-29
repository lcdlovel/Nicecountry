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
	TouchableOpacity
} from 'react-native';
import global from "../../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
const groupName = '';
export default class AddAreaMsg extends Component<Props> {
	constructor(props)
	{
		super(props);
		this.state = {
			groupName:'',
			orderNum:'',
			remark:'',
		}
	}
	componentDidMount(){
		this.props.navigation.setParams({requestData:this.state})
	}
	static navigationOptions = (props) => {
		const {params} = props.navigation.state
		return {
			headerRight:(
				<TouchableOpacity
					onPress={() => {
						console.log('调用自身的title')
						console.log(groupName)}
					}
				>
				<Text>发送</Text>
			</TouchableOpacity>),
		}
	}


render()
{
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
										 onChangeText={(text)=>{
											 groupName = text
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
										 onChangeText={(text)=>{
											 this.setState({orderNum:text})
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
										 onChangeText={(text)=>{
											 this.setState({remark:text})
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
		borderColor: '#9c9c9c'
	}
});
