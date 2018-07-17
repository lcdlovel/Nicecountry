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
	ScrollView,
	FlatList,
	SectionList
} from 'react-native';


import Banner2 from './banner/Banner2'
import global from "../../utils/global/global";
import loaderFun from "../loader/LoaderFun";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')

type Props = {};

export default class HomePage extends Component<Props> {
	_flatList;

	constructor(props) {
		super(props);
		this.state = {
			modules: [
				{routeName: 'BasicDataType', imgUrl: require('../../assets/images/message.png'), name: '基础信息'},
				{routeName: 'RepeatCheckTab', imgUrl: require('../../assets/images/check.png'), name: '检查自查'},
				{routeName: 'CheckScore', imgUrl: require('../../assets/images/inform.png'), name: '考核评分'},
				{routeName: 'MsgInfomation', imgUrl: require('../../assets/images/sasa.png'), name: '文件通知'},
				{routeName: 'BasicData', imgUrl: require('../../assets/images/signIn.png'), name: '人脸签到'}
			],
			Index: 0,
			newsType: ['美丽乡村', '优美环境', '特色产业', '乡村文明']
		}
	}

	componentWillMount() {
		console.log(global.User_msg)
	}

	/**页面模块功能构建*/
	_moduleConstrator(data) {
		const {navigation} = this.props
		return (
			<View style={styles.fun_item} key={data.name}>
				<TouchableOpacity
					activeOpacity={0.8}
					onPress={() => {
						navigation.navigate(data.routeName)
					}}>
					<Image source={data.imgUrl}
								 style={styles.hf_funicon}
					/>
				</TouchableOpacity>
				<Text style={styles.fun_font}>{data.name}</Text>
			</View>
		)
	}

	/**新闻列表头部构建*/
	_newListHeaderComponent() {
		return (
			<View style={styles.news_list}>
				<View style={styles.news_list_header}>
					<View style={styles.news_title}>
						<View style={styles.circleDot}></View>
						<Text>新闻动态</Text>
					</View>
					<View>
						<Text style={styles.check_more}>查看更多</Text>
					</View>
				</View>
			</View>
		)
	}

	/**新闻列表构建函数*/
	_newListItem(data) {
		return (
			<View style={styles.news_list}>
				<View style={styles.new_list} key={data.title}>
					<Image source={require('../../assets/News/201806141307.jpg')} resizeMode='cover' style={styles.newImg}/>
					<View style={styles.new_content}>
						<Text>{data.title}</Text>
						<View style={styles.new_time}>
							<Image source={require('../../assets/images/time.png')} resizeMode='cover'
										 style={styles.new_timePng}/>
							<Text>{data.time}</Text>
						</View>
					</View>
				</View>
				<Text style={{width: 0.9 * width, textAlign: 'left'}}>新闻来源:南京市云感物联科技有限公司</Text>
			</View>
		)
	}

	/**美丽乡村不同类型函数构建*/
	_newTypeList(data) {
		return (
			<View style={{marginTop: 8, width: width}}>
				<FlatList
					ItemSeparatorComponent={() => {
						return (<View style={styles.item_separator}></View>)
					}}
					data={data}
					renderItem={({item}) => this._newListItem(item)}
				/>
			</View>
		)
	}

