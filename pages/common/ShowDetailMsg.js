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
	Image
} from 'react-native';
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width, height} = dimensions.get('window')
import LinearGradient from 'react-native-linear-gradient';
import global from "../../utils/global/global";

type Props = {};
export default class ShowDetailMsg extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			listData: []
		}
	}

	componentWillMount() {
		const {detailMsg, DataType} = this.props
		console.log(detailMsg,DataType)
		DataType === 'personData' ?
			this.setState({
				listData: [
					{title: '区域名称', content: detailMsg.villageName},
					{title: '上报人', content: detailMsg.reportUserName},
					{title: '姓名', content: detailMsg.name},
					{title: '性别', content: detailMsg.sex === 1 ? '男' : '女'},
					{title: '年龄', content: detailMsg.age},
					{title: '文化水平', content: detailMsg.culturalLevel},
					{
						title: '性质',
						content: detailMsg.difficultHousehold ? '困难户' : detailMsg.fiveGuaranteesHousehold ? '五保户' : detailMsg.lowIncomeHousehold ? '低保户' : detailMsg.isVeterans ? '退役军人' : '其他'
					},
				]
			}) : DataType === 'contract' ?
			this.setState({
				listData: [
					{title: '区域名称', content: detailMsg.regionName},
					{title: '上报人', content: detailMsg.reportUserName},
					{title: '合同名称', content: detailMsg.name},
					{title: '类别', content: {name: detailMsg.name,},}
				]
			}) : DataType === 'baseInfo' ?
				this.setState({
					listData: [
						{title: '区域名称', content: detailMsg.villageName},
						{title: '上报人', content: detailMsg.reportUserName},
						{title: '类别', content: {name: detailMsg.name, count: '10户'}},
					]
				}) : DataType === 'confirmedCheck'?
					this.setState({
						listData:[
							{title:'名称',content: detailMsg.theme},
							{title:'时间',content:detailMsg.createTime},
							{title:'待处理内容',content:detailMsg.info},
							{title:'回复内容',content:detailMsg.replyInfo}
						]
					}):DataType === 'ReceivedCheck'?
						this.setState({
							listData:[
								{title:'名称',content: detailMsg.theme},
								{title:'时间',content:detailMsg.createTime},
								{title:'内容',content:detailMsg.info}
							]}):''
	}

	_typeSpecial(item) {
		if (item.title === '类别') {
			return (
				<View style={styles.type_num}>
					<Text style={styles.item_content}>{item.content.name}</Text>
					<Text style={styles.item_content}>{item.content.count?('('+item.content.count+')'):''}</Text>
				</View>
			)
		} else {
			return (
				<Text style={styles.item_content}>{item.content}</Text>
			)
		}
	}

	_itemList(item) {
		return (
			<View style={styles.msg_item}>
				<View style={styles.item_column}>
					<View style={styles.circle_dot}></View>
					<Text style={styles.item_title}>{item.title}</Text>
				</View>
				<View>
					{this._typeSpecial(item)}
				</View>
			</View>
		)
	}

	render() {
		return (
			<View style={styles.container}>
				<LinearGradient colors={['#70daad', '#8ae8b2', '#96efb4',]}
												start={{x: 0, y: 0}}
												end={{x: 1, y: 0}}
												style={styles.bac_head}>
				</LinearGradient>
				<View style={styles.main_msg}>
					<Image source={require('../../assets/images/sign.png')} style={styles.sign}/>
					{this.state.listData.map(item => this._itemList(item))}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
		paddingBottom: 10,
	},
	bac_head: {
		width: width,
		height: 0.25 * height,
		backgroundColor: global.commonCss.mainColor
	},
	sign: {
		width: 29,
		height: 36,
		position: 'absolute',
		top: 0,
		left: 15
	},
	main_msg: {
		width: 0.9 * width,
		borderRadius: 6,
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffffff',
		paddingTop: 20,
		paddingBottom: 20,
		marginTop: -0.2 * height,
		shadowColor: "rgba(0, 0, 0, 0.1)",
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowRadius: 10,
		shadowOpacity: 1,
		elevation: 1,
	},
	circle_dot: {
		width: 7,
		height: 7,
		borderRadius: 4,
		backgroundColor: "#f5d44f"
	},
    /**
	 * 行数据样式
     */
	msg_item: {
		width: 0.6 * width,
		flex: 0,
		justifyContent: 'space-between',
	},
	item_column: {
		flex: 0,
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 5
	},
    /**
	 * 行数据名称
     */
	item_title: {
		marginLeft: 8,
		fontSize: 16,
		fontWeight: '400',
		color: "#0c0c0c",
	},
	item_content: {
		fontSize: 15,
		fontWeight: '100',
		color: "#0c0c0c",
		marginLeft: 17,
        marginTop:global.ScreenUtil.hTd(15),
        marginBottom:global.ScreenUtil.hTd(15)
	},
	type_num:{
		flex:0,
		flexDirection:'row',
	}
});
