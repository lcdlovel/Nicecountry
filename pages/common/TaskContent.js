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
	TouchableOpacity
} from 'react-native';
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class TaskContent extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			isFocused: false
		}
	}

	render() {
		return (
			<View>
				<TouchableOpacity activeOpacity={1}
													style={this.state.isFocused ? styles.focused : styles.container}
													onPress={() => {
														this.setState(previousState => {
															return {isFocused: !previousState.isFocused};
														})
													}}
				>
					<Text style={this.state.isFocused ? styles.focused_font : styles.font}>{this.props.content}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	focused: {
		flex: 0,
		borderRadius: 13,
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "#2bc39a",
		paddingTop: 3,
		paddingBottom: 3,
		paddingRight: 5,
		paddingLeft: 5,
		marginLeft: 5,
		marginTop: 5,
	},
	container: {
		flex: 0,
		borderRadius: 13,
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "#8a8f8e",
		paddingTop: 3,
		paddingBottom: 3,
		paddingRight: 5,
		paddingLeft: 5,
		marginLeft: 5,
		marginTop: 5,
	},
	font: {
		color: "#828383",
		fontSize: 13,
	},
	focused_font: {
		color: "#2bc39a",
		fontSize: 13,
	}
});
