import {createStackNavigator, createMaterialTopTabNavigator} from 'react-navigation'
import React from 'react'
import {Image, StyleSheet, TouchableOpacity, Text} from 'react-native'
import Loader from '../pages/loader/Loader'
import HomePage from "../pages/homePage/HomePage";
import Check from "../pages/repeatCheck/Check";
import SelfCheck from "../pages/repeatCheck/SelfCheck";
import TaskCreate from "../pages/repeatCheck/taskCreate/TaskCreate";
import BasicDataType from "../pages/basicData/BasicDataType";
import BasicData from '../pages/basicData/BasicData'
import CheckScore from '../pages/checkScore/CheckScore'
import SetUp from '../pages/setUp/SetUp'
import StartUp from '../pages/Startup/StartUp'
import CreateMsg from '../pages/msgInformation/CreatMsg'
import MsgSended from '../pages/msgInformation/MsgSended'
import ReceviedChecked from '../pages/repeatCheck/SelfCheck/ReceivedCheck'
import ConfirmedCheck from '../pages/repeatCheck/SelfCheck/ConfirmedCheck'
import RevisePassWord from '../pages/setUp/SetUp/RevisePassWord'
import QrCodeDown from '../pages/setUp/SetUp/QrCodeDown'
import AllArea from '../pages/basicData/subInformation/AllArea'
import WorkNewsList from '../pages/NewsList/WorkNewsList'
import global from "../utils/global/global";
import AllCleaner from "../pages/basicData/cleaner/AllCleaner";
import MsgList from "../pages/basicData/subInformation/MsgList";
import AddCleaner from "../pages/basicData/cleaner/AddCleaner";
import OneCleanerMsg from "../pages/basicData/cleaner/OneCleanerMsg";
import ContractorList from "../pages/basicData/cleaner/ContractorList";
import Contractor from "../pages/basicData/cleaner/Contractor";
import AddContractor from "../pages/basicData/cleaner/AddContractor";
import AddAreaMsg from "../pages/basicData/addBaseMsg/AddAreaMsg";
import AddManMsg from "../pages/basicData/addBaseMsg/AddManMsg";
import AddBaseMsg from "../pages/basicData/addBaseMsg/AddBaseMsg";
import AddTaskImg from "../pages/repeatCheck/taskCreate/AddTaskImg";
import AddTextArea from "../pages/repeatCheck/taskCreate/AddTextArea";
import TaskDetail from "../pages/repeatCheck/TaskDetail";
import ReplyInformation from "../pages/repeatCheck/ReplyInformation";
import CreatInformation from '../pages/msgInformation/Message/CreatInformation'
import SendedInformation from "../pages/msgInformation/Message/SendedInformation";
import ReceviedInformation from '../pages/msgInformation/Message/ReceviedInformation'
import RecoScore from "../pages/checkScore/RecoScore/RecoScore";
import EditScore from "../pages/checkScore/RecoScore/EditScore";
import ScoreEdit from "../pages/checkScore/RecoScore/ScoreEdit";
import queryTabData from "../pages/checkScore/RecoScore/queryTabData";
import SelfRating from "../pages/checkScore/RecoScore/SelfRating";
import Selfexamination from "../pages/checkScore/Selfexamination/Selfexamination";
import OptRegion from "../pages/checkScore/Selfexamination/OptRegion";
import MyMsg from "../pages/setUp/SetUp/MyMsg";
import AffirmTask from "../pages/repeatCheck/SelfCheck/AffirmTask";
import SelfCheckTask from "../pages/repeatCheck/taskCreate/SelfCheckTask";
import SelfCheckTaskConfirm from "../pages/repeatCheck/SelfCheck/SelfCheckTaskConfirm";
import HeadAppear from "../pages/msgInformation/HeadAppear";
import AddContractorMsg from '../pages/basicData/addBaseMsg/AddContractorMsg'

