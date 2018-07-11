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
import global from "../../../utils/global/global";

//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
let  addData = new Map()
type Props = {};
export default class TaskCreate extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [
				{
					taskName: '村容村貌',
					taskArr: ['庄台秸秆堆放不整齐', '垃圾未进垃圾桶和池内', '有露天粪坑', '露天焚烧秸秆', '破旧房屋断壁', '化粪池便水乱排放', '生活污水乱排放', '畜禽粪便乱排放']
				},
				{taskName: '村庄河道', taskArr: ['河道有漂浮物', '河道有水生植物', '河坡不平整', '河坡乱建乱放乱挖', '河坡有垃圾']},
				{taskName: '村庄道路', taskArr: ['路道有垃圾', '路道有堆放物', '路面破损',]},
				{taskName: '村庄绿化', taskArr: ['绿化未防治病虫', '未及时清理落叶掉果', '绿化带有杂草', '绿化带堆放杂物', '绿化带有缺株和死树']},
				{
					taskName: '公共基础设施',
					taskArr: ['村服务中心地面不干净', '制度不健全，合同不规范', '公共厕所不清洁有异味', '照明、洗手池和水冲损坏', '路灯、涵闸、泵站损坏', '前面破损、桥梁栏杆损坏', '下水道堵塞', '健身休闲广场损坏、不干净', '健身休闲广场损毁啊、不干净', '健身器损坏', '卫生室不整洁', '无保洁员休息室', '墙面乱涂乱画', '农家屋、活动场所未正常开放']
				},
			],
			Index:'',
			parentIndex:'',
			isAll:false
		}
	}
static navigationOptions = (props)=>{
	const {navigation} = props
	const {params} = navigation.state
		return{
			headerRight:(
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={()=>{
						addData.set('regionId',global.User_msg.regionId)
						console.log(addData)
						navigation.navigate(params.fromCheck ==='SelfCheckTask'?'SelfCheckTask':'AddTaskImg')
					}}
				>
					<Text style={{color:global.commonCss.mainColor}}>确认</Text>
				</TouchableOpacity>
			)
		}
}
	_taskconstructor(taskType,index) {
		return (
			<TaskContent
				content={taskType}
				isAllChoose={index}
				Index={this.state.Index}
				noAllChoose={this.noAllChoose.bind(this)}></TaskContent>
		)
	}
	/**去掉全选*/
	noAllChoose(index){
		console.log(index)
		this.setState({parentIndex:index})
	}
	/**获取选择数据*/


	_taskCreate(task,index) {
		return (
			<View style={styles.tc_row}>
				<View style={styles.tc_title}>
					<View style={styles.circle_dot}></View>
					<Text>{task.taskName}</Text>
					<TouchableOpacity
						onPress={()=>{
							this.setState({Index:index})
							this.setState({isAll:!this.state.isAll})
						}}
						style={[styles.check_box,this.state.Index === index && this.state.isAll?styles.choose:'']}
					>
						<Image resizeMode='contain' style={[styles.check_box_img]} />
					</TouchableOpacity>
				</View>
				<View style={styles.tc_tasktype}>
					{task.taskArr.map(item => this._taskconstructor(item,index))}
				</View>
			</View>

		)
	}

	render() {
		return (
			<ScrollView>
				<View style={styles.container}>
					<View style={styles.tc_fun}>
						<TouchableOpacity
							activeOpacity={0.8}
						>
							<Text>常见问题</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.tc_other}>
						<View style={styles.circle_dot}></View>
						<Text>其它</Text>
						<TouchableOpacity

							style={styles.check_box}
						>
							<Image resizeMode='contain' style={[styles.check_box_img]}/>
						</TouchableOpacity>
					</View>
					{this.state.tasks.map((item,index) => this._taskCreate(item,index))}
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#fafafa',
		paddingTop: 20,
		paddingBottom:20
	},
	tc_fun: {
		flex: 0,
		flexDirection: 'row',
		width: width,
		paddingLeft:10,
		alignItems: 'center',
		height: 40,
		backgroundColor: "#ffffff",
		justifyContent: 'space-between',
	},
	tc_item: {
		flex: 0,
		flexDirection: 'row',
		paddingLeft: 10,
		paddingRight: 10
	},
	tc_row: {
		// paddingBottom: 20,
	},
	tc_other: {
		flex: 0,
		width:width,
		alignItems: 'center',
		flexDirection:'row',
		paddingLeft: 15,
		height: 20,
		marginTop:5,
		marginBottom:5
	},
	tc_title: {
		flex: 0,
		alignItems: 'center',
		flexDirection:'row',
		paddingLeft: 15,
		height: 20,
		marginTop:5,
		marginBottom:5
	},
	tc_tasktype: {
		flex: 0,
		flexDirection: 'row',
		width:width,
		flexWrap: 'wrap',
		borderRadius: 5,
		backgroundColor: "#ffffff",
		shadowColor: "rgba(182, 183, 185, 0.28)",
		shadowOffset: {
			width: 0,
			height: 0
		},
		shadowRadius: 12,
		shadowOpacity: 1,
		elevation:3,
		paddingTop:15,
		paddingBottom:15,
		marginTop:2,
		marginBottom:2
	},
	circle_dot:{
		width:5,
		height:5,
		borderRadius:3,
		marginRight:3,
		backgroundColor:'#f3c819'
	},
	check_box:{
		width:12,
		height:12,
		borderWidth:1,
		borderColor:'gray',
		marginLeft:12
	},
	check_box_img:{
		width:12,
		height:12
	},
	choose:{
		backgroundColor:global.commonCss.mainColor
	}
});
