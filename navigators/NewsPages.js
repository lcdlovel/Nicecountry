import {StackNavigator, TabNavigator} from 'react-navigation'
import WorkNewsList from '../pages/NewsList/WorkNewsList'
import NiceCountry from '../pages/NewsList/NiceCountry'

export const NewsType = TabNavigator({
	ReceviedChecked: {
		screen: NiceCountry,
		navigationOptions: {
			tabBarLabel: '待处理',
		}
	},
	ConfirmedCheck: {
		screen: WorkNewsList,
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
export const NewsPages = StackNavigator({
	NewsType: {
		screen: NewsType,
		navigationOptions: (props) => {
			return {
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
})