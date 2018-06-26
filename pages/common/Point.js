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
export default class Point extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {
		const {pointColor} = this.props
		return (
			<View style={[styles.container,pointColor]}>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width:5,
		height:5,
		borderRadius:3,
		backgroundColor:global.commonCss.mainColor
	},
});
