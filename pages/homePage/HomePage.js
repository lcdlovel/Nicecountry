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
	View
} from 'react-native';
import global from "../../utils/global/global";
import CrudApi from "../../utils/request/crud";

type Props = {};
export default class HomePage extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>开始我的联系</Text>
				<Text onPress={()=>{
					CrudApi.getInfo({
						url:'/user/getUserVo',
						callback:(res)=>{
							alert(res)
						}
					})
				}}>{global.token}</Text>
				<Text>取token</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	}
});