const styles = StyleSheet.create({
	Icon: {
		width: 25,
		height: 25
	},
    /**
	 * 添加按钮
     */
    add_icon:{
		width:global.ScreenUtil.pTd(40),
		height:global.ScreenUtil.hTd(40)
	},
    /**
	 * 按钮隐藏
     */
    none:{
		display:'none'
	}
})

/**主页面的底部导航器*/
export const Home = createMaterialTopTabNavigator({
	HomePage: {
		screen: HomePage,
		navigationOptions: {
			tabBarLabel: '首页',
			tabBarIcon: ({tintColor, focused}) => (
				<Image resizeMode='contain'
							 source={focused ? require('../assets/images/TabNav/homepage.png') : require('../assets/images/TabNav/homepage1.png')}
							 style={[styles.Icon]}
				/>
			)
		}
	},
	Check: {
		screen: CreateMsg,
		navigationOptions: {
			tabBarLabel: '报表',
			tabBarIcon: ({tintColor, focused}) => (
				<Image resizeMode='contain'
							 source={focused ? require('../assets/images/TabNav/My.png') : require('../assets/images/TabNav/My1.png')}
							 style={[styles.Icon]}/>
			)
		}
	},
	SelfCheck: {
		screen: MsgSended,
		navigationOptions: {
			tabBarLabel: '我的',
			tabBarIcon: ({tintColor, focused}) => (
				<Image resizeMode='contain'
							 source={focused ? require('../assets/images/TabNav/Reportform.png') : require('../assets/images/TabNav/Reportform1.png')}
							 style={[styles.Icon]}/>
			)
		}
	}
}, {
	tabBarPosition: 'bottom',
	tabBarOptions: {
		showIcon: true,
		style: {
			height: global.isIphoneX()?60:50,
			backgroundColor: '#FFF',
			paddingBottom:global.isIphoneX()?15:0,
		},
		labelStyle: {
			color: global.commonCss.fontColor,
			fontSize: 12,
			paddingTop: 0,
			marginTop: 0,
		}
	}
})
/**检查自查主页面的导航器*/
export const RepeatCheckTab = createMaterialTopTabNavigator({
	Check: {
		screen: Check,
		navigationOptions: {
			tabBarLabel: '检查任务',
		}
	},
	SelfCheck: {
		screen: SelfCheck,
		navigationOptions: {
			tabBarLabel: '自查任务',
		}
	},
}, {
	tabBarPosition: 'top',
	swipeEnabled: false,
	tabBarOptions: {
		style: {
			height: 50,
			backgroundColor: '#FFF',
		},
        indicatorStyle:{
			height:global.ScreenUtil.hTd(12),
			width:global.ScreenUtil.pTd(72),
			backgroundColor:global.commonCss.mainColor,
            borderRadius:6,
			marginLeft:global.ScreenUtil.pTd(150)
		},
		labelStyle: {
			fontSize: 18,
			flex: 0,
			alignItems: 'center',
			justifyContent: 'center'
		},
		activeBackgroundColor: '#ffffff',
		activeTintColor: '#70daad',
		inactiveBackgroundColor: '#ffffff',
		inactiveTintColor: '#aaa',
	}
})
/**/
export const MessageInformation = createMaterialTopTabNavigator({
	CreatInformation: {
		screen: CreatInformation,
		navigationOptions: {
			tabBarLabel: '已创建',
		}
	},
	SendedInformation: {
		screen: SendedInformation,
		navigationOptions: {
			tabBarLabel: '已发送',
		}
	},
	ReceviedInformation: {
		screen: ReceviedInformation,
		navigationOptions: {
			tabBarLabel: '已接受',
		}
	},
}, {
	tabBarPosition: 'top',
	swipeEnabled: false,
	tabBarOptions: {
		style: {
			height: 49,
			backgroundColor: '#FFF',
		},
        indicatorStyle:{
            height:global.ScreenUtil.hTd(12),
            width:global.ScreenUtil.pTd(72),
            backgroundColor:global.commonCss.mainColor,
            borderRadius:6,
            marginLeft:global.ScreenUtil.pTd(150)
        },
		activeBackgroundColor: '#ffffff',
		activeTintColor: '#70daad',
		inactiveBackgroundColor: '#ffffff',
		inactiveTintColor: '#aaa',
	}
})
/**检查任务下已接受任务*/
export const CheckReceviedCheck = createMaterialTopTabNavigator({

	ReceviedChecked: {
        screen: ReceviedChecked,
        navigationOptions: {
            tabBarLabel: '待处理',
        }
    },

	ConfirmedCheck: {
		screen: ConfirmedCheck,
		navigationOptions: {
			tabBarLabel: '已回复',
		}
	},

	AffirmTask:{
		screen: AffirmTask,
		navigationOptions: {
			tabBarLabel: '已确定',
		}
	}
}, {
	tabBarPosition: 'top',
	swipeEnabled: false,
	tabBarOptions: {
		style: {
			height: 49,
			backgroundColor: '#FFF',
		},
        indicatorStyle:{
            height:global.ScreenUtil.hTd(12),
            width:global.ScreenUtil.pTd(70),
            backgroundColor:global.commonCss.mainColor,
            borderRadius:6,
            marginLeft:global.ScreenUtil.pTd(90)
        },
        labelStyle: {
            fontSize: 18,
            flex: 0,
            alignItems: 'center',
            justifyContent: 'center'
        },
		activeBackgroundColor: '#ffffff',
		activeTintColor: '#70daad',
		inactiveBackgroundColor: '#ffffff',
		inactiveTintColor: '#aaa',
	}
})

