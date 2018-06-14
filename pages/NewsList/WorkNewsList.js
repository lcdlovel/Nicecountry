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
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class WorkNewsList extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {}
	}

	_listConstractor() {
		return(
			<View style={styles.nl_list}>
				<Text>工作动态</Text>
			</View>
		)
	}

	render() {
		return (
			<View style={styles.container}>
				{this._listConstractor()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},
	nl_list:{
		height:50,
		borderBottomWidth:0.8,
		borderBottomColor:global.commonCss.borderColor
	}
});
