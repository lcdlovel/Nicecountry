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
						<Text style={styles.new_head_title}>新闻动态</Text>
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
			<View style={[styles.news_list,styles.new_item]}>
				<View style={styles.new_list} key={data.title}>
					<Image source={require('../../assets/News/201806141307.jpg')} resizeMode='cover' style={styles.newImg}/>
					<View style={styles.new_content}>
						<Text style={styles.new_title}>{data.title}</Text>
						<View style={styles.new_time}>
							<Image source={require('../../assets/images/time.png')} resizeMode='cover'
										 style={styles.new_timePng}/>
							<Text style={styles.news_date}>{data.time}</Text>
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
	}
	render() {
		const {navigation} = this.props
		return (
			<View style={styles.container}>

				{/**中间信息区域和信息通知*/}

				<View style={styles.areaMsg}>

					{/***区域**/}

					<View style={styles.hf_item}>
						<Image source={require('../../assets/images/region.png')} style={styles.hf_icon}/>
						<Text style={styles.hf_font}>当前区域:{global.User_msg.regionName}</Text>
					</View>

                    {/***信息通知*/}

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

					{/**轮播图*/}

					<Banner2/>

					{/***显示有哪些功能模块*/}

					<View style={styles.hf_fun}>
						{this.state.modules.map(item => this._moduleConstrator(item))}
					</View>

					{/**新闻列表*/}

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

					{/**美丽乡村*/}

					<View style={{marginTop: 8}}>
						<View style={styles.news_list}>
							<View style={styles.news_list_header}>
								<View style={styles.news_title}>
									<View style={styles.circleDot}></View>
									<Text style={styles.new_head_title}>美丽乡村</Text>
								</View>
								<View>
									<Text style={styles.check_more}>查看更多</Text>
								</View>
							</View>
						</View>
						<View style={styles.newTypeTitle}>
							{this.state.newsType.map((item, index) => this._newTypeTitle(item, index))}
						</View>
						<FlatList
							ref={(flatList)=>this._flatList = flatList}
							data={[
								[{title: '市委书记韩立明专程赴高港调研', time: '2018-06-11'}, {title: '委书记韩立明专程赴高港调研', time: '2018-07-11'}],
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
	 * 主页面最外框
     */
	container: {
		flex: 1,
		alignItems: 'center',
        paddingTop:global.isIphoneX?global.ScreenUtil.hTd(50):0,
        backgroundColor:global.commonCss.screenColor
	},
    /**
	 * 顶部区域信息  和  信息通知
     */
	areaMsg: {
		flex: 0,
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingLeft: global.ScreenUtil.pTd(20),
		paddingRight: global.ScreenUtil.pTd(20),
		alignItems: 'center',
		width: width,
		height: global.ScreenUtil.hTd(88),
		backgroundColor: "#ffffff",
		shadowColor: "rgba(94, 108, 104, 0.27)",
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowRadius: 0,
		shadowOpacity: 1
	},
    /**
	 * 顶部区域信息  和  信息通知 两模块
     */
	hf_item: {
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},
	hf_font: {
		fontSize: global.commonCss.mainFontSize,
	},
	hf_icon: {
		marginRight: global.ScreenUtil.pTd(35),
		width: global.ScreenUtil.pTd(global.isIphoneX()?50:37),
		height: global.ScreenUtil.hTd(global.isIphoneX()?42:37),
	},
    /**
	 * 导航图下方的功能模块总的样式
     */
	hf_fun: {
		width: width,
		paddingTop: 10,
		paddingBottom: 10,
		flex: 0,
		backgroundColor: '#ffffff',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
    /**
	 * 各个功能模块
     */
	hf_funicon: {
		width: global.ScreenUtil.pTd(global.isIphoneX()?120:100),
		height: global.ScreenUtil.pTd(global.isIphoneX()?120:100),
	},

	fun_item: {
		marginTop: global.ScreenUtil.hTd(26),
		marginBottom:global.ScreenUtil.hTd(26),
		width: 1 / 4 * width,
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center'
	},
	fun_font: {
		fontSize: global.commonCss.mainFontSize,
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
    /**
	 * 新闻列表头部标题
     */
    new_head_title:{
		fontSize:global.commonCss.primaryFontSize
	},
    /**
	 * 新闻列表中一个项目的总样式
     */
	news_list: {
		backgroundColor: '#ffffff',
		width: width,
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center'
	},
    /**
	 * 单个新闻的新闻标题的字体大小
     */
    new_title:{
		fontSize:global.commonCss.titleFontSize,
		width:global.ScreenUtil.pTd(290)
	},
    /**
	 * 单个信息的整体样式
     */
    new_item:{
		height:global.ScreenUtil.hTd(300)
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
    /**
	 * 单个新闻的图片
     */
	newImg: {
		width: 0.45 * width,
		height: global.ScreenUtil.hTd(180),
		borderRadius: 10
	},
    /**
	 * 单个新闻的内容
     */
	new_content: {
		// width: 0.35 * width,
		marginLeft: 8,
        height: global.ScreenUtil.hTd(180),
		flex: 0,
	},
    /**
	 * 单个新闻 的 时间
     */
	new_time: {
		flex: 0,
		flexDirection: 'row',
		alignItems:'center',
		marginTop: 10
	},
    /**
	 * 新闻时间图片
     */
	new_timePng: {
		width: global.ScreenUtil.pTd(global.isIphoneX()?30:26),
		height: global.ScreenUtil.hTd(26)
	},
    /**
	 * 新闻时间
     */
    news_date:{
    	fontSize:global.commonCss.titleFontSize,
		marginLeft:global.ScreenUtil.pTd(20)
	},
    /**
	 * 新闻中间空隙
     */
	item_separator: {
		height: 6,
		width: width,
		backgroundColor: '#fafafa'
	},
    /**
	 * 美丽乡村的新闻类型的标题
     */
	newTypeTitle: {
		flex: 0,
		height: 40,
		justifyContent: 'space-around',
		alignItems: 'center',
		flexDirection: 'row',
		backgroundColor: '#ffffff'
	},
    /**
     * 美丽乡村的新闻类型的标题
     */
	news_typeTitle_item: {
		fontSize: global.commonCss.titleFontSize
	},
    /**
	 * 美丽乡村的新闻类型的标题的下划线
     */
	underline: {
		height: 5,
		width: 13,
		borderRadius: 5,
		marginTop: 4,
		backgroundColor: '#ffffff'
	},
    /**
	 * 美丽乡村类型标题总样式
     */
	news_title_head: {
		flex: 0,
		alignItems: 'center',
		justifyContent: 'center'
	},
    /**
	 * 新闻总标题的样式
     */
	news_title: {
		flex: 0,
		flexDirection: 'row',
		alignItems: 'center'
	},
    /**
	 * 点的样式
     */
	circleDot: {
		width: 8,
		height: 8,
		borderRadius: 12,
		marginRight: 10,
		backgroundColor: global.commonCss.mainColor
	},
    /**
	 * 标题下划线是否被选中
     */
	active: {
		backgroundColor: global.commonCss.mainColor
	},
    /**
	 * 标题字体是否被选中
     */
	activeFont: {
		color: '#000'
	},
    /**
	 * 信息通知信息数目
     */
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
    /**
	 * 查看更多 字体显示
     */
    check_more:{
		fontSize:global.commonCss.mainFontSize
	}
});

//TODO:直接设置滑动是一个屏宽