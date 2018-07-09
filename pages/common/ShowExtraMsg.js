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
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class ShowExtraMsg extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<View style={styles.contract_extra}>
				<View style={styles.extraMsg}>

				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	contract_extra:{
		flex:0,
		marginTop:15,
		justifyContent:'center',
		alignItems:'center',
		height:100,
		marginBottom:1
	},
	extraMsg:{
		width: 0.9 * width,
		borderRadius: 6,
		flex: 0,
		height:100,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffffff',
		shadowColor: "rgba(0, 0, 0, 0.1)",
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowRadius: 10,
		shadowOpacity: 1,
		elevation:1,
	},

});
