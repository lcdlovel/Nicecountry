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
import global from "../../utils/global/global";
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
					<View style={styles.text_Input}>
						<TextInput placeholder='搜索' style={styles.search_input} underlineColorAndroid='transparent'
											 onChangeText={onChangeText}/>
					</View>
					<View style={styles.search_img}>
						<Image source={require('../../assets/images/search.png')} style={styles.search_info}/>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 0,
		backgroundColor: '#ffffff',
	},
	search: {
		flex: 0,
		width: width,
		justifyContent:'center',
		alignItems:'center',
		height:65,
		flexDirection: 'row'
	},
	search_info: {
		width: 22,
		height: 22,
	},
	search_img: {
		width: 50,
		height: 42,
		flex:0,
		justifyContent:'center',
		alignItems:'center',
		borderTopRightRadius:20,
		borderBottomRightRadius:20,
		backgroundColor:global.commonCss.mainColor,

	},
	search_input: {
		width: 0.7 * width,
		height: 42,
	},
	text_Input:{
		width: 0.75 * width,
		height: 42,
		borderTopLeftRadius:20,
		borderBottomLeftRadius:20,
		paddingLeft:10,
		backgroundColor:'#fafafa'
	}
});
