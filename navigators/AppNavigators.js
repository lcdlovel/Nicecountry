import {StackNavigator} from 'react-navigation'

import {Button} from 'react-native'
import StartUp from "../pages/Startup/StartUp";
import Loader from "../pages/loader/Loader";


export const AppStackNavgator = StackNavigator(    {
	StartUp: {
		screen:StartUp,
		navigationOptions:{
			header:null
		}
	},
	Loader:{
		screen:Loader,
		navigationOptions:{
			header:null
		}
	}
	// Page1: {
	// 	screen: Page1,
	// },
	// Page2: {
	// 	screen: Page2,
	// 	navigationOptions: ({navigation}) => ({
	// 		title: `${navigation.state.params.name}页面名`
	// 	})
	// },
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