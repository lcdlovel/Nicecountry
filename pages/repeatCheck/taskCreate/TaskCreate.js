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
	TouchableOpacity,
	ScrollView
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
		this.state = {
			tasks:[
				{taskName:'村容村貌',taskArr:['庄台秸秆堆放不整齐','垃圾未进垃圾桶和池内','有露天粪坑','露天焚烧秸秆','破旧房屋断壁','化粪池便水乱排放','生活污水乱排放','畜禽粪便乱排放']},
				{taskName:'村庄河道',taskArr:['河道有漂浮物','河道有水生植物','河坡不平整','河坡乱建乱放乱挖','河坡有垃圾']},
				{taskName:'村庄道路',taskArr:['路道有垃圾','路道有堆放物','路面破损',]},
				{taskName:'村庄绿化',taskArr:['绿化未防治病虫','未及时清理落叶掉果','绿化带有杂草','绿化带堆放杂物','绿化带有缺株和死树']},
				{taskName:'公共基础设施',taskArr:['村服务中心地面不干净','制度不健全，合同不规范','公共厕所不清洁有异味','照明、洗手池和水冲损坏','路灯、涵闸、泵站损坏','前面破损、桥梁栏杆损坏','下水道堵塞','健身休闲广场损坏、不干净','健身休闲广场损毁啊、不干净','健身器损坏','卫生室不整洁','无保洁员休息室','墙面乱涂乱画','农家屋、活动场所未正常开放']},

			]
		}
	}

	_taskconstructor(taskType){
		return(
			<TaskContent content={taskType}></TaskContent>
		)
	}
	_taskCreate(task){
		return (

			<View style={styles.tc_row}>
				<View style={styles.tc_title}>
					<Text>{task.taskName}</Text>
				</View>
				<View style={styles.tc_tasktype}>
					{task.taskArr.map(item => this._taskconstructor(item))}
				</View>
			</View>

		)
	}
	render() {
		return (
			<ScrollView>
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
				{this.state.tasks.map(item => this._taskCreate(item))}
			</View>
			</ScrollView>
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
		paddingBottom:20,
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
		flexDirection:'row',
		flexWrap:'wrap'
	}
});