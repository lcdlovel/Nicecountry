import {StackNavigator, TabNavigator} from 'react-navigation'
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
import ReceivedCheck from '../pages/setUp/SetUp/RevisePassWord'
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

const styles = StyleSheet.create({
	Icon: {
		width: 25,
		height: 25
	}
})
export const Home = TabNavigator({
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
			height: 50,
			backgroundColor: '#FFF'
		},
		labelStyle: {
			color: global.commonCss.fontColor,
			fontSize: 12,
			paddingTop: 0,
			marginTop: 0,
		}
	}
})
export const RepeatCheckTab = TabNavigator({
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
		labelStyle: {
			fontSize: 15,
			flex: 0,
			alignItems: 'center',
			justifyContent: 'center'
		},
		activeBackgroundColor: '#ffffff',
		activeTintColor: '#4ECBFC',
		inactiveBackgroundColor: '#ffffff',
		inactiveTintColor: '#aaa',
	}
})
export const MessageInformation = TabNavigator({
	Check: {
		screen: CreateMsg,
		navigationOptions: {
			tabBarLabel: '已创建',
		}
	},
	SelfCheck: {
		screen: MsgSended,
		navigationOptions: {
			tabBarLabel: '已发送',
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
		activeBackgroundColor: '#ffffff',
		activeTintColor: '#4ECBFC',
		inactiveBackgroundColor: '#ffffff',
		inactiveTintColor: '#aaa',
	}
})
export const ReceviedCheck = TabNavigator({
	ReceviedChecked: {
		screen: ReceviedChecked,
		navigationOptions: {
			tabBarLabel: '待处理',
		}
	},
	ConfirmedCheck: {
		screen: ConfirmedCheck,
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
			backgroundColor: '#FFF'
		},
		activeBackgroundColor: '#ffffff',
		activeTintColor: '#4ECBFC',
		inactiveBackgroundColor: '#ffffff',
		inactiveTintColor: '#aaa',
	}
})

