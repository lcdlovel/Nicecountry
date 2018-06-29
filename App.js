/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {AppStackNavgator} from './navigators/AppNavigators'
import { Provider } from 'react-redux';
import configureStore from './Redux/store/ConfigureStore';
const store = configureStore();
export default class Root extends Component{
	render() {
		return (
			<Provider store={store}>
				<AppStackNavgator />
			</Provider>
		)
	}
}
