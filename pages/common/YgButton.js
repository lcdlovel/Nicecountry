/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * 自定义 按钮 组件
 * 参数:title,style,onPress
 */

import React, {Component} from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
	TouchableOpacity
} from 'react-native';

export default class YgButton extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		const {fontstyle,btnstyle,title,onPress} = this.props
		return (
			<TouchableOpacity
				onPress={onPress}
				activeOpacity={0.8}
				style={btnstyle}>
				<View style={styles.container}>
					<Text style={[fontstyle,styles.btn_font]}>{title}</Text>
				</View>

			</TouchableOpacity >
		)
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 0,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btn_font:{
		fontFamily:'PingFangSC-Light'
	}
})