export const ReceviedCheck = createMaterialTopTabNavigator({
	ReceviedChecked: {
		screen: ReceviedChecked,
		navigationOptions:(props)=> {
			return{
                tabBarLabel: '待处理',
			}
		}
	},
    ConfirmedCheck: {
        screen: ConfirmedCheck,
        navigationOptions:(props)=> {
        	return{
                tabBarLabel: '待处理',
			}
        }
    },
    AffirmTask: {
		screen: AffirmTask,
		navigationOptions:(props)=> {
			return{
                tabBarLabel: '已确定',
			}
		}
	},
}, {
	tabBarPosition: 'top',
	swipeEnabled: false,
	tabBarOptions: {
		style: {
			height: 49,
			backgroundColor: '#FFF'
		},
        indicatorStyle:{
            height:global.ScreenUtil.hTd(12),
            width:global.ScreenUtil.pTd(70),
            backgroundColor:global.commonCss.mainColor,
            borderRadius:6,
            marginLeft:global.ScreenUtil.pTd(90)
        },
        labelStyle: {
            fontSize: 18,
            flex: 0,
            alignItems: 'center',
            justifyContent: 'center'
        },
		activeBackgroundColor: '#ffffff',
		activeTintColor: '#70daad',
		inactiveBackgroundColor: '#ffffff',
		inactiveTintColor: '#aaa',
	}
})


