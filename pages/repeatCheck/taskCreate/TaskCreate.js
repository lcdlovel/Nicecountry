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
import TaskContent from "../../common/TaskContent";

//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class TaskCreate extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {}
	}
	_taskconstructor(taskType){
		return(
			<TaskContent content={taskType}></TaskContent>
		)
	}
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.tc_fun}>
				<View style={styles.tc_item}>
					{/*<Image source={require()}/>*/}
					<Text>选择</Text>
				</View>
				<View  style={styles.tc_item}>
					<Text>创建</Text>
					{/*<Image source={require()}/>*/}
				</View>
			</View>
				<View style={styles.tc_row}>
					<View style={styles.tc_title}>
						<Text>村容村貌</Text>
					</View>
					<View style={styles.tc_tasktype}>
						{this._taskconstructor('有露天粪坑')}
						{this._taskconstructor('呵呵')}
						{this._taskconstructor('玩笑')}
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems:'center',
		backgroundColor: '#F2F2F2',
		paddingTop:20
	},
	tc_fun:{
		flex:0,
		flexDirection:'row',
		width: width,
		alignItems:'center',
		height: 40,
		backgroundColor: "#ffffff",
		justifyContent:'space-between',
	},
	tc_item:{
		flex:0,
		flexDirection:'row',
		paddingLeft:10,
		paddingRight:10
	},
	tc_row:{
		width:width * 0.95,
		marginTop:15,
		height: 177,
		borderRadius: 5,
		backgroundColor: "#ffffff",
		shadowColor: "rgba(182, 183, 185, 0.28)",
		shadowOffset: {
			width: 0,
			height: 0
		},
		shadowRadius: 12,
		shadowOpacity: 1
	},
	tc_title:{
		flex:0,
		justifyContent:'center',
		paddingLeft:15,
		height:40,
		borderBottomWidth:2,
		borderBottomColor:'#dcdbdb',

	},
	tc_tasktype:{
		flex:0,
		flexDirection:'row'
	}
});
