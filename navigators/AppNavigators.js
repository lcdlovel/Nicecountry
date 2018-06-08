import {StackNavigator, TabNavigator} from 'react-navigation'
import React from 'react'
import HomePage from "../pages/homePage/HomePage";
import Check from "../pages/repeatCheck/Check";
import SelfCheck from "../pages/repeatCheck/SelfCheck";
import TaskCreate from "../pages/repeatCheck/taskCreate/TaskCreate";
import BasicData from "../pages/basicData/BasicData";
import CheckScore from '../pages/checkScore/CheckScore'
import SetUp from '../pages/setUp/SetUp'
import CreateMsg from '../pages/msgInformation/CreatMsg'
import MsgSended from '../pages/msgInformation/MsgSended'
import ReceviedChecked from '../pages/repeatCheck/SelfCheck/ReceivedCheck'
import ConfirmedCheck from '../pages/repeatCheck/SelfCheck/ConfirmedCheck'
import ReceivedCheck from '../pages/setUp/SetUp/RevisePassWord'
import QrCodeDown from '../pages/setUp/SetUp/QrCodeDown'

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
			height: 49,
			backgroundColor: '#FFF'
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
	HomePage: {
		screen: HomePage,
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
	BasicData: {
		screen: BasicData,
		navigationOptions: (props) => {
			return {
				title: '基础信息',
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