export const AppStackNavgator = StackNavigator({
	// StartUp: {
	// 	screen:StartUp,
	// 	navigationOptions:{
	// 		header:null
	// 	}
	// },
	// Loader:{
	// 	screen:Loader,
	// 	navigationOptions:{
	// 		header:null
	// 	}
	// },
	Home: {
		screen: Home,
		navigationOptions: {
			header: null
		}
	},
	RepeatCheckTab: {
		screen: RepeatCheckTab,
		navigationOptions: (props) => {
			return {
				title: '检查自查',
				headerTitleStyle: {
					color: '#ffffff',
					fontSize: 15,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#2bc39a'
				},
			}
		}
	},
	TaskCreate: {
		screen: TaskCreate,
		navigationOptions: (props) => {
			return {
				title: '创建任务',
				headerTitleStyle: {
					color: '#ffffff',
					fontSize: 15,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#2bc39a'
				},
			}
		}
	},
	/*基础信息*/
	BasicDataType: {
		screen: BasicDataType,
		navigationOptions: (props) => {
			return {
				title: '基础信息',
				headerTitleStyle: {
					color: '#666666',
					fontSize: 15,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},
	BasicData: {
		screen: BasicData,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			const {navigation} = props
			return {
				title: params.title ? params.title : '没找到name',
				headerTitleStyle: {
					color: '#666666',
					fontSize: 15,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
				headerRight: (
					<TouchableOpacity
						activeOpacity={0.8}
						onPress={() => {
							let address
							switch (params.title){
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
							navigation.navigate(address,)
						}}
					>
						<Text style={{fontSize: 25, color: '#000'}}>+</Text>
					</TouchableOpacity>
				)
			}
		}
	},
	/*基础信息下的添加各个基础信息模块*/
	AddAreaMsg:{
		screen: AddAreaMsg,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: '添加组信息',
				headerTitleStyle: {
					color: '#666666',
					fontSize: 15,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},
	AddManMsg:{
		screen: AddManMsg,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: '添加人员信息',
				headerTitleStyle: {
					color: '#666666',
					fontSize: 15,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},
	AddBaseMsg:{
		screen: AddBaseMsg,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: '添加基础信息',
				headerTitleStyle: {
					color: '#666666',
					fontSize: 15,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},
	AddContractorMsg:{
		screen: AddContractor,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: '添加合同信息',
				headerTitleStyle: {
					color: '#666666',
					fontSize: 15,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},
	/*基础信息下的路由*/
	BdArea: {
		screen: AllArea,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: params.title ? params.title : '没找到name',
				headerTitleStyle: {
					color: '#666666',
					fontSize: 15,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},
	/**/
	/*保洁人员的信息下*/
	AllCleaner: {
		screen: AllCleaner,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: '保洁员汇总',
				headerTitleStyle: {
					color: '#666666',
					fontSize: 15,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},
	AddCleaner: {
		screen: AddCleaner,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: params.title ? params.title : '没找到name',
				headerTitleStyle: {
					color: '#666666',
					fontSize: 15,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},
	/*人员基础信息*/
	MsgList:
		{
			screen: MsgList,
			navigationOptions: (props) => {
				const {params} = props.navigation.state
				return {
					title: params.title ? params.title : params.name ? params.name : '没找到name',
					headerTitleStyle: {
						color: '#666666',
						fontSize: 15,
						flex: 1,
						textAlign: 'center'
					},
					headerStyle: {
						backgroundColor: '#ffffff'
					},
				}
			}
		},
	OneCleanerMsg:
		{
			screen: OneCleanerMsg,
			navigationOptions: (props) => {
				const {params} = props.navigation.state
				return {
					title: params.title ? params.title : '没找到name',
					headerTitleStyle: {
						color: '#666666',
						fontSize: 15,
						flex: 1,
						textAlign: 'center'
					},
					headerStyle: {
						backgroundColor: '#ffffff'
					},
				}
			}
		},
	/*人员的合同列表*/
	ContractorList:
		{
			screen: ContractorList,
			navigationOptions: (props) => {
				const {params} = props.navigation.state
				return {
					title: params.title ? params.title : '没找到name',
					headerTitleStyle: {
						color: '#666666',
						fontSize: 15,
						flex: 1,
						textAlign: 'center'
					},
					headerStyle: {
						backgroundColor: '#ffffff'
					},
				}
			}
		},
	Contractor: {
		screen: Contractor,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: params.title ? params.title : '没找到name',
				headerTitleStyle: {
					color: '#666666',
					fontSize: 15,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},
	AddContractor: {
		screen: AddContractor,
		navigationOptions: (props) => {
			const {params} = props.navigation.state
			return {
				title: '添加合同(' + params.title ? params.title : '没找到name' + ')',
				headerTitleStyle: {
					color: '#666666',
					fontSize: 15,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#ffffff'
				},
			}
		}
	},


	CheckScore: {
		screen: CheckScore,
		navigationOptions: (props) => {
			return {
				title: '考核评分',
				headerTitleStyle: {
					color: '#ffffff',
					fontSize: 15,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#2bc39a'
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
					fontSize: 15,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#2bc39a'
				},
			}
		}
	},
	/*设置*/
	SetUp: {
		screen: SetUp,
		navigationOptions: (props) => {
			return {
				title: '设置',
				headerTitleStyle: {
					color: '#ffffff',
					fontSize: 15,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#2bc39a'
				},
			}
		}
	},
	/*设置下的三个选项*/
	ReceivedCheck: {
		screen: ReceivedCheck,
		navigationOptions: (props) => {
			return {
				title: '修改密码',
				headerTitleStyle: {
					color: '#ffffff',
					fontSize: 15,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#2bc39a'
				},
			}
		}
	},
	QrCodeDown: {
		screen: QrCodeDown,
		navigationOptions: (props) => {
			return {
				title: '二维码下载',
				headerTitleStyle: {
					color: '#ffffff',
					fontSize: 15,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#2bc39a'
				},
			}
		}
	},
	ReceviedCheck: {
		screen: ReceviedCheck,
		navigationOptions: (props) => {
			return {
				title: '自查任务',
				headerTitleStyle: {
					color: '#ffffff',
					fontSize: 15,
					flex: 1,
					textAlign: 'center'
				},
				headerStyle: {
					backgroundColor: '#2bc39a'
				},
			}
		}
	},
	/*x新闻列表组件*/
	WorkNewsList: {
		screen: WorkNewsList,
		navigationOptions: (props) => {
			return {
				title: '工作动态',
				headerTitleStyle: {
					color: '#ffffff',
					fontSize: 15,
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

