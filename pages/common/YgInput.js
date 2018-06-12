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
	TextInput,
	Image
} from 'react-native';
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class YgInput extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		const {onChangeText} = this.props
		return (
			<View style={styles.container}>
				<View style={styles.search}>
					<View style={styles.search_img}>
						<Image source={require('../../assets/images/search_info.png')} style={styles.search_info}/>
					</View>
					<TextInput placeholder='搜索' style={styles.search_input} underlineColorAndroid='transparent'
										 onChangeText={onChangeText}/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 0,
		backgroundColor: '#F5FCFF',
	},
	search: {
		flex: 0,
		width: width,
		flexDirection: 'row'
	},
	search_info: {
		width: 15,
		height: 15,
		position: 'absolute',
		right: 0,
		bottom:5
	},
	search_img: {
		width: 30,
		height: 30,
	},
	search_input: {
		width: 0.8 * width,
		height: 40,
	}
});
