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
import Point from './Point'
import global from "../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class SubHeadTitle extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<View style={{flex: 0,alignItems:'center' ,width: width}}>
				<View style={[styles.container, this.props.row_custom]}>
					<Point/>
					<Text style={[styles.titleName, this.props.font_custom]}>{this.props.titleName}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: 0.95 * width,
		flex: 0,
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop:5,
		paddingBottom:5,
		// justifyContent:'center',
		backgroundColor: global.commonCss.screenColor,
	},
	titleName: {
		fontSize: 17,
		color: '#0c0c0c',
		marginLeft: 5
	}
});
