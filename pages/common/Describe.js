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
	View,
	TextInput
} from 'react-native';
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class Describe extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}
	}

	render() {
		return (
			<View style={[styles.container,this.props.customStyle]}>
				<TextInput onChangeText={this.props.changeDescribe}
									 style={[styles.describe]}
									 multiline={true}
									 underlineColorAndroid='transparent'
									 maxLength={this.props.maxLength}
									 placeholder='请输入'
									 // value={this.state.value}
				/>
				<View style={styles.font_limit}>
					<Text style={styles.limit_font}>{this.props.fontLength}/{this.props.maxLength}字</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 0,
		zIndex:-1,
		alignItems: 'center',
		height: 100,
		backgroundColor: "#ffffff",
		// shadowColor: "rgba(0, 0, 0, 0.1)",
		// shadowOffset: {
		// 	width: 0,
		// 	height: 1
		// },
		// shadowRadius: 10,
		// shadowOpacity: 1,
		// elevation: 2,
		borderRadius: 7,
		paddingBottom:15
	},
	describe: {
		paddingTop: 0,
		paddingBottom: 0,
		width: 0.9 * width,
		backgroundColor: "#ffffff",
	},
	font_limit: {
		width: 0.9 * width,
		flex: 0,
		position:'absolute',
		bottom:5,
		right:5
	},
	limit_font: {
		textAlign: 'right'
	}
});