	/**不同新闻标题的信息*/
	_newTypeTitle(item, index) {
		return (
			<TouchableOpacity
				onPress={() => {
					this._flatList.scrollToIndex({viewPosition: 0,index: index})
				}}>
				<View key={item} style={styles.news_title_head}>
					<Text style={[styles.news_typeTitle_item, this.state.Index == index ? styles.activeFont : '']}>
						{item}
					</Text>
					<View style={[styles.underline, this.state.Index == index ? styles.active : '']}></View>
				</View>
			</TouchableOpacity>
		)
	}
	/** 最下列中不同新闻列表的横向滚动事件*/
	OnScroll(event) {
		let offsetX = parseInt(event.nativeEvent.contentOffset.x)
		let screenWidth = parseInt(width)
		offsetX >= 3 * screenWidth?this.setState({Index: 3}):
			offsetX >= 2 * screenWidth?this.setState({Index: 2}):
				offsetX >=  screenWidth?this.setState({Index: 1}):
					this.setState({Index: 0})
		// if (offsetX >=3 * screenWidth) {
		// 	this.setState({Index: 3})
		// }else if (offsetX >= 2 * screenWidth) {
		// 	this.setState({Index: 2})
		// }else if (offsetX>=  screenWidth) {
		// 	this.setState({Index: 1})
		// }else {
		// 	this.setState({Index: 0})
		// }
	}
	render() {
		const {navigation} = this.props
		return (
			<View style={styles.container}>
				{/*中间信息*/}
				<View style={styles.areaMsg}>
					<View style={styles.hf_item}>
						<Image source={require('../../assets/images/region.png')} style={styles.hf_icon}/>
						<Text style={styles.hf_font}>当前区域:{global.User_msg.regionName}</Text>
					</View>
					<TouchableOpacity
						onPress={()=>{
							loaderFun.addData()
						}}
					>
					<View style={styles.hf_item}>
						<Image source={require('../../assets/images/news.png')} style={styles.hf_icon}/>
						<Text style={styles.msg_num}>{1}</Text>
					</View>
					</TouchableOpacity>
				</View>
				<ScrollView>
					{/*轮播图*/}
					<Banner2/>
					{/*显示有哪些功能模块*/}
					<View style={styles.hf_fun}>
						{this.state.modules.map(item => this._moduleConstrator(item))}
					</View>
					{/*新闻列表*/}
					<View style={{marginTop: 8}}>
						<FlatList
							ListHeaderComponent={this._newListHeaderComponent()}
							ItemSeparatorComponent={() => {
								return (<View style={styles.item_separator}></View>)
							}}
							data={[{title: '市委书记韩立明专程赴高港调研', time: '2018-06-11'}, {title: '委书记韩立明专程赴高港调研', time: '2018-07-11'}]}
							renderItem={({item}) => this._newListItem(item)}
						/>
					</View>
					<View style={{marginTop: 8}}>
						<View style={styles.news_list}>
							<View style={styles.news_list_header}>
								<View style={styles.news_title}>
									<View style={styles.circleDot}></View>
									<Text>美丽乡村</Text>
								</View>
								<View>
									<Text>查看更多</Text>
								</View>
							</View>
						</View>
						<View style={styles.newTypeTitle}>
							{this.state.newsType.map((item, index) => this._newTypeTitle(item, index))}
						</View>
						<FlatList
							ref={(flatList)=>this._flatList = flatList}
							data={[
								[{title: '市委书记韩立明专程赴高港调研', time: '2018-06-11'},
								{title: '委书记韩立明专程赴高港调研', time: '2018-07-11'}],
								[{title: '书记韩立明专程赴高港调研', time: '2018-07-11'}],
								[{title: '委记韩立明专程赴高港调研', time: '2018-07-11'}],
								[{title: '委韩立明专程赴高港调研', time: '2018-07-11'}]
							]}
							renderItem={({item}) => this._newTypeList(item)}
							onScroll={this.OnScroll.bind(this)}
							pagingEnabled={true}
							horizontal={true}
							showsHorizontalScrollIndicator={false}
						/>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
    /**
	 * 主页面
     */
	container: {
		flex: 1,
		alignItems: 'center',
        paddingTop:global.isIphoneX?35:0,
        backgroundColor:global.commonCss.screenColor
	},
	areaMsg: {
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: global.ScreenUtil.autoWidth(20),
		paddingRight: global.ScreenUtil.autoWidth(20),
		alignItems: 'center',
		width: width,
		height: global.ScreenUtil.autoHeight(44),
		backgroundColor: "#ffffff",
		shadowColor: "rgba(94, 108, 104, 0.27)",
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowRadius: 0,
		shadowOpacity: 1
	},
	hf_item: {
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},
	hf_font: {
		fontSize: 15,
	},
	hf_icon: {
		marginRight: 10,
		width: 18,
		height: 18,
	},
	hf_fun: {
		width: width,
		paddingTop: 10,
		paddingBottom: 10,
		flex: 0,
		backgroundColor: '#ffffff',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	hf_funicon: {
		width: 47,
		height: 47,
	},
	fun_item: {
		marginTop: 8,
		width: 1 / 4 * width,
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center'
	},
	fun_font: {
		fontSize: 14,
		marginTop: 3,
		textAlign: 'center',
		color: "#364a51"
	},
	msgInformation: {
		paddingLeft: 10
	},
	setUp: {
		paddingRight: 10
	},
	news_list: {
		backgroundColor: '#ffffff',
		width: width,
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center'
	},
	news_list_header: {
		width: 0.9 * width,
		height: 50,
		flex: 0,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderBottomColor: global.commonCss.borderColor
	},
	new_list: {
		marginTop: 10,
		marginBottom: 10,
		width: 0.9 * width,
		flex: 0,
		flexDirection: 'row'
	},
	newImg: {
		width: 0.45 * width,
		height: 100,
		borderRadius: 10
	},
	new_content: {
		width: 0.35 * width,
		marginLeft: 8,
		height: 100,
		flex: 0,
	},
	new_time: {
		flex: 0,
		flexDirection: 'row',
		marginTop: 10
	},
	new_timePng: {
		width: 20,
		height: 20
	},
	item_separator: {
		height: 6,
		width: width,
		backgroundColor: '#fafafa'
	},
	newTypeTitle: {
		flex: 0,
		height: 40,
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: '#ffffff'
	},
	news_typeTitle_item: {
		fontSize: 12
	},
	underline: {
		height: 5,
		width: 13,
		borderRadius: 5,
		marginTop: 4,
		backgroundColor: '#ffffff'
	},
	news_title_head: {
		flex: 0,
		alignItems: 'center',
		justifyContent: 'center'
	},
	news_title: {
		flex: 0,
		flexDirection: 'row',
		alignItems: 'center'
	},
	circleDot: {
		width: 8,
		height: 8,
		borderRadius: 12,
		marginRight: 10,
		backgroundColor: global.commonCss.mainColor
	},
	active: {
		backgroundColor: global.commonCss.mainColor
	},
	activeFont: {
		color: '#000'
	},
	msg_num:{
		paddingLeft:6,
		paddingRight:6,
		height: 10,
		borderRadius:4,
		backgroundColor:'#fd5b5b',
		color:'#ffffff',
		position:'absolute',
		right:4,
		top:-5,
		fontSize:8,
		textAlign:'center',
		lineHeight:10
	},

    check_more:{
		// fontSize:
	}
});

//TODO:直接设置滑动是一个屏宽