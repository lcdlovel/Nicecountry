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
	Image
} from 'react-native';
import YgInput from '../../common/YgInput'
import global from "../../../utils/global/global";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class OptRegion extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {}
	}

	_items() {
	}

	_RegionItem() {
		return (
			<View>
				<View style={styles.first_step}>
					<Image resizeMode='cover'  source={require('../../../assets/images/password.png')} style={styles.denote_img}/>
					<Text>姜岩镇</Text>
				</View>
			</View>
		)
	}

	render() {
		return (
			<View style={styles.container}>
				<YgInput/>
				<View>
					{this._RegionItem()}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
	first_step:{
		flex:0,
		flexDirection:'row',
		height:40,
		alignItems:'center',
		borderBottomWidth:0.5,
		borderColor:global.commonCss.borderColor
	},
	denote_img:{
		width:13,
		height:13
	}
});