export const AppStackNavgator = createStackNavigator({
	/**登录页面*/
	Loader:{
        screen:Loader,
        navigationOptions:{
            header:null
        }
    },
	/**主页面*/
	Home: {
		screen: Home,
		navigationOptions: {
			header: null
		}
	},
	/**检查自查*/
	RepeatCheckTab: {
		screen: RepeatCheckTab,
		navigationOptions: (props) => {
			return {
				title: '检查自查',
				headerTitleStyle: {
					color: '#545454',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},
	/**创建任务*/
	TaskCreate: {
		screen: TaskCreate,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: '创建'+params.title+'任务',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center',
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},
	/** 创建任务之后添加图片*/
	AddTaskImg: {
		screen: AddTaskImg,
		navigationOptions: (props) => {
			const {navigation} = props
			return {
				title: '创建检查任务',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},
	/**创建检查任务之后的选择区域*/
	AddTextArea: {
		screen: AddTextArea,
		navigationOptions: (props) => {
			const {navigation} = props
			return {
				title: '筛选区域',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},

	/**基础信息类型*/
	BasicDataType: {
		screen: BasicDataType,
		navigationOptions: (props) => {
			return {
				title: '基础信息',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},

	/**基础信息模块*/
	BasicData: {
		screen: BasicData,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			const {navigation} = props
			const isAbleAdd = (()=>{
				return true
                // if (global.User_msg.role === 0){
					// return true
                // } else if (global.User_msg.role === 1) {
                //     if ( global.User_msg.regionCategoryId === 6 ){
                //     	return true
					// }else return false
                // }else return false
			})()
			return {
				title: params.title ? params.title : '没找到name',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff',
				},

				headerRight: (
					<TouchableOpacity
						activeOpacity={0.8}
						onPress={() => {
							let address
							switch (params.title) {
								case '区域基础信息':
									address = 'AddAreaMsg'
									break;
								case '人员基础信息':
									address = 'AddManMsg'
									break;
								case '普通基础信息':
									address = 'AddBaseMsg'
									break;
								case '合同基础信息':
									address = 'AddContractorMsg'
									break;

							}
							navigation.navigate(address)
						}}
						style={{position:'absolute',
                            right:global.ScreenUtil.pTd(32)}}
					>
						<Image source={require('../assets/icons/add.png')} style={[styles.add_icon,isAbleAdd?'':styles.none]}/>
					</TouchableOpacity>
				)
			}
		}
	},

	/**基础信息下的添加各个基础信息模块*/
	AddAreaMsg: {
		screen: AddAreaMsg,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: '添加组信息',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},
	AddManMsg: {
		screen: AddManMsg,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: '添加人员基础信息',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},
	AddBaseMsg: {
		screen: AddBaseMsg,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: '添加基础信息',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},
	AddContractorMsg: {
		screen: AddContractorMsg,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: '添加合同信息',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},

	/**基础信息下的路由*/
	BdArea: {
		screen: AllArea,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: params.title ? params.title : '没找到name',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},

	/**保洁人员的信息下*/
	AllCleaner: {
		screen: AllCleaner,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: '保洁员汇总',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},

	/**保洁人员的增加*/
	AddCleaner: {
		screen: AddCleaner,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: params.title ? params.title : '没找到name',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},

	/**人员基础信息*/
	MsgList: {
			screen: MsgList,
			navigationOptions: (props) => {
				const {params} = props.navigation.state
				return {
					title: params.title ? params.title : params.name ? params.name : '没找到name',
					headerTitleStyle: {
						color: '#666666',
						fontSize: global.commonCss.navigationFontSize,
						flex: 1,
						textAlign: 'center'
					},
					headerStyle: {
						backgroundColor: '#ffffff'
					},
				}
			}
		},
	OneCleanerMsg: {
			screen: OneCleanerMsg,
			navigationOptions: (props) => {
				const {params} = props.navigation.state
				return {
					title: params.title ? params.title : '没找到name',
					headerTitleStyle: {
						color: '#666666',
						fontSize: global.commonCss.navigationFontSize,
						flex: 1,
						textAlign: 'center'
					},
					headerStyle: {
						backgroundColor: '#ffffff'
					},
				}
			}
		},

	/**人员的合同列表*/
	ContractorList: {
			screen: ContractorList,
			navigationOptions: (props) => {
				const {params} = props.navigation.state
				return {
					title: params.title ? params.title : '没找到name',
					headerTitleStyle: {
						color: '#666666',
						fontSize: global.commonCss.navigationFontSize,
						flex: 1,
						textAlign: 'center'
					},
					headerStyle: {
						backgroundColor: '#ffffff'
					},
				}
			}
		},
	/**人员的合同*/
	Contractor: {
		screen: Contractor,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: params.title ? params.title : '没找到name',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},
	/**添加合同信息*/
	AddContractor: {
		screen: AddContractor,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: '添加合同(' + params.title ?params.title: '' + ')',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},
	/**检查任务下的已接受任务**/
	CheckReceviedCheck: {
		screen: CheckReceviedCheck,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: '已接收'+params.title+'任务',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},
	/**自查任务下的已接受任务*/
	ReceviedCheck: {
		screen: ReceviedCheck,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: params.title,
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},

	/**任务详情*/
	TaskDetail: {
		screen: TaskDetail,
		navigationOptions: (props) => {
			const {navigation} = props
			return {
				title: '查看详情',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},
	/**回复检查信息*/
	ReplyInformation: {
		screen: ReplyInformation,
		navigationOptions: (props) => {
			const {navigation} = props
			return {
				title: '回复检查信息',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},
	/**填写自查任务*/
	SelfCheckTask:{
		screen: SelfCheckTask,
		navigationOptions: (props) => {
			const {navigation} = props
			return {
				title: '填写自查任务',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},



	/**考核评分*/
	CheckScore: {
		screen: CheckScore,
		navigationOptions: (props) => {
			return {
				title: '考核评分表',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},
	/**考核评分表的items*/
	RecoScore: {
		screen: RecoScore,
		navigationOptions: (props) => {
			return {
				title: '考核评分表',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},
	/**考核评分的编辑分数*/
	EditScore: {
		screen: EditScore,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: params.title ? params.title : '没找到name',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},
	/**分数编辑*/
	ScoreEdit: {
		screen: ScoreEdit,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: '编辑',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},

	/**查看表评分*/
	queryTabData: {
		screen: queryTabData,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: '查看表评分',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},

	/**查看自身*/
	SelfRating: {
		screen: SelfRating,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: '查看表评分',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},

	/**自查评分表*/
	Selfexamination: {
		screen: Selfexamination,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: '自查评分表',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},

	/**自查评分表的选择区域*/
	OptRegion:{
		screen: OptRegion,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: '选择区域',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},

	MsgInfomation: {
		screen: MessageInformation,
		navigationOptions: (props) => {
			return {
				title: '文件通知',
				headerTitleStyle: {
					color: '#ffffff',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#2bc39a'
				},
			}
		}
	},
	/**设置*/
	SetUp: {
		screen: SetUp,
		navigationOptions: (props) => {
			return {
				title: '设置',
				headerTitleStyle: {
					color: '#ffffff',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#2bc39a'
				},
			}
		}
	},
	/**设置下的三个选项*/
		/**修改密码*/
	RevisePassWord: {
		screen: RevisePassWord,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: '修改密码',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},
		/**二维码下载*/
	QrCodeDown: {
		screen: QrCodeDown,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: '二维码下载',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},
		/**我的信息*/
	MyMsg:{
		screen: MyMsg,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: '个人资料',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},
	/**修改头像*/
	HeadAppear:{
		screen:HeadAppear,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: '头像',
				headerTitleStyle: {
					color: '#666666',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},

	// ReceviedCheck: {
	// 	screen: ReceviedCheck,
	// 	navigationOptions: (props) => {
	// 		return {
	// 			title: '自查任务',
	// 			headerTitleStyle: {
	// 				color: '#ffffff',
	// 				fontSize: 15,
	// 				flex: 1,
	// 				textAlign: 'center'
	// 			},
	// 			headerStyle: {
	// 				backgroundColor: '#2bc39a'
	// 			},
	// 		}
	// 	}
	// },
	/**新闻列表组件*/
	WorkNewsList: {
		screen: WorkNewsList,
		navigationOptions: (props) => {
			return {
				title: '工作动态',
				headerTitleStyle: {
					color: '#ffffff',
					fontSize: global.commonCss.navigationFontSize,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#2bc39a'
				},
			}
		}
	},
	// Page3: {
	// 	screen: Page3,
	// 	navigationOptions: (props) => {
	// 		const {navigation} = props;
	// 		const {state, setParams} = navigation
	// 		const {params} = state
	// 		return {
	// 			title: params.title ? params.title : 'this is Page3',
	// 			headerRight: (
	// 				<Button title={params.mode === 'edit' ? '保存' : '编辑'}
	// 								onPress={() => {
	// 									setParams({mode: params.mode === 'edit' ? '' : 'edit'})
	// 								}}/>
	// 			)
	// 		}
	// 	}
	// }
})

