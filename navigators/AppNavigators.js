import {StackNavigator, TabNavigator} from 'react-navigation'
import React from 'react'
import {Text} from 'react-native'
import {Button} from 'react-native'
import StartUp from "../pages/Startup/StartUp";
import Loader from "../pages/loader/Loader";
import HomePage from "../pages/homePage/HomePage";
import Check from "../pages/repeatCheck/Check";
import SelfCheck from "../pages/repeatCheck/SelfCheck";
import TaskCreate from "../pages/repeatCheck/taskCreate/TaskCreate";

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
	swipeEnabled:false,
	tabBarOptions: {
		style: {
			height: 49,
			backgroundColor:'#FFF'
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
	// HomePage: {
	// 	screen: HomePage,
	// 	navigationOptions: {
	// 		header: null
	// 	}
	// },
	// RepeatCheckTab: {
	// 	screen: RepeatCheckTab,
	// 	navigationOptions: (props) => {
	// 		return {
	// 			title: '检查自查',
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
	TaskCreate:{
		screen:TaskCreate,
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
	}
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

