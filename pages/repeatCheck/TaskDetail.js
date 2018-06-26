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
	ScrollView
} from 'react-native';
import ShowDetailMsg from '../common/ShowDetailMsg'
import ImgList from "../common/ImgList";
//获取屏幕信息
let dimensions = require('Dimensions')
//获取屏幕宽度
let {width} = dimensions.get('window')
type Props = {};
export default class TaskDetail extends Component<Props> {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<ScrollView>
			<View style={styles.container}>
				<ShowDetailMsg/>
				<ImgList url={require('../../assets/News/201806141307.jpg')}/>
			</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
	},

});
